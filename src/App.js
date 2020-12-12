import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

// import Villagers from "./pages/Villagers";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";

import { Route, Switch, withRouter, Redirect } from "react-router-dom";
import { useState, useEffect } from "react";
import { getUser, logout } from "./services/userService"

import "./App.css";
import axios from "axios";

function App(props) {

  const [ userState, setUserState ] = useState({ user: getUser() });
  const [villagers, setVillagers] = useState([]);

  function handleSignupOrLogin() {
    setUserState({ user: getUser() });
    props.history.push("/villagers");
  }

  function handleLogout(){
    logout(); 
    setUserState({ user: null });
    props.history.push("/");
  }

  const getVillagers = async () => {
    const res = await axios.get("https://acnhapi.com/v1a/villagers");
    const limitedVillagersArray = [];
    for (let i = 0; i <= 50; i++) {
      limitedVillagersArray.push(res.data[i]);
    }
    setVillagers(limitedVillagersArray);
  };

  useEffect(() => {
    getVillagers();
  }, []);

  return (
    <div className="App">
        <Header user={userState.user} handleLogout={handleLogout} />
          
          <Switch>
            
            <Route exact path="/" render={ props =>
              <HomePage />
            } />
            
            <Route exact path="/villagers" render={ props =>
              getUser() ?
              
              <div className="container">
              {villagers.map((villager, idx) => {
                return <div className="card">  
                  <p>
                    <img src={villager.image_uri} alt="villager" />
                    <h3>{villager.name["name-USen"]}</h3>
                      Species: {villager.species}<br/>
                      Gender: {villager.gender}<br/>
                      Hobby: {villager.hobby}<br/>
                      Personality: {villager.personality}
                  </p>
              
              </div>;
              })}
              </div>

              :

              <Redirect to="/login" />
            } />
            
            <Route exact path="/login" render={ props =>
              <LoginPage handleSignupOrLogin={handleSignupOrLogin} />
            } />
            
            <Route exact path="/signup" render={ props =>
              <SignupPage handleSignupOrLogin={handleSignupOrLogin} />
            } />
            
            </Switch>
        <Footer />
    </div>
  );
}

export default withRouter(App);

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import DashboardPage from "./pages/DashboardPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";

import { Route, Switch, withRouter } from "react-router-dom";
import { useState } from "react";
import { getUser } from "./services/userService"

import "./App.css";

function App(props) {

  const [ userState, setUserState ] = useState({ user: getUser() });

  function handleSignupOrLogin() {
    setUserState({ user: getUser() });
    props.history.push("/dashboard");
  }

  return (
    <div className="App">
        <Header />
          <Switch>
            <Route exact path="/" render={ props =>
              <HomePage />
            } />
            <Route exact path="/dashboard" render={ props =>
              <DashboardPage />
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

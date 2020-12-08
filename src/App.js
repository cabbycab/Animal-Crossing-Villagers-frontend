import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import DashboardPage from "./pages/DashboardPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";

import { Route, Switch } from "react-router-dom";

import "./App.css";

function App() {
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
              <LoginPage />
            } />
            <Route exact path="/signup" render={ props =>
              <SignupPage />
            } />
            </Switch>
        <Footer />
    </div>
  );
}

export default App;

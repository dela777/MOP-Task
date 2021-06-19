import "bootstrap/dist/css/bootstrap.min.css";
import LogIn from "./Pages/LogIn";
import Register from "./Pages/Register";
import ProfilePage from "./Pages/ProfilePage";
import ChangePassword from "./Components/ChangePassword";
import {v4 as uuid} from 'uuid';

import Navigation from "./Components/Navigation";
import { Route, BrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import { ApiUrl } from "./Components/Helpers/ApiUrl";


import "./App.css";

const App = () => {
  const apiUrl = `${ApiUrl}users`;
  const storeUser = (user) => {
    return fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
  };
  const logInUser = (data) => {};
  const registerUser = (data) => {
    storeUser({id: uuid(),...data}).then(() => {
      alert("A new account was creater!!!");
    });
  };

  return (
    <BrowserRouter>
      <Navigation />
      <Route path="/home">
        <Home />
      </Route>
      <Route path="/login">
        <LogIn logInUser={logInUser} />
      </Route>
      <Route path="/register">
        <Register registerUser={registerUser} />
      </Route>
      <Route path="/profile">
        <ProfilePage />
      </Route>
      <Route path="/changepassword">
        <ChangePassword />
      </Route>
    </BrowserRouter>
  );
};

export default App;

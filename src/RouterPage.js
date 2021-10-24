import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import LoginPageContainer from "./components/Login/LoginPageContainer";
import ProfilePageContainer from "./components/Profile/ProfilePageContainer";

const RouterPage = () => {
  return (
    <div className="wrapper">
      <Switch>
        <Route path="/" exact component={LoginPageContainer} />
        <Route path="/profile" exact component={ProfilePageContainer} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
};

export default RouterPage;

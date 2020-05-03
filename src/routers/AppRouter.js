import { BrowserRouter, Route, Switch } from "react-router-dom";
import React from "react";
import RaffleForm from "../components/RaffleForm";
import Dashboard from "../components/Dashboard";
import RaffleList from "../components/RaffleList";
import RegistrationForm from "../components/RegistrationForm";
import MyAccount from "../components/MyAccount";
const AppRouter = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact={true} path="/" component={Dashboard} />
        <Route exact={true} path="/raffle/new" component={RaffleForm} />
        <Route exact={true} path="/raffles" component={RaffleList} />
        <Route exact={true} path="/register" component={RegistrationForm} />
        <Route exact={true} path="/myAccount" component={MyAccount} />
      </Switch>
    </BrowserRouter>
  );
};

export default AppRouter;

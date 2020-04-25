import {BrowserRouter, Route, Switch} from 'react-router-dom';
import React from 'react';
import RaffleForm from '../components/RaffleForm';
import Dashboard from '../components/Dashboard';

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact={true} path="/" component={Dashboard}/>
                <Route exact={true} path="/raffle/new" component={RaffleForm}/>
            </Switch>
        </BrowserRouter>
    )


}

export default AppRouter;
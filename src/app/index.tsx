import * as React from 'react';
import {Route, Router, Switch} from 'react-router-dom';
import {HomeContainer} from "app/containers/HomeContainer";
import {LoginContainer} from "app/containers/LoginContainer";

export const App = function ({history}: { history: any }) {
    return (
        <Router history={history}>
            <Switch>
                <Route exact path="/">
                    <HomeContainer/>
                </Route>
                <Route path="/login">
                    <LoginContainer/>
                </Route>
            </Switch>
        </Router>
    );
}

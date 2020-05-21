import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Application } from '../components/Application/Application';
import { Navigation } from '../components/Navigation/Navigation';
import { Login } from '../components/Login/Login';
import { Provider } from 'react-redux';
import { store } from '../store/configureStore';
export const AppRouter = () => (
    <Provider store={store}>
        <BrowserRouter>
            <>
                <Navigation />
                <Switch>
                    <Route path="/" exact={true} component={Login} />
                    <Route path="/home" component={Application}></Route>
                    <Route render={() => <>Error 404, Page not found!</>} />
                </Switch>
            </>
        </BrowserRouter>
    </Provider>
);

import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Layout } from '../components/Layout/Layout';
import { Login } from '../components/Login/Login';
import { PageNotFound } from '../components/PageNotFound/PageNotFound';
import { Provider } from 'react-redux';
import { store } from '../store/configureStore';

export const AppRouter = () => (
    <Provider store={store}>
        <BrowserRouter>
            <>
                <Switch>
                    <Route path="/" exact={true} component={Login} />
                    <Route path="/home" component={Layout}></Route>
                    <Route component={PageNotFound} />
                </Switch>
            </>
        </BrowserRouter>
    </Provider>
);

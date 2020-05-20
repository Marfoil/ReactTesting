import React from 'react';
import classes from './Application.styles';
import { Navigation } from '../Navigation/Navigation';
import { store } from '../../store/configureStore';
import { Provider } from 'react-redux';

export const Application = () => {
    return (
        <Provider store={store}>
            <div className={classes.main}>
                <Navigation />
                <div className={classes.body}>Body</div>
            </div>
        </Provider>
    );
};

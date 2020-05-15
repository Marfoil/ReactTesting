import React from 'react';
import classes from './Application.styles';
import { Navigation } from '../Navigation/Navigation';

export const Application = () => {
    return (
        <div className={classes.main}>
            <Navigation>Navigation</Navigation>
            <div className={classes.body}>Body</div>
        </div>
    );
};

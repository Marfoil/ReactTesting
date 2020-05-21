import React from 'react';
import classes from './Layout.styles';
import { Navigation } from '../Navigation/Navigation';
import { Application } from '../Application/Application';

export const Layout = () => {
    return (
        <div className={classes.layout}>
            <div>
                <Navigation />
            </div>
            <div>
                <Application />
            </div>
        </div>
    );
};

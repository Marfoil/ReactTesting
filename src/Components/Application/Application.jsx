import React from 'react';
import classes from './Application.styles';
import { Poster } from '../Poster/Poster';

export const Application = () => {
    return (
        <div className={classes.main}>
            <div className={classes.body}>Body</div>
            <Poster />
        </div>
    );
};

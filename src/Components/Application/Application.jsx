import React, { useState } from 'react';
import { useStyles } from './Application.styles';
import background from '../../../public/img/background.png';

export const Application = () => {
    const classes = useStyles({ image: background });
    return (
        <div className={classes.main}>
            <div className={classes.navigation}>Navigation</div>
            <div>Others</div>
        </div>
    );
};

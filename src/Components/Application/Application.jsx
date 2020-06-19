import React from 'react';
import classes from './Application.styles';
import { Carrousel } from '../Carrousel/Carrousel';
import shows from '../../mocks/mock';

export const Application = () => {
    return (
        <div className={classes.main}>
            <Carrousel category="Films" data={shows} />
        </div>
    );
};

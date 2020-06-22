import React, { useCallback } from 'react';
import classes from './PageNotFound.styles';
import 'normalize.css';
import { useHistory } from 'react-router-dom';

export const PageNotFound = () => {
    const history = useHistory();

    const redirectLogin = useCallback(() => {
        history.push('/');
    }, []);

    return (
        <div className={classes.main}>
            <div className={classes.content}>
                <h1>404</h1>
                <h3>Page not found</h3>
                <button className={classes.button} onClick={redirectLogin}>
                    Return Login
                </button>
            </div>
        </div>
    );
};

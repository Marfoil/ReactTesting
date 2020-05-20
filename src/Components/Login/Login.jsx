import React from 'react';
import classes from './Login.styles';
import login from '../../../public/img/login.png';
import 'normalize.css';

export const Login = () => {
    return (
        <div className={classes.main}>
            <div className={classes.border}>
                <p className={classes.border}>
                    <img className={classes.logo} src={login} />
                </p>
                <form>
                    <input className={classes.input} placeholder="Username" />
                    <input className={classes.input} placeholder="Password" type="password" />
                    <button className={classes.button}>Login</button>
                </form>
            </div>
        </div>
    );
};

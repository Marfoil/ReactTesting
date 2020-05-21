import React from 'react';
import classes from './Login.styles';
import login from '../../../public/img/login.png';
import 'normalize.css';
import { useHistory } from 'react-router-dom';

export const Login = () => {
    const history = useHistory();
    return (
        <div className={classes.main}>
            <div className={classes.border}>
                <p className={classes.border}>
                    <img className={classes.logo} src={login} />
                </p>
                <form>
                    <input autoComplete="username" className={classes.input} placeholder="Username" />
                    <input
                        autoComplete="current-password"
                        className={classes.input}
                        placeholder="Password"
                        type="password"
                    />
                    <button
                        onClick={() => {
                            history.push('/home');
                        }}
                        className={classes.button}
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

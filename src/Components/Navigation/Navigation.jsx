import React from 'react';
import homeImg from '../../../public/img/home.png';
import classes from './Navigation.styles';
import { Search } from '../Search/Search';

export const Navigation = () => {
    return (
        <div className={classes.main}>
            <div className={classes.home}>
                <img src={homeImg}></img>
            </div>
            <div className={classes.navigation}>
                <div className={classes.navigationItem}>Cosa1</div>
                <div className={classes.navigationItem}>Cosa2</div>
                <div className={classes.navigationItem}>Cosa3</div>
                <div className={classes.navigationItem}>Cosa4</div>
            </div>
            <div className={classes.search}>
                <Search />
            </div>
        </div>
    );
};

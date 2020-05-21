import React from 'react';
import classes from './Poster.styles';

export const Poster = () => {
    return (
        <div className={classes.wrapper}>
            <img
                className={classes.image}
                src="https://images-na.ssl-images-amazon.com/images/I/71wbalyU7tL._AC_SY741_.jpg"
            />
            <p className={classes.tittle}>El joker</p>
        </div>
    );
};

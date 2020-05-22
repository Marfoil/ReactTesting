import React from 'react';
import classes from './Poster.styles';

export const Poster = props => {
    return (
        <div className={classes.wrapper}>
            <img className={classes.image} src={props.imgSrc} />
            <p className={classes.title}>{props.title}</p>
        </div>
    );
};

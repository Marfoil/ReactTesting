import React from 'react';
import classes from './Application.styles';
import { Poster } from '../Poster/Poster';

export const Application = () => {
    return (
        <div className={classes.main}>
            <p className={classes.body}>Films:</p>
            <div>
                <Poster
                    title="El Joker"
                    imgSrc="https://images-na.ssl-images-amazon.com/images/I/71wbalyU7tL._AC_SY741_.jpg"
                />
            </div>
        </div>
    );
};

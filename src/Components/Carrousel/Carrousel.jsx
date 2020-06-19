import React from 'react';
import { Poster } from '../Poster/Poster';
import classes from './Carrousel.styles';

export const Carrousel = props => {
    return (
        <div className={classes.wrapper}>
            {props.data.map((categoryInfo, categoryIndex) => {
                return (
                    <>
                        <p className={classes.body} key={categoryInfo + categoryIndex}>
                            {categoryInfo.category}
                        </p>
                        <div className={classes.filmsWrapper} key={categoryInfo + categoryIndex + 'filmsWrapper'}>
                            {categoryInfo.objects.map((filmInfo, filmIndex) => {
                                return (
                                    <div
                                        className={classes.posterWrapper}
                                        key={categoryIndex + filmInfo.title + filmIndex + 'wrapper'}
                                    >
                                        <Poster
                                            title={filmInfo.title}
                                            imgSrc={filmInfo.image}
                                            key={categoryIndex + filmInfo.title + filmIndex}
                                        />
                                    </div>
                                );
                            })}
                        </div>
                    </>
                );
            })}
        </div>
    );
};

import React, { useState, useCallback } from 'react';
import classes from './Search.styles';
import searchImg from '../../../public/img/search.png';

export const Search = () => {
    const [displayInput, setDisplayInput] = useState(false);
    const [filterText, setFilterText] = useState('');

    const handleMouseOut = useCallback(() => {
        setDisplayInput(false);
        setFilterText('');
    });

    const onChangeFilter = useCallback(event => {
        setFilterText(event.target.value);
    });

    return (
        <div className={classes.wrapper} onMouseLeave={handleMouseOut}>
            <div className={classes.wrapperInput(displayInput)}>
                <input onChange={onChangeFilter} className={classes.input} value={filterText} />
            </div>
            <img className={classes.icon} src={searchImg} onMouseOver={() => setDisplayInput(true)} />
        </div>
    );
};

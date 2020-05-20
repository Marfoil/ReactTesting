import React, { useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import classes from './Search.styles';
import searchImg from '../../../public/img/search.png';
import { setTextFilter } from '../../actions/filters';

export const Search = () => {
    const text = useSelector(state => state.text);
    const dispatch = useDispatch();

    const [displayInput, setDisplayInput] = useState(false);

    const handleMouseOut = useCallback(() => {
        setDisplayInput(false);
        dispatch(setTextFilter(''));
        document.activeElement.blur();
    });

    const onChangeFilter = useCallback(event => {
        dispatch(setTextFilter(event.target.value));
    });

    return (
        <div className={classes.wrapper} onMouseLeave={handleMouseOut}>
            <div className={classes.wrapperInput(displayInput)}>
                <input id="searchInput" onChange={onChangeFilter} className={classes.input} value={text} />
            </div>
            <img
                className={classes.icon}
                src={searchImg}
                onMouseOver={() => setDisplayInput(true)}
                onClick={() => searchInput.focus()}
            />
        </div>
    );
};

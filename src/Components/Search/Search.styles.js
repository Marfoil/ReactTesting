import { css } from 'emotion';

const wrapper = css({
    display: 'flex',
    color: 'white',
    label: 'searchWrapper',
});
const icon = css({
    width: '2rem',
    height: '2rem',
    marginLeft: '1rem',
    transition: 'all .5s ease',
    cursor: 'pointer',
    '&:hover': {
        transform: 'scale(1.3)',
    },
    label: 'searchIcon',
});

const wrapperInput = show =>
    css({
        visibility: show ? 'visible' : 'hidden',
        opacity: show ? 1 : 0,
        transition: show ? 'opacity .5s ease' : 'visibility 0s 2s, opacity .5s ease',
        border: '0',
        display: 'flex',
    });

const input = css({
    background: '#616161',
    color: 'white',
    border: 0,
});

export default {
    icon,
    wrapperInput,
    wrapper,
    input,
};

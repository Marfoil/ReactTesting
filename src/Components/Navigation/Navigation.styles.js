import { css } from 'emotion';

const main = css({
    height: '100%',
    backgroundColor: '#242424',
    paddingLeft: '1rem',
    display: 'grid',
    gridTemplateColumns: '15% 1fr 15%',
    alignItems: 'center',
    gridArea: 'navigation',
    borderBottom: '1px solid rgba(255,255,255,.25)',
    userSelect: 'none',
    color: 'white',
    fontFamily: "'Roboto', sans-serif",
    boxSizing: 'border-box',
    label: 'Navigationmain',
});

const navigation = css({
    display: 'flex',
    transition: 'font-size .5s ease',
    label: 'navigation',
    justifyContent: 'center',
    alignItems: 'center',
});

const navigationItem = css({
    marginRight: '2rem',
    cursor: 'pointer',
    transition: 'all .5s ease',
    '&:hover': {
        transform: 'scale(1.5)',
    },
    label: 'navigationItem',
});

const home = css({
    '& img': {
        '&:hover': {
            transition: 'all .5s ease-in-out',
            transform: 'scale(1.2)',
        },
        cursor: 'pointer',
        width: '2rem',
        height: '2rem',
    },
    label: 'home',
});

const search = css({
    label: 'search',
    marginRight: '2rem',
    justifySelf: 'right',
});

export default {
    main,
    navigation,
    navigationItem,
    home,
    search,
};

import { css } from 'emotion';

const main = css({
    paddingLeft: '1rem',
    display: 'grid',
    gridTemplateColumns: '15% 1fr',
    gridTemplateAreas: `'home navigationLinks'`,
    alignItems: 'center',
    gridArea: 'navigation',
    backgroundColor: 'rgba(0,0,0,0.2)',
    borderBottom: '1px solid rgba(255,255,255,.25)',
    userSelect: 'none',
    label: 'main',
});

const navigation = css({
    display: 'flex',
    transition: 'font-size .5s ease',
    gridArea: 'navigationLinks',
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
    gridArea: 'home',
    transformOrigin: 'left',
    transition: 'all .5s ease-in-out',
    '&:hover': {
        transform: 'scale(1.3)',
    },
    '& img': {
        cursor: 'pointer',
        width: '2rem',
        height: '2rem',
    },
    label: 'home',
});

export default {
    main,
    navigation,
    navigationItem,
    home,
};

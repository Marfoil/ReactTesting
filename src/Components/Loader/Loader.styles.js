import { css, keyframes } from 'emotion';

const animation = keyframes({
    '0%': {
        transform: 'rotate(0deg)',
    },
    '100%': {
        transform: 'rotate(360deg)',
    },
});

const main = css({
    label: 'animation',
    background: 'black',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    '&:after': {
        content: '""',
        display: 'block',
        width: '50%',
        height: '50%',
        borderRadius: '50%',
        border: '6px solid #ffffff',
        borderColor: '#ffffff transparent #ffffff transparent',
        animation: `${animation} 1.2s linear infinite`,
    },
});

export default { main };

import { css } from 'emotion';

const main = css({
    backgroundColor: '#242424',
    height: '100vh',
    width: '100vw',
    color: 'white',
    backgroundPosition: 'center',
    display: 'flex',
    fontFamily: "'Roboto', sans-serif",
    label: 'area',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
});

const input = css({
    outline: 'none',
    backgroundColor: '#242424',
    color: 'white',
    display: 'flex',
    label: 'textInput',
    border: 0,
    borderBottom: '1px solid gray',
    margin: '1rem',
    padding: '0.5rem',
    marginTop: '3rem',
    width: '80%',
});

const border = css({
    border: '2px solid gray',
    padding: '3rem',
    '& p': {
        border: 0,
        borderBottom: '1px solid rgba(255,255,255,.25)',
    },
});

const logo = css({
    width: '10rem',
    height: '10rem',
});

const button = css({
    outline: 'none',
    marginTop: '1rem',
    backgroundColor: '#616161',
    color: 'white',
    border: '0',
    padding: '1rem 3rem 1rem 3rem',
    borderRadius: '2rem',
    cursor: 'pointer',
});

export default { main, input, border, logo, button };

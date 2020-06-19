import { css } from 'emotion';

const main = css({
    backgroundColor: '#242424',
    height: '100vh',
    width: '100vw',
    color: 'white',
    display: 'grid',
    fontFamily: "'Roboto', sans-serif",
    alignContent: 'center',
    justifyContent: 'center',
    textAlign: 'center',
});
const content = css({
    label: 'mainErrorDiv',
    height: 'fit-content',
    width: 'fit-content',
    padding: '1rem 2rem 5rem 2rem',
    borderTop: '5px solid #828282',
    borderBottom: '5px solid #828282',
    borderRadius: '4rem',
});

const button = css({
    label: 'button',
    outline: 'none',
    marginTop: '1rem',
    backgroundColor: '#616161',
    color: 'white',
    border: '0',
    padding: '1rem 3rem 1rem 3rem',
    borderRadius: '2rem',
    cursor: 'pointer',
});

export default { main, button, content };

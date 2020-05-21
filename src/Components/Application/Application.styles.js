import { css } from 'emotion';

const main = css({
    backgroundColor: '#242424',
    height: '100%',
    width: '100vw',
    color: 'white',
    display: 'flex',
    fontFamily: "'Roboto', sans-serif",
});
const body = css({
    paddingLeft: '1rem',
    marginTop: '1rem',
    overflowY: 'auto',
});

export default { main, body };

import { css } from 'emotion';

const main = css({
    backgroundColor: '#242424',
    height: '100%',
    width: '100%',
    color: 'white',
    display: 'flex',
    fontFamily: "'Roboto', sans-serif",
});
const body = css({
    width: '100%',
    paddingLeft: '1rem',
    marginTop: '1rem',
    overflowY: 'auto',
    borderBottom: '1px solid rgba(255,255,255,.25)',
    height: 'auto',
});

export default { main, body };

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
    overflowY: 'auto',
    borderBottom: '1px solid rgba(255,255,255)',
    height: 'auto',
});

const wrapper = css({
    width: '100%',
    padding: '2rem',
});

const filmsWrapper = css({
    display: 'flex',
});

const posterWrapper = css({
    marginRight: '3rem',
});

export default { main, body, wrapper, filmsWrapper, posterWrapper };

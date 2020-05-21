import { css } from 'emotion';

const main = css({
    backgroundColor: '#242424',
    height: '100vh',
    width: '100vw',
    zIndex: -1,
    color: 'white',
    backgroundPosition: 'center',
    display: 'grid',
    gridTemplateRows: 'auto 1fr',
    gridTemplateAreas: `
    'navigation'
    'body'
    `,
    fontFamily: "'Roboto', sans-serif",
});

const body = css({
    marginLeft: '1rem',
});

export default { main, body };

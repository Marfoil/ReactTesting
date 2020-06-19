import { css } from 'emotion';

const wrapper = css({
    label: 'imageWrapper',
    width: '10rem',
    marginTop: '1rem',
    height: 'fit-content',
    userSelect: 'none',
    cursor: 'pointer',
    ':hover': {
        transform: 'scale(1.2)',
    },
    transition: 'all .2s',
});

const image = css({
    label: 'image',
    height: 'auto',
    width: '100%',
});

const title = css({
    marginTop: '0.5rem',
    label: 'title',
    width: '100%',
    textAlign: 'center',
    // fontFamily: "'Roboto', sans-serif",
});

export default {
    wrapper,
    image,
    title,
};

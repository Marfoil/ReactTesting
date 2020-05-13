import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles({
    main: {
        backgroundImage: props => `url(${props.image})`,
        height: '100vh',
        width: '100vw',
        zIndex: -1,
        color: 'white',
        backgroundPosition: 'center',
        display: 'grid',
        gridTemplateRows: '5% 1fr',
        gridTemplateAreas: `
        'navigation'
        'body'
        'footer'
        `,
    },
    navigation: {
        paddingLeft: '1rem',
        display: 'flex',
        alignItems: 'center',
        gridArea: 'navigation',
        backgroundColor: 'rgba(0,0,0,0.7)',
    },
});

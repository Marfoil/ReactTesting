import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles({
	main: {
		backgroundImage: (props) => `url(${props.image})`,
		height: '100vh',
		width: '100vw',
	},
});

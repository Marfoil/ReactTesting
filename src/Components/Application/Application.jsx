import React, { useState } from 'react';
import { useStyles } from './Application.styles';
import background from '../../images/background.png';

export const Application = () => {
	// const [theme, setTheme] = useState('light');
	const classes = useStyles({ image: background });
	return (
		<div className={classes.main}>
			<div>Title</div>
			<div>Body</div>
		</div>
	);
};

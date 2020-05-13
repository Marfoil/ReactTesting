import React, { useState } from 'react';
import { useStyles } from './Application.styles';
import background from '../../images/background.png';

export const Application = () => {
	const classes = useStyles({ image: background });
	return (
		<div className={classes.main}>
			<div>Title</div>
			<div>Body</div>
		</div>
	);
};

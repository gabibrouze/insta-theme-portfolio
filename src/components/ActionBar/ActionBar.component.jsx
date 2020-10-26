import React from 'react';
import { Actions, ActiveButton, IconButton } from './ActionBar.styles';

const ActionBar = () => {
	return (
		<Actions>
			<ActiveButton href='mailto:gabbrouze@gmail.com'>Message</ActiveButton>
			<ActiveButton href='tel:0605746360'>Call</ActiveButton>
			<IconButton disabled>
				<i className='material-icons'>keyboard_arrow_down</i>
			</IconButton>
		</Actions>
	);
};

export default ActionBar;

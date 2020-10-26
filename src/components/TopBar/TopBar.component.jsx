import React from 'react';
import { Bar, BackButton, Title, Text, MenuButton } from './TopBar.styles';

const TopBar = () => {
	return (
		<Bar>
			<BackButton>
				<i className='material-icons'>arrow_back_ios</i>
			</BackButton>
			<Title>
				<Text>PortfolioGram</Text>
			</Title>
			<MenuButton>
				<i className='material-icons'>more_horiz</i>
			</MenuButton>
		</Bar>
	);
};

export default TopBar;

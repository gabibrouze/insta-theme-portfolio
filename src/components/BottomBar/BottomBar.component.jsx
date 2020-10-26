import React, { useState } from 'react';
import { Bar, TabIcon } from './BottomBar.styles';

import HeartFilled from '../../assets/tabs/HeartFilled.png';
import HeartOutlined from '../../assets/tabs/HeartOutlined.png';

const BottomBar = () => {
	const [filled, setFilled] = useState(false);

	const toggleHeart = () => {
		setFilled(!filled);
	};

	return (
		<Bar>
			{filled ? (
				<TabIcon onClick={toggleHeart} src={HeartFilled} alt='Filled Heart' />
			) : (
				<TabIcon
					onClick={toggleHeart}
					src={HeartOutlined}
					alt='Outlined Heart'
				/>
			)}
		</Bar>
	);
};

export default BottomBar;

import styled from 'styled-components';
import { bottomBarHeight, darkGrey, deviceWidth } from '../../styles/vars';

export const Bar = styled.section`
	width: calc(${deviceWidth} + 2px);
	height: ${bottomBarHeight};
	position: relative;
	bottom: 0;
	left: 50%;
	transform: translatex(-50%);
	z-index: 1;
	background: white;
	display: flex;
	justify-content: center;
	align-items: center;
	border-top: 1px solid ${darkGrey};
	border-bottom-left-radius: 10px;
	border-bottom-right-radius: 10px;
`;

export const TabIcon = styled.img`
	width: 24px;
	text-align: center;
`;

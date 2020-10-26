import styled from 'styled-components';

import { numCols, deviceWidth, lightGrey } from '../../styles';

export const Grid = styled.section`
	display: grid;
	grid-template-columns: repeat(${numCols}, 1fr);
	grid-gap: 1px;
	background: ${lightGrey};
`;

export const Screen = styled.div`
	display: none;
`;

export const Preview = styled.div`
	display: block;
	cursor: pointer;
	width: 100%;
	height: calc(${deviceWidth} / ${numCols});
	background: center / cover no-repeat;
	position: relative;

	&:hover ${Screen}, &:focus ${Screen} {
		display: flex;
		justify-content: center;
		align-items: center;
		position: absolute;
		top: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.7);
	}
`;

export const Button = styled.button`
	color: white;
	font-weight: 600;
	font-size: 24px;
	cursor: pointer;
`;

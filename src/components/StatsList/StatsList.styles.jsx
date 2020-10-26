import styled from 'styled-components';
import { radialColourGradient } from '../../styles/utils';

export const Stats = styled.section`
	padding: 0 16px;
	display: grid;
	grid-template-columns: auto 1fr;
	grid-column-gap: 10px;
`;

export const ImageWrapper = styled.div`
	width: 90px;
	height: 90px;
	border-radius: 50%;
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;

	&:before {
		content: '';
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		z-index: -1;
		margin: -4px;
		border-radius: inherit;
		background: ${radialColourGradient};
	}

	& img {
		width: 85px;
		height: 85px;
		border: 3px solid white;
		border-radius: inherit;
	}
`;

export const Data = styled.div`
	display: flex;
	flex-flow: row nowrap;
	justify-content: space-around;
	align-items: center;
	text-align: center;
`;

export const DataPoint = styled.a`
	display: block;
	font-family: sans-serif;
	color: #0d3a6b;
	font-style: italic;
`;

export const DataValue = styled.div`
	font-size: 18px;
	font-weight: 600;
`;

export const DataDescription = styled.div`
	font-size: 16px;
	font-weight: 300;
	margin-top: 2px;
	font-weight: 600;
`;

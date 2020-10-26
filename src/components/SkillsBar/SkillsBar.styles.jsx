import styled from 'styled-components';
import { darkGrey, hideScrollBar, lightGrey } from '../../styles';

export const Skills = styled.section`
	margin: 14px 0;
	padding: 0 10px;
	white-space: nowrap;
	overflow-x: auto;
	${hideScrollBar};
`;

export const Single = styled.div`
	display: inline-block;
`;

export const ImageWrapper = styled.div`
	display: inline-block;
	border-radius: 50%;
	border: 1px solid ${lightGrey};
	padding: 3px;
	position: relative;
	left: 50%;
	transform: translatex(-50%);
	margin-right: 12px;
`;

export const Inner = styled.div`
	width: 60px;
	height: 60px;
	border-radius: inherit;
	background: center / cover no-repeat;
`;

export const Description = styled.p`
	text-align: center;
	font-size: 14px;
	margin-top: 2px;
	color: ${darkGrey};
`;

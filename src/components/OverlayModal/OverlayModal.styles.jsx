import styled from 'styled-components';

export const Overlay = styled.section`
	height: 100%;
	width: 100%;
	background: rgba(0, 0, 0, 0.4);
	z-index: 1;
	position: fixed;
	top: 0;
	left: 0;
	overflow: auto;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const Content = styled.div`
	position: relative;
	width: 320px;
	padding: 24px;
	background: white;
	border-radius: 10px;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const Image = styled.img`
	padding-top: 36px;
	max-width: 320px;
`;

export const CloseIcon = styled.span`
	font-size: 36px;
	font-weight: 600;
	position: absolute;
	cursor: pointer;
	top: 8px;
	right: 16px;
`;

export const Title = styled.h1`
	text-align: center;
`;

export const Links = styled.div`
	display: flex;
	width: 100%;
	justify-content: space-around;
`;
export const LinkTo = styled.a`
	font-size: 20px;
	color: #0d3a6b;
	text-decoration: underline;
`;

export const Text = styled.p`
	margin-top: 8px;
	font-size: 18px;
	text-align: justify;
	width: 300px;
`;

export const Hashtags = styled.ul`
	list-style-type: none;
	width: 320px;
	display: flex;
	flex-wrap: wrap;
`;

export const Hashtag = styled.li`
	font-size: 18px;

	&::before {
		content: '#';
		color: black;
		font-weight: 600;
		padding-inline: 1ch;
		margin-inline-end: 0;
		margin-inline-start: 1ch;
	}
`;

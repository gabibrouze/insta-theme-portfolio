import styled from 'styled-components';

export const Description = styled.div`
	padding: 0 16px;
`;

export const Title = styled.h2`
	font-size: 18px;
	margin: 16px 0 0 0;
	padding: 0;
	position: relative;

	div {
		position: absolute;
		top: 0;
		right: 0;
	}

	& a {
		margin-top: 2px;
		font-weight: 600;
		font-size: 16px;
		font-style: italic;
		color: #0d3a6b;
	}
`;
export const Byline = styled.div`
	margin: 2px 0 0 0;
`;

export const Text = styled.p`
	color: #444;
	font-size: 16px;
	text-align: center;
	span {
		display: inline-block;
		text-align: center;
		width: 100%;
		font-size: 14px;
		font-weight: 600;
	}
`;

export const Hashtags = styled.ul`
	list-style-type: none;
	padding-left: 0;
	margin-top: -8px;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	font-size: 16px;

	li {
		&:not(:first-child) {
			margin-left: 8px;
		}
		color: #444;
	}
`;

export const Small = styled.p`
	font-size: 12px;
	font-weight: 300;
`;

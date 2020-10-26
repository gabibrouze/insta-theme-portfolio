import styled from 'styled-components';
import { darkGrey, lightGrey } from '../../styles';

export const TabIcon = styled.img`
	margin: auto;
	max-width: 22px;
	cursor: auto;
`;

export const Button = styled.button`
	border-bottom: 1px solid ${lightGrey};
	border-top: 1px solid ${lightGrey};
	cursor: pointer;

	&.active {
		border-bottom: 1px solid ${darkGrey};
	}
`;

export const Tabs = styled.section`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	border-top: 1px solid ${lightGrey}
	margin-top: 20px;

	${Button} {
		display: flex;
		padding-top: 6px;
		padding-bottom: 5px;
	}
`;

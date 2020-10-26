import styled from 'styled-components';
import { defaultBlue, lightGrey } from '../../styles';

export const Actions = styled.section`
	padding: 0 16px;
	margin-top: 14px;
	display: grid;
	grid-template-columns: 1fr 1fr 34px;
	grid-column-gap: 6px;
`;

export const ActiveButton = styled.a`
	background: ${defaultBlue};
	border: 1px solid ${defaultBlue};
	color: #fff;
	font-size: 18px;
	border-radius: 4px;
	border: 1px solid ${lightGrey};
	height: 32px;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
`;

export const IconButton = styled.button`
	display: flex;
	background: ${lightGrey};
	border: 1px solid ${lightGrey};
	border-radius: 4px;

	i {
		margin: auto;
		font-size: 16px;
	}
`;

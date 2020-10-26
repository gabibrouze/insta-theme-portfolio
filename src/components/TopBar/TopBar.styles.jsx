import styled from 'styled-components';
import { HuckebuckFont } from '../../styles/vars';

export const Bar = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-wrap: nowrap;
	padding: 10px 16px;
`;

export const BackButton = styled.button``;

export const Title = styled.div`
	display: flex;
	align-items: center;
	flex-wrap: nowrap;
`;

export const Text = styled.h1`
	font-family: ${HuckebuckFont};
	font-size: 28px;
	font-weight: 100;
`;

export const MenuButton = styled.button``;

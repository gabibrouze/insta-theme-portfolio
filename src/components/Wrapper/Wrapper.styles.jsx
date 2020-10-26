import styled from 'styled-components';
import { deviceWidth, darkGrey } from '../../styles';

const Wrapper = styled.div`
	margin: ${deviceWidth === '600px' ? '24px' : '0px'} auto;
	max-width: ${deviceWidth};
	border-top-left-radius: 10px;
	border-top-right-radius: 10px;
	box-shadow: 3px 3px 10px ${darkGrey};
`;

export default Wrapper;

import { css } from 'styled-components';
import { darkOrange, lightOrange, pink, purple, yellow } from './vars';

export const radialColourGradient = `
conic-gradient(
    from 135deg at 50% 50%, 
    ${pink} 0deg, 
    ${purple} 50deg, 
    ${lightOrange} 98deg, 
    ${darkOrange} 145deg, 
    ${yellow} 195deg, 
    ${pink} 240deg, 
    ${purple} 285deg, 
    ${lightOrange} 360deg)`;

export const hideScrollBar = css`
	overflow-y: scroll;
	scrollbar-width: none; // Firefox
	-ms-overflow-style: none; // IE 10+
	&::-webkit-scrollbar {
		width: 0;
		height: 0;
	} // WebKit
`;

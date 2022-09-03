import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

:root {
--blue: #4087D7;
--grey-light: #E4E4C8;
--grey-dark: #4F4F4F;
--grey-card: #D6D6C6;
--grey-darkmode: #1C1C1C;
--yellow: #EEB73F;
--blue-dark: #00207C;
--green: #32CD32;
--white: #FFFFFF;
--black: #000000;
}

html, body, div, span, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote,
a, address, cite, code strong,center,
ol, ul, li,
fieldset, form, label, legend, caption,
article, aside, details, embed, 
figure, figcaption, footer, header, 
menu, nav, output, section,
time, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	box-sizing: border-box;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}

button {
	cursor: pointer;
}

a {
	text-decoration: none;
	cursor: pointer;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
	background-color: var( --grey-light);
	
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}`;

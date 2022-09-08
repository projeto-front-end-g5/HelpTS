import { createGlobalStyle } from 'styled-components';

interface IGLobal {
  theme: {
    body: string;
    header: string;
    fontColor: string;
    button: string;
    boderBottom: string;
    svgColor: string;
  };
}

export default createGlobalStyle<IGLobal>`

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
--toastify-color-light: #fff;
--toastify-text-color-light: #00207C;
--toastify-color-progress-light: linear-gradient(
    to right,
    #5ac8fa,
    #34aadc,
    #007aff,
	#4087D7,
    #5856d6,
    #00207C
  );
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
	background-color: ${({ theme }) => theme.body};
	color: ${({ theme }) => theme.fontColor};
}

button {
	color: ${({ theme }) => theme.button};
	cursor: pointer;
}

svg {
	.nav--params {
		color: ${({ theme }) => theme.svgColor};
	}
}

header {
	background-color: ${({ theme }) => theme.header};
	border-bottom: ${({ theme }) => theme.boderBottom};
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
}

* {

	scrollbar-width: thin;
	scrollbar-color: var(--blue);
	scrollbar-base-color: transparent;

	&::-webkit-scrollbar {
		width: 6px;
	}

	&::-webkit-scrollbar-track {
		background: transparent;
		scrollbar-base-color: transparent;
	}

	&::-webkit-scrollbar-thumb {
		background-color: var(--blue);
		border-radius: 5px;
	}
}

`;

import { createGlobalStyle } from "styled-components";

import GraphikMediumFontOtf from "./GraphikMedium.otf";
import GraphikRegularFontOtf from "./GraphikRegular.otf";

export default createGlobalStyle`
    @font-face {
        font-family: 'Graphik Medium';
        src: local('Graphik Medium'), local('GraphikMedium'),
        url(${GraphikMediumFontOtf}) format('opentype'),
        font-weight: 500;
        font-style: normal;
    }
    @font-face {
        font-family: 'Graphik Regular';
        src: local('Graphik Regular'), local('GraphikRegular'),
        url(${GraphikRegularFontOtf}) format('opentype'),
        font-weight: 400;
        font-style: normal;
    }
    
`;

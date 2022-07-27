import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    ::-webkit-scrollbar {
        width: 8px;
    }

    ::-webkit-scrollbar-track {
        background-color: #f2f2f2;
    }

    ::-webkit-scrollbar-thumb {
        background-color: #bfbfbf;
        
        :hover {
            background-color: #a8a8a8;
        }
    }

    body, html {
        width: 100%;
        overflow-x: hidden; 
        scroll-behavior: smooth;
        font-family: 'Roboto', sans-serif;
     }

    input,
    textarea,
    select {
        font-family: Arial, Helvetica, sans-serif;
    }   

    p {
        line-height: 1.4;
    }
`;

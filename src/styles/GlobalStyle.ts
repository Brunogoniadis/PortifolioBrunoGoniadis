import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

    :root
    {
        --color-primary: #E1E1E6;
        --color-error:#EA524F;
        --color-text:#E1E1E6;
        --color-backgroundMain: #29292E;
        --color-border: #7A7A7A;

    font-size: 60%;
    }
    @media (min-width: 700px) {
        :root 
            {font-size: 62.5%;}
    }

    * {
        margin:0;
        padding: 0;
        outline:0;
        box-sizing: border-box;
    }

    body,html{
        width: 100vw;
        height: 100vh;
    }

    body {
        background: var(--color-backgroundMain);
        color: var(--color-text);
        -webkit-font-smoothing: antialiased;
        overflow-x: hidden;
        overflow-y: overlay;
    }

    body, input, button, textarea{
        font-family: 'Poppins';
        font-size: 1.6rem;
    }
    
    h1, h2, h3, h4, h5, h6, p, strong{
        font-weight: 500;
        font-family: 'Poppins';
    }
    h1{
        font-size: 56px;
    }
    h2{
        font-size: 40px;
    }
    h3{
        font-size: 28px;
    }
    p{
        font-size: 20px;
    }

`

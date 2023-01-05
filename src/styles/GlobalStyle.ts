import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

    :root
    {
        --color-primary: #E1E1E6;
        --color-error:#EA524F;
        --color-text:#E1E1E6;
        --color-backgroundMain: #29292E;
        --color-border: #7A7A7A;
  }

    * {
        margin:0;
        padding: 0;
        outline:0;
        box-sizing: border-box;
    }

    body,html{
        width: 100vw;
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
        //font-size: 1.6rem;
    }
    h1{
            font-size: min(3.5em , 3vw);
            font-weight: 600;
        }
        h2{
            font-size: min(40px , 2.2vw);
        }
        h3{
            font-size: min(28px , 1.8vw);
        }
        p{
            font-size: min(20px , 1.5vw);

        }
        
    h1, h2, h3, h4, h5, h6, p, strong{
        font-weight: 500;
        font-family: 'Poppins';
    }


`

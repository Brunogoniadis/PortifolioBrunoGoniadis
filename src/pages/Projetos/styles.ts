import styled from "styled-components";

export const Container=styled.div`
    
    height: 100vh;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    .projectContainer{


        justify-content: center;
        margin: 20px;

        height: 100vw;
        width: 100vw;


        display: grid;
        grid-template-columns: auto auto auto;
        
        column-gap: 0.5vh;




    }
    button{
        background-color: transparent;
        border: none;
    }

    @media (max-width: 512px){
        
        .projectContainer{
            grid-template-columns: auto auto;
            justify-content: space-around;
            row-gap: 10vh;
            margin-top: -15vh;
        }
    }

`


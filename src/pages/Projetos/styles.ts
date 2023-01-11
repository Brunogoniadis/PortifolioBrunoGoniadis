import styled from "styled-components";

export const Container=styled.div`
    margin: 10vw;

    height: 100vh;

    display: flex;
    flex-direction: column;
    justify-content: space-around;

    align-items: center;
    
    .projectContainer{


        display: grid;
        column-gap: 0.1vw;
        row-gap: 1vw;

        width: 100%;

        grid-template-columns: auto auto auto;
    }
    button{
        background-color: transparent;
        border: none;
    }

`


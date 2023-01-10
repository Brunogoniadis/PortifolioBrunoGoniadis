import styled from "styled-components";

export const Container=styled.div`
    margin: 10vw;
    margin-top: 3vh ;

    height: 100vh;

    display: flex;
    flex-direction: column;
    justify-content: space-around;

    align-items: center;

    .projectContainer{


        display: grid;
        justify-content: space-between;
        column-gap: 50px;
        row-gap: 3vw;

        width: 100%;

        grid-template-columns: auto auto auto;
    }
    button{
        background-color: transparent;
        border: none;
    }

`


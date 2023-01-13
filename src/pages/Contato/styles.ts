import styled from "styled-components";
import { PostIt } from "../../components/PostIt";

export const Container=styled.div`
    margin: 10vw;
    margin-top: 3vh ;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 100vh;

    .pinContainer{

        width: 80vw;
        height: 90vh;
        margin-top: 5vh;

        align-items: center;
        justify-content: space-around;

        display: grid;
        border: 1px solid black;

        grid-template-columns: auto auto auto auto auto;
    
        PostIt{
            color: red;
        }
    }

`




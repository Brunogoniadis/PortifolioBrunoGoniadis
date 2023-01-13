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
    width: 85vw;

    position: relative;

    h3{
        width: 50vw;
        margin: 25px;
        font-weight: normal;
    }
    .pinContainer{

        width: 80vw;
        height: 90vh;
        margin-top: 5vh;

        align-items: center;
        justify-content: space-around;

        display: grid;

        grid-template-columns: auto auto auto auto auto;
    
        PostIt{
            color: red;
        }
    }
    .buttonContainer{
        width: 85vw;
        height: 35vh;


        align-items: center;

        display: grid;

        grid-template-columns: auto auto auto auto;

        justify-content: start;

        gap: 35px;
    }

`




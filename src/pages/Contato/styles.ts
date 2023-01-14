import styled from "styled-components";
import { PostIt } from "../../components/PostIt";

export const Container=styled.div`
    margin: 10vw;
    margin-top: 3vh ;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 85vw;



    position: relative;

    p{
        width: 50vw;
        margin: 25px;
        font-weight: normal;
    }
    .pinContainer{

        height: 53vh;
        width: 60vw;
        margin-top: 5vh;

        align-items: center;
        justify-content: center;

        display: grid;

        padding-top: 35px;

        grid-template-columns: auto auto auto;
        grid-column-gap: 6vw;
        grid-row-gap: 5vh ;

        overflow: scroll;
        overflow-x: hidden;
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




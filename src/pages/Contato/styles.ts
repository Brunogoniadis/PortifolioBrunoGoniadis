import styled from "styled-components";
import { PostIt } from "../../components/PostIt";

export const Container = styled.div`

    margin-top: 3vh ;
    display: flex;
    flex-direction: column;
    width: 100%;

    padding-left: 10%;
    padding-right: 10%;

    align-items: center;


    p{
        width: 50vw;
        margin: 25px;
        font-weight: normal;
    }
    .pinContainer{

        height: 53vh;
        width: 60vw;
        margin-top: 5vh;
        margin-bottom: -2vh;

        align-items: center;
        justify-content: center;

        display: grid;

        ::-webkit-scrollbar{
            width: 10px;
            background-color: var(--color-primary);
        }  ::-webkit-scrollbar-thumb {
            background-color: var(--color-secondary);
        }


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

    .formContainer{

        width: 60vw;
        height: 15vw;
        


        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;


        margin-bottom: 8vh;


     
        .inputUserNameData{
            width: 60vw;
            height: 6vw;
            display: grid;

            grid-template-columns: auto auto auto;

            display: flex;
            align-items: center;
            justify-content: center;


            justify-content: space-around;

            .inputName{
                width: 12vw;
            }
            .inputCargo{
                width: 12vw;

            }
            .inputMensager{
                width:35vw;
            }
        }
        Button{
                background-color: var(--color-secondary);
                width: 45px;
                height: 45px;

                position: relative;

                display: flex;
                align-items: center;
                justify-content: center;

                top:-4.2vw;
                left: 28.5vw;

                z-index: 1001;

                border: none;
                border-radius: 50% 8% 8% 50%;

                :hover{
                    box-shadow: 0 0 20px var(--color-secondary);
                }

            }
    }

`




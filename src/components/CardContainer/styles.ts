import styled from "styled-components"


export const ContainerBaseCards = styled.div`
        display: flex;
        flex-direction: row;
        height: 100vh;
        width: 80vw;
        align-items: center;

        

 

    .descriptionTechnologyContainer{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        width: 50%;
        height: 50%;
    }
    .pdescriptionContainer{
        padding-right: 10px;
        padding-left: 10px;

        width: 100%;
        height: auto;

    }
    .cardsBase{
        display: flex;
        gap: 20px;
    }

    .cardSlot{
        background-color: transparent;
        border: none;
    }
    .cardSlot2{
        background-color: transparent;
        border: none;
    }
    .cardSlot3{
        background-color: transparent;
        border: none;

    }
    @media (max-width: 512px){

        width: 85%;

        flex-direction: column;
            .descriptionTechnologyContainer{
                margin-top: 10vh;
                width: 100%;

                text-align: center;

                h3{
                    border-radius: 10px;
                    box-shadow: 0 5px 15px 1px var(--color-secondary);
                    padding: 5px;

  
                }
            }
            .cardsBase{
                width: 100%;
                height: auto;
                align-items: center;
                justify-content: space-around;
            }


    }

`
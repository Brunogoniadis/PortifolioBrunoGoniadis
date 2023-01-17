import styled from "styled-components"


export const ContainerBaseCards = styled.div`
        display: flex;
        flex-direction: row;
        height: 100vh;
        width: 80vw;
        align-items: center;
        justify-content: space-between;
        



    .descriptionTechnologyContainer{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        width: 50%;
        height: 50%;
    }
    .pdescriptionContainer{
        padding-right: 25px;
        margin-top: 55px;
        width: 100%;
        height: 100%;
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
    @media (max-width: 512px) {
        display: none;
    }

`
import styled from "styled-components";

export const ProjectContainer= styled.div`
    width: 22vw;
    height: 15vw;
    
    background-color: var(--color-backgroundCard);


    border: 1px solid var(--color-border);
    border-radius: 6px;
    box-shadow: 2px 5px 10px 5px var(--color-primary);


    display: flex;
    flex-direction: column;


    align-items: center;
    justify-content: space-between;
    overflow: hidden;

    color: var(--color-primary);

    .circleContainer{
        background-color: aliceblue;
        
        width: 22vw;
        height: 10vw;

        border-radius: 0px 0px 135px 135px;
        box-shadow: 0.2rem 0.1rem 16rem 0.9rem var(--color-primary);


        img{
            margin-top: 2vw;
            height: 100%;
            width: 85%;
            border-radius: 6px;
        }
    }

`
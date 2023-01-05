import styled from "styled-components";

export const Container = styled.div`
    height: 550px;
    width: 300px;
    box-shadow: 2px 5px 10px 5px var(--color-primary);

    overflow: hidden;
    border-radius: 20px;
    
    display: flex;
    flex-direction: column;
    background-color: var(--color-backgroundCard);

    color: var(--color-primary);



    h2{ font-size: min(25px); font-weight: 600; }

    h3{ font-size: min(15px); }
        
    p{ font-size: min(10px); }


    .textContainer{
        padding: 15px;
    }


    .logoContainer{
        
        width :100% ;
        height: 225px ;
        background-color: aliceblue;
        box-shadow: 0.2rem 0.1rem 16rem 0.2rem var(--color-primary);

        border-radius: 0px 0px 150px 150px;
    }
    .typeContainer{
        display: flex;
        gap: 10px;
    }
    .type{
        background-color: var(--color-secondary);
        padding: 5px;
        border-radius: 25px;
    }
    .descriptionContainer{

        height: 220px;
        padding-top: 5px;
    }



`
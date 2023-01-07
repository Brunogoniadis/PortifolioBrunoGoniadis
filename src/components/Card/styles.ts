import styled from "styled-components";



export const Container = styled.div`
    
    h2{ font-size: min(1.3em , 3vw); font-weight: 600; }

    h3{ font-size: min(0.9em, 1.8vw); }
    
    p{ font-size: min(14px); font-weight: 400; }

    .cardContainer{
        height: 30vw;
        width: 15vw;
        box-shadow: 2px 5px 10px 5px var(--color-primary);

        overflow: hidden;
        border-radius: 20px;
        
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: var(--color-backgroundCard);

        color: var(--color-primary);

        :active{

            :active{
            @keyframes active {
                0% { margin-top: 0px }
                50% {margin-top: -75px;}
                100%{ margin-top: 0px;}
            }
            animation: active 0.2s normal;

        }
        }

    }
    
    .logoContainer{
        
        width :100% ;
        height: 25vw ;
        background-color: aliceblue;

        box-shadow: 0.2rem 0.1rem 16rem 0.2rem var(--color-secondary);
        border-radius: 0px 0px 150px 150px;

        display: flex;
        align-items: center;
        justify-content: center;

        img{
            @keyframes example {
                from {width:0%}
                to {width: 75%;}
            }
            animation: example 2.5s;
            margin-top: 3.5vh;
            width: 75%;

        }
    }

    .textContainer{
        margin-top: 5px;
        padding: 15px;
    }

    .typeContainer{
        display: flex;
        gap: 10px;
    }
    .type{
        background-color: #00d8ff;
        padding: 6px;
        border-radius: 25px;
    }
    .descriptionContainer{
        height: 220px;
        padding-top: 15px;
    }



`
import styled from "styled-components";

export const ModalContainer=styled.div`
    position: fixed;
    top: 0vw;

    width: 100%;
    height: 100vh;
    
    background-color: rgba(3, 3, 4, 0.7); 


    @keyframes 
    example {
                from {opacity:0}
                to {opacity:100}
            }
    animation: example 0.2s;



    .overlay{
        


        width: 100%;
        height: 100%;
        
        display: flex;
        align-items: center;
        justify-content: center;

        z-index:10;
        position:absolute;
    }
    .content{

        width: 50%;
        height: 90%;
        border-radius: 10px;

        top: 9vh;
        left: 25vw;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        background-color: var(--color-backgroundMain);



        z-index:15;
        position:absolute;
        
        img{
            width: 100%;
        } 

        h2{
            color: red;
            margin-top: -75px;
        }

        .pContainer{

            margin-top: 2px;
            padding: 6px;

            width: 100%;
            height: auto;

            display: flex;
            gap: 20px;
        }
    }

`
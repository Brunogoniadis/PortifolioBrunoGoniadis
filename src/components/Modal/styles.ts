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

        z-index:2;
        position:absolute;
    }
    .content{

        width: 80%;
        height: 80%;
        top: 10vh;
        left: 10vw;
        display: flex;
        align-items: center;
        justify-content: center;

        background-color: aliceblue;
        z-index:4;
        position:absolute;
        img{
            width: 60%;
        } 
    }

`
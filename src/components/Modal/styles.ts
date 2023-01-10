import styled from "styled-components";

export const ModalContainer=styled.div`
    position: fixed;
    top: 0vw;
    z-index: 1000;

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
        
        cursor: auto;

        width: 100%;
        height: 100%;
        
        display: flex;
        align-items: center;
        justify-content: center;

        
    }
    .content{

        width: 80%;
        height: 80%;

        display: flex;
        align-items: center;
        justify-content: center;

        background-color: aliceblue;

    }
    button{
        width: 50px;
        height: 50px;
    }
`
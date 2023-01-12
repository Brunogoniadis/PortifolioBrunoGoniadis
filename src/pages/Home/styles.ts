import styled from "styled-components";

export const Container = styled.div`
    margin: 10vw;
    margin-top: 3vh ;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    height: 100vh;
    
    h1{
        margin-bottom: 6vh;
    }
    
        .textsDescriptionContainer{
            
        }

        .descriptionTopList{
            margin-bottom: 42px;
        }

        .descriptionList{
            margin-bottom: 28px;
        }
        
        .avatarContainer{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: flex-end;
            
            .avatar{
                width: 90%;
                height: auto;
            }
            .grid{

                height: 5vw;
                top: 85vh;
                position: absolute;
                z-index: 920;
                filter: invert(11%) sepia(1%) saturate(6104%) hue-rotate(202deg) brightness(101%) contrast(87%);

                
            }
            .laser{
                position: absolute;
                width: 30vw;                
                top: 93.5vh;

                background-color: aliceblue;
                box-shadow: 2px 5px 10px 5px var(--color-secondary);

                @keyframes active {
                    0% { 
                        margin-top: 0px;
                        opacity: 5%;
                    }
                    75%{
                        opacity: 20%;  
                    }
                    50%{
                        opacity: 75%;
                    }

                    85%{
                        opacity: 20%;  
                    }
                    100% {
                        margin-top: -65px; 
                        opacity: 0%;
                    }
                    
                }
                animation: active 1.0s alternate infinite;



            }
        }
`
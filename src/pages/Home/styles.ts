import styled from "styled-components";

export const Container = styled.div`
    margin: 10vw;
    margin-top: 10vh ;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    
    height: auto;

        h1{
            font-size: min(3.5em , 3vw);
            font-weight: 600;
            margin-bottom: 6vh;
        }
        h2{
            font-size: min(40px , 2.2vw);
        }
        h3{
            font-size: min(28px , 1.8vw);
        }
        p{
            font-size: min(20px , 1.5vw);
        }

        .asideButton{
            visibility: hidden;        
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
        @media (max-width: 512px) {
            flex-direction: column-reverse;



            .asideButton{
                visibility: visible;
                position: fixed ;
                top:2vh;
                right: 2vh;
                width: 5vh;
                height: 5vh;
            }


            h1{
                font-size: 1.5em;
                text-align: center;
                left: 20vw;
                right: 20vw;
            }
            h2{
                font-size: 1.2em;
                font-weight: normal;
            }
            h3{
                font-size: 1.0em;
                font-weight: normal;

            }
            p{
                font-size: 0.8em;
                font-weight: normal;

            }   

            flex-direction: column;
            

            .textsDescriptionContainer{
                width: 100%;
                text-align: center;

            }

            .avatarContainer{

                .avatar{
                    width: 20%;
                    position: relative;
                }
            }


        }
`
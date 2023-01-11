import styled from "styled-components";

export const ProjectContainer= styled.div`
    height: 20vw;    
    width: 30vw;


    align-items: center;



    color:var(--color-text);


    display: flex;
    flex-direction: column;
    
    

    h3{
        font-size: min(18px , 1.4vw);
        font-weight: normal;
    }
    p{
        font-size: min(15px , 1.2vw);
        font-weight: normal;
    }

    .imgContainer{
    display: flex;
    flex-direction: column;

        img{
            width: 26vw;
            height: 14vw;
            margin-top: 1vw;

            border-radius: 15px;
        }

    }
    .descriptionContainer{
        width: 100%;
        display: flex;

        flex-direction: column;
        align-items: flex-start;

        margin-top: 1vh;
        
        .pContainer{
            display: flex;
            flex-direction: row;
            width: 100%;
            align-items: flex-end;
            gap:0.8vw ;
        }
    }



`
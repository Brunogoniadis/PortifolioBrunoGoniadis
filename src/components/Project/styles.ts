import styled from "styled-components";

export const ProjectContainer= styled.div`
    height: 380px;
    width: 520px;


    color:var(--color-text);

    display: flex;
    flex-direction: column;
    

    align-items: center;
    justify-content: space-between;
    

    h3{
        font-size: min(16px , 1.2vw);
        font-weight: normal;
    }
    p{
        font-size: min(13px , 1.0vw);
        font-weight: normal;
    }

    .imgContainer{
    display: flex;
    flex-direction: column;

        img{
            margin-top: 1vw;
            height: 24vh;
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
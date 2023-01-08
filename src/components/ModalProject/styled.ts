import styled from "styled-components";

export const ModalStyle = {
    
  overlay:{
    background: 'transparent',

  }

  ,
  content: {
      
      background: 'transparent',
      top: '55%',
      left: '50%',
      height:'85%',
      width:'50%',
      bottom: '0',
      transform: 'translate(-50%, -50%)',
      borderColor: 'transparent'
    }
  };
  
export const Container= styled.div`
  
  h2{ font-size: min(1.3em , 3vw); font-weight: 600; margin-bottom:5px; }

  h3{ font-size: min(0.9em, 1.8vw); }

  p{ font-size: min(14px); font-weight: 400; }


  display: flex;
  flex-direction: column;

  justify-content: space-between;

  height: 100%;

  border-radius: 4px;
  border: 1px solid var(--color-border);

  background-color: var(--color-backgroundCard);

  .imageContainer{
    background-color: black;
    width: 100%;
    height: 85%;

    border-radius: 4px 4px 0px 0px;

    display: flex;
    flex-direction: column;
    align-items: flex-end;
   
    padding: 15px;
  }
  .descriptionContainer{
    height: 25%;
    display: flex;
    flex-direction: column;

    padding: 15px;

    color: var(--color-primary);
  }
  .tecnosDescriptions{
    display: flex;
    width: 100%;
    gap:1%;
    margin-bottom: 15px;
  }  
  .tecno{
    color:var(--color-text);
    background-color: var(--color-primary);
    padding:0px 5px 0px 5px;
    border-radius: 25px;
  }


  button{
    position: relative;
    width: 30px;
    background-color: transparent;
    border: none;


    svg{
      width: 100%;
      height: 100%;
      filter: invert(97%) sepia(80%) saturate(1%) hue-rotate(27deg) brightness(116%) contrast(101%);
    }

  }
`




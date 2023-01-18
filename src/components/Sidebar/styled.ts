import styled from "styled-components";

export const SidebarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(3, 3, 4, 0.7); 
  border: none;

  @keyframes 
    background {
                  from {opacity:0}
                  to {opacity:100}
              }
    animation: background 0.2s;


  .sidebar{
    height: 100%;
    width: 220px;

    border-radius: 0 10px 10px 0;
    background-color: var(--color-backgroundMain);  

    padding: 50px;

    

    @keyframes 
    sidebarAnim {
                  from {transform: translateX(-100%)}
                  to {transform: translateX(0)}
              }
    animation: sidebarAnim 0.2s;

  }
`
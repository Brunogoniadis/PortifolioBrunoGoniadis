import styled from "styled-components";

export const SidebarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 300px;
  background-color: #fff;
  transform: translateX(-100%);
  transition: transform 0.3s ease-out;
`
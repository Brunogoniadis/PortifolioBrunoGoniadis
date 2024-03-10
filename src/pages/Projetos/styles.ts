import styled from "styled-components";
import Slider from "react-slick";

export const CustomSlider = styled(Slider)`
  * {
    text-decoration: none;
  }

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: relative;

  .slick-dots {
    bottom: 45px;
  }

  .slick-list {
    width: 80vw;
    border: 1px solid var(--color-border-project);
    border-radius: 15px;
    height: 80vh;
    overflow: hidden;
    display: grid;

    margin-bottom: 2rem;

    .slick-track {
      overflow: hidden;
      width: 1080px;
    }

    div {
      display: flex;
      align-items: center;
      justify-content: center;
      text-decoration: none;
    }
  }
`;

export const ItemSlide = styled.div`
  width: 450px !important;
  height: 550px;
  background-color: red;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 5px;

  img {
    height: 320px;
    width: 100%;
    background-repeat: no-repeat;
    object-fit: cover;

    background-color: #d2d2d2;
    display: flex;
    position: relative;
  }

  .title {
    display: flex;
    position: relative;

    width: 210px;
    height: 50px;
    background-color: white;
    margin-top: -40px;
    z-index: 501;
    font-size: 20px;
    font-weight: bold;
  }
`;

export const Container = styled.div`
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  .title {
    width: 100vw;
    text-align: center;
    height: 15%;
    margin-top: 5vw;
    margin-bottom: 2vw;
  }

  .projectContainer {
    justify-content: center;
    margin: 20px;

    width: 80vw;
    height: 80vh;

    display: grid;
    grid-template-columns: auto auto auto;

    column-gap: 0.5vh;
  }

  .arrowContainer {
    width: 140px;
    height: 80px;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    position: absolute;
    right: 10vw;
    z-index: 501;
    gap: 25px;
  }

  .arrowLeft {
    background-color: red;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .arrowRight {
    background-color: red;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  button {
    background-color: transparent;
    border: none;
  }

  @media (max-width: 512px) {
    .projectContainer {
      grid-template-columns: auto auto;
      justify-content: space-around;
      row-gap: 10vh;
      margin-top: -15vh;
      width: 95%;
    }
  }
`;

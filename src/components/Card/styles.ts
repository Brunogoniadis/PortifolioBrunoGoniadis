import styled from "styled-components";



export const Container = styled.div`
  h2 {
    font-size: min(1.3em, 3vw);
    font-weight: 600;
  }

  h3 {
    font-size: min(1em, 2vw);
    font-weight: 400;
  }

  p {
    font-size: min(18px);
    font-weight: 600;
  }

  .cardContainer {
    height: 250px;
    width: 250px;

    overflow: hidden;
    border-radius: 5px;

    display: flex;
    justify-content: space-around;
    flex-direction: column;
    align-items: center;
    background-color: #f3f3f3;

    color: var(--color-primary);
  }

  .logoContainer {
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    img {
      animation: logoCard 1.1s;
      width: 90px;
      height: 90px;
      background-size: cover;
      object-fit: contain;
    }
  }

  .textContainer {
    padding: 0px;
    .Title {
      text-align: center;
      margin-bottom: 1rem;
    }
  }

  .typeContainer {
    display: flex;
    gap: 10px;
  }
  .type {
    background-color: #2a292f;
    padding: 6px;
    border-radius: 25px;
    color: white;
  }

  @media (max-width: 512px) {
    p {
      font-size: 0.8em;
    }
    h3 {
      font-weight: bold;
    }
    .cardContainer {
      height: 45vw;
      width: 25vw;
    }
    .logoContainer {
      height: 10vw;

      img {
        width: 40%;
        @keyframes logoCard {
          from {
            width: 0%;
          }
          to {
            width: 40%;
          }
        }
        animation: logoCard 2.5s;
      }
    }
  }
`;
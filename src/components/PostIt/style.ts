import styled from "styled-components";

const randomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};


export const Container = styled.div`

    width: 13vw;
    height: 20vh;

    background-color: ${randomColor};

    transform: rotate(${() => Math.floor(Math.random() * 13) - 8}deg);

    z-index: 1;
    

    padding: 25px;

    .tape1{
        position: relative;
        width: 1vw;
        height: 4vh;
        background-color: aliceblue;
        bottom: 13vh;

        right: ${() => Math.floor(Math.random() * (25 - (-2) + 1) + (-5))}px;

        transform: rotate(${() => Math.floor(Math.random() * 18)}deg);


    }
    .tape2{
        position: relative;
        width: 1vw;
        height: 4vh;
        background-color: aliceblue;
        bottom: 16.5vh;

        left: ${() => Math.floor(Math.random() * (210 - 200 + 1) + 190)}px;

        transform: rotate(${() => Math.floor(Math.random() * 26)}deg);
    }

    @media (max-width: 512px) {
        width: 35vw;
        height: 25vh;

        .tape1{
            top: -15vh;
            width: 3.2vw;
            position: relative;
        }

        .tape2{
            position: absolute;
            left: 30vw;
            top: -2vh;
            width: 3.2vw;

        }

    }
`
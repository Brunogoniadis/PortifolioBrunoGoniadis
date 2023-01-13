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

    

    padding: 25px;

    .tape1{
        position: relative;
        width: 1vw;
        height: 4vh;
        background-color: aliceblue;
        bottom: 70px;

        left: ${() => Math.floor(Math.random() * (30 - 10 + 1) + 10)}px;

        transform: rotate(${() => Math.floor(Math.random() * 18)}deg);


    }
    .tape2{
        position: relative;
        width: 1vw;
        height: 4vh;
        background-color: aliceblue;
        bottom: 110px;

        left: ${() => Math.floor(Math.random() * (210 - 200 + 1) + 190)}px;

        transform: rotate(${() => Math.floor(Math.random() * 26)}deg);


    }
`
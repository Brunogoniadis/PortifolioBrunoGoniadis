import { Container } from "./styles"

import CoverFinal from "../../assets/CoverFinal.jpg"



import { useState } from 'react';


export const Home = () => {


    const [isOpen, setIsOpen] = useState(false);



    return (
        <Container
            style={{
                backgroundImage: `url(${CoverFinal})`
            }}
        >
            <div className="content">

                <div className="textInfo">
                    <h1>Bruno Goniadis Lima</h1>
                    <h2>Desenvolvedor Fullstack</h2>

                </div>

                <div className="textInfo">
                    <h3>Experiência Profissional:</h3>
                    <ul>
                        <li>
                            <h4> ● Desenvolvedor React</h4>
                            <p>MJV Innovation - 02/2023 - Emprego atual <br />
                                Criação e customização de aplicações Web com Type-Script no<br />
                                Sharepoint, integrado ao back-end Node com banco de dados(NoSQL) ou SQL.<br />



                            </p>
                        </li>

                    </ul>
                </div>

                <div className="textInfo">
                    <h3>Graduação e Certificações:</h3>
                    <ul>
                        <li>
                            <h4>● Engenheiro de Software</h4>
                            <p>Unicesumar 2019 - Março de 2023</p>
                        </li>
                        <li>
                            <h4>● UX-UI Designer - Google Certificate</h4>
                            <p>Design System, Jornada do usuário, Design e usabilidade</p>
                        </li>

                    </ul>
                </div>

            </div>

        </Container>
    )
}
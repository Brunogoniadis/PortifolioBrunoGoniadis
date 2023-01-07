import { Container } from "./styles";
import { Project } from "../../components/Project";

import barbaraCard from "../../assets/projetos/barbaraCard.png"
import coinValue from "../../assets/projetos/coinValue.png"
import DigitalClockJS from "../../assets/projetos/DigitalClockJS.png"
import saldaoMjv from "../../assets/projetos/saldaoMjv.png"
import weatherApp from "../../assets/projetos/weatherApp.png"

export const Projetos =()=>{
    return(
        <Container>
            <h2>Projetos</h2>
                <div className="projectContainer">
                    <Project image={saldaoMjv} title="Saldão Mjv"/>
                    <Project image={coinValue} title="Coin Value"/>
                    <Project image={barbaraCard} title="Card Digital"/>
                    <Project image={weatherApp} title="Aplicação do tempo React"/>
                    <Project image={DigitalClockJS} title="Aplicação de Hora JS"/>

                </div>
        </Container>
    )
}

import {useState} from 'react'


import { Container } from "./styles";
import { Project } from "../../components/Project";
import { ModalProject } from '../../components/ModalProject';

import barbaraCard from "../../assets/projetos/barbaraCard.png"
import coinValue from "../../assets/projetos/coinValue.png"
import DigitalClockJS from "../../assets/projetos/DigitalClockJS.png"
import saldaoMjv from "../../assets/projetos/saldaoMjv.png"
import weatherApp from "../../assets/projetos/weatherApp.png"





export const Projetos =()=>{

    const [modalIsOpen, setModalIsOpen] = useState(false);



    function openModal(){
        setModalIsOpen(true);
    }
    function closeModal() {
        setModalIsOpen(false);
    }
    




    return(
        <Container>
            <ModalProject modalIsOpen={modalIsOpen} closeModal={closeModal}></ModalProject>
            <h2>Projetos</h2>
                <div className="projectContainer">

                    <button onClick={openModal} ><Project image={saldaoMjv} title="Saldão Mjv"/></button>
                    <button><Project image={coinValue} title="Coin Value"/></button>
                    <button><Project image={barbaraCard} title="Card Digital"/></button>
                    <button><Project image={weatherApp} title="Aplicação do tempo React"/></button>
                    <button><Project image={DigitalClockJS} title="Aplicação de Hora JS"/></button>

                </div>
        </Container>
    )
}
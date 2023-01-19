
import { useState, useRef , useEffect} from 'react'

import { Container } from "./styles";
import { Project } from "../../components/Project";
import { Modal } from '../../components/Modal/Modal';

import barbaraCard from "../../assets/projetos/barbaraCard.png"
import coinValue from "../../assets/projetos/coinValue.png"
import DigitalClockJS from "../../assets/projetos/DigitalClockJS.png"
import saldaoMjv from "../../assets/projetos/saldaoMjv.png"
import weatherApp from "../../assets/projetos/weatherApp.png"

import MjvMarkketModal from "../../assets/projetos/modalImage/MjvMarkketModal.png"
import coinValueModal from "../../assets/projetos/modalImage/coinValueModal.png"
import { UseBodyScrollLock } from '../../hooks/useBodyScrollLocker';


export const Projetos = () => {


    const [open, setOpen] = useState(false);
    const [isLocked, toggle] = UseBodyScrollLock();



    const [descriptions, setDescriptions] = useState({
        title:'', 
        description:'',
        image:'',
        type: '',
        lang: ''
    });

    const onOpenModalSaldaoMjv = () => {

        setOpen(true);
        setDescriptions({
            title:"Saldão MJV",
            description:"Aplicação ecommerce.",
            image: MjvMarkketModal,
            type: "BootCamp",
            lang: "ReactJS"
    })
    }
    const onOpenModalCoinValue = () => {
        setOpen(true);

        setDescriptions({
            title:"Valor de Moeda",
            description:"Aplicação que mostra a temperatura atual.",
            image: coinValueModal,
            type: "Pessoal",
            lang: "ReactJS"
    })            
    }



    return (

        <Container >

            <h2>Projetos</h2>


            <Modal 
                isOpen={open} 
                setOpen={setOpen} 
                title={descriptions.title} 
                description={descriptions.description}
                image={descriptions.image}
                type={descriptions.type}
                lang={descriptions.lang}
                linkOfProject='null'
            ></Modal>

            <div className="projectContainer">

                <button onClick={async () => {await onOpenModalSaldaoMjv(); toggle}}> <Project image={saldaoMjv} title="Saldão Mjv" type='Bootcamp' lang='ReactTs'/>
                    
                </button>

                <button onClick={onOpenModalCoinValue}> <Project image={coinValue} title="Coin Value" type='Pessoal' lang='ReactJs' /></button>

                <button><Project image={barbaraCard} title="Card Digital" /></button>

                <button><Project image={weatherApp} title="Aplicação do tempo React" /></button>

                <button><Project image={DigitalClockJS} title="Aplicação de Hora JS" /></button>


            </div>
        </Container>
    )
}
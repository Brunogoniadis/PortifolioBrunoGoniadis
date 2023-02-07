
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
    const onOpenModalCardDigital = () => {
        setOpen(true);

        setDescriptions({
            title:"Advogada Digital",
            description:"Aplicação de card para a Advogada Bárbara Goniadis.",
            image: barbaraCard,
            type: "ProjetoBootCamp",
            lang: "ReactJS"
    })            
    }

    const onOpenModalWeatherApp = () => {
        setOpen(true);

        setDescriptions({
            title:"WeatherApp",
            description:"Mini container com informação de Tempo.",
            image: weatherApp,
            type: "ProjetoBootCamp",
            lang: "ReactJS"
    })            
    }

    const onOpenModalTimeJS = () => {
        setOpen(true);

        setDescriptions({
            title:"TimeJS",
            description:"Aplicação de horas em JavaScript.",
            image: weatherApp,
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

                <button onClick={onOpenModalCoinValue}> <Project image={coinValue} title="Coin Value" type='ProjetoBootCamp' lang='ReactJs' /></button>

                <button onClick={onOpenModalCardDigital}><Project image={barbaraCard} title="Card Digital" type='Projeto' lang='ReactJs'/></button>

                <button onClick={onOpenModalWeatherApp}><Project image={weatherApp} title="Aplicação do tempo React" type='ProjetoBootCamp' lang='ReactJs'/></button>

                <button onClick={onOpenModalTimeJS}><Project image={DigitalClockJS} title="Aplicação de Hora JS" type='Pessoal' lang='JavaScript'/></button>


            </div>
        </Container>
    )
}
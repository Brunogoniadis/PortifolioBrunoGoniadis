
import { useState, useRef , useEffect} from 'react'

import { Container } from "./styles";
import { Project } from "../../components/Project";
import { Modal } from '../../components/Modal/Modal';

import barbaraCard from "../../assets/projetos/barbaraCard.png"
import barbaraCardModal from "../../assets/projetos/modalImage/barbaraCardModal.png"

import coinValue from "../../assets/projetos/coinValue.png"


import DigitalClockJS from "../../assets/projetos/DigitalClockJS.png"
import DigitalClockJSModal from "../../assets/projetos/modalImage/DigitalClockJSModal.png"


import saldaoMjv from "../../assets/projetos/saldaoMjv.png"

import weatherApp from "../../assets/projetos/weatherApp.png"
import weatherAppModal from "../../assets/projetos/modalImage/weatherAppModal.png"


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
        lang: '',
        linkOfProject:''
    });

    const onOpenModalSaldaoMjv = () => {

        setOpen(true);
        setDescriptions({
            title:"Saldão MJV",
            description:"Aplicação ecommerce.",
            image: MjvMarkketModal,
            type: "BootCamp",
            lang: "ReactJS",
            linkOfProject:'https://github.com/Brunogoniadis/g4-mjv_school'
    })
    }
    const onOpenModalCoinValue = () => {
        setOpen(true);

        setDescriptions({
            title:"Valor de Moeda",
            description:"Aplicação que mostra a temperatura atual.",
            image: coinValueModal,
            type: "Pessoal",
            lang: "ReactJS",
            linkOfProject:'https://github.com/Brunogoniadis/coinValueReact'
    })           

    }
    const onOpenModalCardDigital = () => {
        setOpen(true);

        setDescriptions({
            title:"Advogada Digital",
            description:"Aplicação de card para a Advogada Bárbara Goniadis.",
            image: barbaraCardModal,
            type: "ProjetoBootCamp",
            lang: "ReactJS",
            linkOfProject:'https://github.com/Brunogoniadis/BarbaraGoniadisCard'
    })            
    }

    const onOpenModalWeatherApp = () => {
        setOpen(true);

        setDescriptions({
            title:"WeatherApp",
            description:"Mini container com informação de Tempo.",
            image: weatherAppModal,
            type: "ProjetoBootCamp",
            lang: "ReactJS",
            linkOfProject:'https://github.com/Brunogoniadis/WeatherApp'
    })            
    }

    const onOpenModalTimeJS = () => {
        setOpen(true);

        setDescriptions({
            title:"TimeJS",
            description:"Aplicação de horas em JavaScript.",
            image: DigitalClockJSModal,
            type: "Pessoal",
            lang: "ReactJS",
            linkOfProject:'https://github.com/Brunogoniadis/DigitalClockJS'
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
                linkOfProject={descriptions.linkOfProject}
            ></Modal>

            <div className="projectContainer">

                <button 
                onClick={async () => {await onOpenModalSaldaoMjv(); toggle}}
                > <Project image={saldaoMjv} title="Saldão Mjv" type='Bootcamp' lang='ReactTs'/>
                    
                </button>

                <button onClick={onOpenModalCoinValue}> <Project image={coinValue} title="Coin Value" type='ProjetoBootCamp' lang='ReactJs' /></button>

                <button onClick={onOpenModalCardDigital}><Project image={barbaraCard} title="Card Digital" type='Projeto' lang='ReactJs'/></button>

                <button onClick={onOpenModalWeatherApp}><Project image={weatherApp} title="Aplicação do tempo React" type='ProjetoBootCamp' lang='ReactJs'/></button>

                <button onClick={onOpenModalTimeJS}><Project image={DigitalClockJS} title="Aplicação de Hora JS" type='Pessoal' lang='JavaScript'/></button>

            </div>
        </Container>
    )
}
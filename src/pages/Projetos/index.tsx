
import { useState, useRef, useEffect } from 'react'

import { Container, CustomSlider, ItemSlide } from "./styles";
import { Project } from "../../components/Project";
import { Modal } from '../../components/Modal/Modal';
import Slider from "react-slick";
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


    const sliderRef = useRef<Slider>(null);




    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
    };



    const [descriptions, setDescriptions] = useState({
        title: '',
        description: '',
        image: '',
        type: '',
        lang: '',
        linkOfProject: ''
    });

    const ProjectsObject = {
        WeatherApp: {
            title: "WeatherApp",
            description: "Mini container com informação de Tempo.",
            image: weatherAppModal,
            type: "ProjetoBootCamp",
            lang: "ReactJS",
            linkOfProject: 'https://github.com/Brunogoniadis/WeatherApp'
        },
        TimeJS: {
            title: "TimeJS",
            description: "Aplicação de horas em JavaScript.",
            image: DigitalClockJSModal,
            type: "Pessoal",
            lang: "ReactJS",
            linkOfProject: 'https://github.com/Brunogoniadis/DigitalClockJS'
        },
        SaldaoMjv: {
            title: "Saldão MJV",
            description: "Aplicação ecommerce.",
            image: MjvMarkketModal,
            type: "BootCamp",
            lang: "ReactJS",
            linkOfProject: 'https://github.com/Brunogoniadis/g4-mjv_school'
        },
        CoinValue: {
            title: "Valor de Moeda",
            description: "Aplicação que mostra a temperatura atual.",
            image: coinValueModal,
            type: "Pessoal",
            lang: "ReactJS",
            linkOfProject: 'https://github.com/Brunogoniadis/coinValueReact'
        },
        CardDigital: {
            title: "Advogada Digital",
            description: "Aplicação de card para a Advogada Bárbara Goniadis.",
            image: barbaraCardModal,
            type: "ProjetoBootCamp",
            lang: "ReactJS",
            linkOfProject: 'https://github.com/Brunogoniadis/BarbaraGoniadisCard'
        }
    };


    const nextSlide = () => {
        if (sliderRef.current) {
            sliderRef.current.slickNext();
        }
    };

    const prevSlide = () => {
        if (sliderRef.current) {
            sliderRef.current.slickPrev();
        }
    };



    return (

        <Container >

            <div className="title">

                <h2>Projetos</h2>

            </div>

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

            <div
                className="projectContainer"
            >
                <div className="arrowContainer">

                    <button className='arrowLeft' onClick={prevSlide}><</button>
                    <button className='arrowRight' onClick={nextSlide}>></button>
                </div>

                <CustomSlider ref={sliderRef} {...settings}>


                    {Object.values(ProjectsObject).map((project) => (
                        <ItemSlide key={project.title}>
                            <h2>{project.title}</h2>
                            <p>{project.description}</p>
                            <img src={project.image} alt={project.title} />
                            <p>Type: {project.type}</p>
                            <p>Language: {project.lang}</p>
                            <a href={project.linkOfProject}>Link do Projeto</a>
                        </ItemSlide>
                    ))}
                </CustomSlider>
            </div>
        </Container>
    )
}

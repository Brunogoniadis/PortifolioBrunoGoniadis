import { Container } from "./styles"
import  Avatar  from "../../../src/assets/Avatar.png";
import  Grid  from "../../../src/assets/gridhalf.svg";

import { Sidebar } from "../../components/Sidebar";

import  { useState } from 'react';

import {RxHamburgerMenu} from "react-icons/rx"

export const Home = () =>{


    const [isOpen, setIsOpen] = useState(false);



    return(
        <Container>


          <div className="textsDescriptionContainer">
          <h1>Bruno Goniadis Lima</h1>
            <ol className="descriptionTopList">

                <h2>Desenvolvedor React</h2>
                <p>MJV Innovation - 02/2023 ~ Atualmente</p>
            </ol>

            <ol className="descriptionList">
                <h2>Engenheiro de Software</h2>
                <p>Unicesumar 2019 - Março de 2023</p>
            </ol>

            <ol className="descriptionList">
                <h2>Desenvolvedor Front-End</h2>
                <p>React (HTML,  CSS,  JS) - Animations</p>
            </ol>

            <ol className="descriptionList">
                <h2>UX-UI Designer - Google Professional Certificate </h2>
                <p>Design System, Jornada do usuário, Design e usabilidade</p>
            </ol>

            <ol className="descriptionList">
                <h2>GitHub e Git </h2>
                <p>Gerenciamento e controle de versões, branches</p>
            </ol>
          </div>
          <div className="avatarContainer">
            <img className="avatar" src={Avatar}></img>
          </div>
        </Container>
    )
}
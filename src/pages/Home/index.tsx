import { Container } from "./styles"
import  Avatar  from "../../../src/assets/Avatar.png";

export const Home = () =>{
    return(
        <Container>
          <div className="textsDescriptionContainer">

            <ol className="descriptionTopList">
                <h1>Bruno Goniadis Lima</h1>
                <h2>Graduando em Engenharia de <br></br>Software</h2>
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
            <img src={Avatar}></img>
          </div>
        </Container>
    )
}
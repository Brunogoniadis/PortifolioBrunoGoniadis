import { Container } from "./styles"


export const Home = () =>{
    return(
        <Container>
          <div className="textsDescriptionContainer">

            <ol className="descriptionTopList">
                <h1>Bruno Goniadis Lima</h1>
                <h2>Graduando em Engenharia de Software</h2>
                <p>Unicesumar 2019 - Março de 2023</p>
            </ol>

            <ol className="descriptionList">
                <h3>Desenvolvedor Front-End</h3>
                <p>React (HTML,  CSS,  JS) - Animations</p>
            </ol>

            <ol className="descriptionList">
                <h3>UX-UI Designer - Google Professional Certificate </h3>
                <p>Design System, Jornada do usuário, Design e usabilidade</p>
            </ol>

            <ol className="descriptionList">
                <h3>GitHub e Git </h3>
                <p>Gerenciamento e controle de versões, branches</p>
            </ol>

          </div>

        </Container>
    )
}
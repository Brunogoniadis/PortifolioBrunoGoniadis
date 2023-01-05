import { Container } from "./styles";

export const Header = () =>{
    return(
        <Container>
            
            <h3>Portfólio</h3>
            <ol className="descriptionPages">
                <p>Home</p>
                <p>•</p>
                <p>Tecnologias</p>
                <p>•</p>
                <p>Projetos</p>
                <p>•</p>
                <p>Contato</p>
            </ol>

        </Container>
    )
}
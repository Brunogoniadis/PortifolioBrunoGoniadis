


import { CardContainer } from "../../components/CardContainer";
import { Container } from "./styles";

import { Card } from "../../components/Card";
import react from "../../assets/react.svg"
import figma from "../../assets/figma.svg"
import github from "../../assets/github.svg"


export const Tecnologias = () => {

    return (
        <Container>
            <h2>Tecnologias</h2>


            <CardContainer

                

                card={
                    <Card
                        img={react}
                        title="ReactJs"
                        type1="Framework"
                        type2="Front-End"
                        description="Linguagem single page"
                    ></Card>

                }
                card2={
                    <Card
                        img={figma}
                        title="Figma"
                        type1="Tool"
                        type2="Design"
                        description="Aplicação de design"
                    ></Card>
                }
                card3={
                    <Card
                        img={github}
                        title="Github"
                        type1="Tool"
                        type2="Management"
                        description=
                        "Gestão de branches"
                    ></Card>
                }
                ></CardContainer>





        </Container>
    )


}
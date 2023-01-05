import { Container } from "./styles";

import { Card } from "../../components/Card";
import react from "../../assets/react.svg"

export const Tecnologias = () =>{

    return(
        <Container>

        

         <Card 
            img={react}
            title="ReactJs" 
            type1="Framework" 
            type2="Front-End" 
            description=
            "Linguagem single page"
         ></Card>


        </Container>
    )


}
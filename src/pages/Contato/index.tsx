import { PostIt } from "../../components/PostIt";
import { Container } from "./styles";


export const Contato = () =>{
    return(
        <Container>
            <h2>Deixe seu recado!</h2>

            <div className="pinContainer">

                <PostIt />

                <PostIt/>

                <PostIt/>

                <PostIt/>

                <PostIt/>

                <PostIt/>


            </div>

            <h2>Contato</h2>
        </Container>

    )
}
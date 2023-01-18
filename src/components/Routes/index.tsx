import { Home } from "../../pages/Home"
import { Tecnologias } from "../../pages/Tecnologias"
import { Projetos } from "../../pages/Projetos"
import { Contato } from "../../pages/Contato"

import { Route, BrowserRouter } from "react-router-dom";


export const RoutesMain = () => {
    return ( 
        <BrowserRouter>
                <Route path="/" element={<Home/>} />
                <Route path="/tecnologias" element={<Tecnologias/>} />
                <Route path="/projetos" element={<Projetos/>} />
                <Route path="/contato" element={<Contato/>} />
        </BrowserRouter>

    )
}
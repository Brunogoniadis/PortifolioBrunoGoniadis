import { Container } from "./styled";

import  { useEffect, useState } from 'react';
import {RxHamburgerMenu} from "react-icons/rx"
import { Link } from 'react-scroll'


export const Sidebar = () =>{

    const [statusSidebar, setStatusSidebar] = useState(false);





    return(

    <Container>
        <button className="revealSideButton" onClick={()=>setStatusSidebar(true)}><RxHamburgerMenu/></button>
        
        <div className="sidebarContainer" onClick={()=>{setStatusSidebar(false)}} style={{display: `${statusSidebar ? 'flex' : 'none'}` }}>
            

        
        </div>

        <div className="sidebar" style={{transform: `translateX(${statusSidebar ? '0' : '-100%'})`}}>
                <h2>Portfólio</h2>

                <div className="linkContainer">
                    <Link className="linkScroll" to="home" spy={true} smooth={true} onClick={()=>{setStatusSidebar(false)}}>Home</Link>
                    <Link className="linkScroll" to="Tecnologias" spy={true} smooth={true} onClick={()=>{setStatusSidebar(false)}}>Tecnologias</Link>
                    <Link className="linkScroll" to="Projetos" spy={true} smooth={true} onClick={()=>{setStatusSidebar(false)}}>Projetos</Link>
                    <Link className="linkScroll" to="Contato" spy={true} smooth={true} onClick={()=>{setStatusSidebar(false)}}>Contato</Link>
                </div>
        </div>
        
    </Container>    


    )

        
    
}
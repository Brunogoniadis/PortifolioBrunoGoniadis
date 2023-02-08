import { useState , useEffect } from "react"


import { ContainerBaseCards } from "./styles"
import { ICardContainer } from "./types"


export const CardContainer = ({card, card2, card3}:ICardContainer) =>{
    
    const [textTec, setTextTec] = useState({
        title:'Clique em um botão', 
        description:'Selecione uma tecnologia'
    });

    
    function ReactJs (){
        setTextTec({
            title:"ReactJs",
            description:"Já aprofundado em JavaScript, optei por programar em React devido à extensão de disponibilidade de conteúdos da comunidade. Para mim, o uso dos Hooks fazem do React uma ferramenta muito além do JavaScript em termos de reuso e organização."
    })}

    function Figma (){
        setTextTec({
            title:"Figma",
            description:"Com o Figma eu consegui ter as primeiras noções de design e esboçar telas de sistemas ou designs simples."
    })}

    function GitHub (){
        setTextTec({
            title:"GitHub",
            description:"Excelente ferramenta para manipulação e gestão de projetos em programação. Essencial para qualquer programador que queira estar em contato com a comunidade e trabalhar em conjunto em equipe"
    })}



    return(
        <ContainerBaseCards>

            <div className="descriptionTechnologyContainer">
                <h2>{textTec.title}</h2>
                <div className="pdescriptionContainer">
                    <h3>{textTec.description}</h3>
                </div>
  
            </div>


            <div className="cardsBase">
                <button className="cardSlot" onClick={ReactJs}>{card}</button>
                <button className="cardSlot2" onClick={Figma}>{card2}</button>
                <button className="cardSlot3" onClick={GitHub}>{card3}</button>
            </div>


        </ContainerBaseCards>
    )
}
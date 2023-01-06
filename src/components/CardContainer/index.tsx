import { useState , useEffect } from "react"


import { ContainerBaseCards } from "./styles"
import { ICardContainer } from "./types"


export const CardContainer = ({card, card2, card3}:ICardContainer) =>{
    
    const [textTec, setTextTec] = useState({
        title:'Clique em um botão', 
        description:'Para saber da minha jornada'
    });

    
    function ReactJs (){
        setTextTec({
            title:"ReactJs",
            description:"sdsd"
    })}

    function Figma (){
        setTextTec({
            title:"Figma",
            description:"sdsd"
    })}

    function GitHub (){
        setTextTec({
            title:"GitHub",
            description:""
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
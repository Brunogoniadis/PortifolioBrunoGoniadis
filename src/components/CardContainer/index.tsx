import { ContainerBaseCards } from "./styles"
import { ICardContainer } from "./types"


export const CardContainer = ({card, card2, card3}:ICardContainer) =>{
    return(
        <ContainerBaseCards>

            <div className="descriptionTechnologyContainer">
                <h2>ReactJs</h2>
                <p>sad</p>

            </div>


            <div className="cardsBase">
                <div className="cardSlot">{card}</div>
                <div className="cardSlot2">{card2}</div>
                <div className="cardSlot3">{card3}</div>
            </div>


        </ContainerBaseCards>
    )
}
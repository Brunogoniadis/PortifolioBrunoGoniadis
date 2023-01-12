import { ModalContainer } from "./styles"

import { IModal } from "./types";

import {useState} from 'react'


export const Modal =({isOpen , setOpen, title, description,image, type, lang}:IModal)=>{

    if (!isOpen ) return null;

    return(
        <ModalContainer >
            <div className="overlay" onClick={()=>{setOpen(false)}}>

            </div>
            <div className="content">
                <h2>{title}</h2>
                <img src={image} alt="" />
                
                <div className="pContainer">
                    <p>• {type}</p>
                    <p>• {lang}</p>
                </div>


                <p>{description}</p>


            </div>
        </ModalContainer>
    )

}
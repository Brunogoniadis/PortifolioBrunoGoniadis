import { ModalContainer } from "./styles"

import { IModal } from "./types";

import {useState} from 'react'


export const Modal =({isOpen , setOpen, title, description,image}:IModal)=>{

    if (!isOpen ) return null;

    return(
        <ModalContainer >
            <button className="overlay" onClick={()=>{setOpen(false)}}>
                <div className="content">
                    <h2>{title}</h2>
                    <p>{description}</p>
                    <img src={image} alt="" />
                </div>
            </button>
        </ModalContainer>
    )

}
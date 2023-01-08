import Modal from 'react-modal';
import {useState} from 'react';
import { CSSTransition } from 'react-transition-group';

import { AiOutlineClose } from "react-icons/ai"

import { IModalProject } from './types';
import { ModalStyle, Container } from "./styled";

import './styles.css';





export const ModalProject =({modalIsOpen, closeModal}:IModalProject)=>{

    const [closeModalWindow, SetcloseModalWindow] = useState(true);

    function close(){
        SetcloseModalWindow(false)
    }

    return(
        <>
            <CSSTransition
                in={modalIsOpen}
                timeout={300}
                classNames="dialog"
            >
                <Modal
                    closeTimeoutMS={500}
                    isOpen={modalIsOpen}
                    style={ModalStyle}
                    contentLabel="Example Modal"
                >            
                
                <Container>
                    <div className="imageContainer">
                        <button onClick={closeModal}>
                            <AiOutlineClose/>
                        </button>
                    </div>

                    <div className="descriptionContainer">
                        <h2>asas</h2>
                            <div className="tecnosDescriptions">
                                <div className="tecno">
                                    <h3>teste</h3>
                                </div>

                                <div className="tecno">
                                    <h3>teste</h3>
                                </div>

                                <div className="tecno">
                                    <h3>teste</h3>
                                </div>


                            </div>

                        <p>ss</p>
                    </div>


                </Container>


                
                
                </Modal>
            </CSSTransition>


        </>

    )
}
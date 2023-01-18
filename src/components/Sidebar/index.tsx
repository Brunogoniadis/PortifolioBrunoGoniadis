import { SidebarContainer } from "./styled";

import  { useState } from 'react';
import { ISidebar } from "./types";

export const Sidebar = ({statusSidebar}:ISidebar) =>{

    const [isOpen, setIsOpen] = useState(false);



    return (


        <SidebarContainer style={{transform: `translateX(${statusSidebar ? '0' : '-100%'})`}}>
            <p>teste</p>
            <p>teste</p>
            <p>teste</p>
            <p>teste</p>
        </SidebarContainer>
    )
}
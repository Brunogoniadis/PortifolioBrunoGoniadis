import { SidebarContainer } from "./styled";

import  { useState } from 'react';
import { ISidebar } from "./types";

export const Sidebar = ({statusSidebar, setStatusSidebar}:ISidebar) =>{

    if (!statusSidebar ) return null;

    return(
    <SidebarContainer onClick={()=>{setStatusSidebar(false)}}>
        <div className="sidebar" >
            <h3>teste</h3>
            <h3>teste</h3>
            <h3>teste</h3>
            <h3>teste</h3>
        </div>
    </SidebarContainer>

    )

        
    
}
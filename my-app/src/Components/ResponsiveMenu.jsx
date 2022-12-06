//imports
import React from "react";
import '../Styles/ResponsiveMenu.css'
import { IoMdClose } from 'react-icons/io';
//imports

function ResponsiveMenu ({setMenu}){
    return(
        <div className="mainContainer__responsiveMenu">
            <ul className="responsiveMenu-list-container">
                <li className="responsiveMenu-list-close"><IoMdClose onClick={()=>{setMenu(null)}}  className="responsiveMenu-close-icon"></IoMdClose></li>
            </ul>
        </div>
    );
}

export default ResponsiveMenu;
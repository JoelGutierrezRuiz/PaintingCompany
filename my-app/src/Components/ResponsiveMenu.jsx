//imports
import React from "react";
import '../Styles/ResponsiveMenu.css'
import { IoMdClose } from 'react-icons/io';
//imports

function ResponsiveMenu ({setMenu}){
    return(
        <div className="mainContainer__responsiveMenu">
            <ul className="responsiveMenu-list-container">
                <li className="responsiveMenu-list-close responseiveMenu-list-item"><IoMdClose onClick={()=>{setMenu(null)}}  className="responsiveMenu-close-icon "></IoMdClose></li>
                <li className="responseiveMenu-list-item"><p>Residential Painting</p></li>
                <li className="responseiveMenu-list-item"><p>Comercial Painting</p></li>
                <li className="responseiveMenu-list-item"><p>Reviews</p></li>
                <li className="responseiveMenu-list-item"><p>About Us</p></li>

            </ul>
        </div>
    );
}

export default ResponsiveMenu;
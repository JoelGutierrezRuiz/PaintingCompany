//imports 
import React from "react";
import '../Styles/Welcome.css'
//import painter from '../Imagenes/painter.jpeg'
import Experience from "./Experience";
//imports
function Welcome (){
    return(
        <div className="mainContainer__welcome">

            <Experience></Experience>
            <img className="welcome-img" src={"https://www.marsanmantenimiento.com/wp-content/uploads/2020/10/men-painting-empty-home-interior-P96RH5M-1536x1024.jpg"}></img>
           
            
        </div>
    );
}

export default Welcome;
//imports 
import React from "react";
import '../Styles/Welcome.css'
//import painter from '../Imagenes/painter.jpeg'
import Experience from "./Experience";
//imports
function Welcome (){
    return(
        <div className="mainContainer__welcome">
            <a className="welcome-phone" href="tel:5554280940">Call us at 555-428-0940</a>
            <Experience></Experience>
            <img className="welcome-img" src={"https://www.marsanmantenimiento.com/wp-content/uploads/2020/10/men-painting-empty-home-interior-P96RH5M-1536x1024.jpg"}></img>
           
            
        </div>
    );
}

export default Welcome;
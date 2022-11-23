//imports 
import React from "react";
import '../Styles/Welcome.css'
import painter from '../Imagenes/painter.jpeg'
import Experience from "./Experience";
//imports
function Welcome (){
    return(
        <div className="mainContainer__welcome">
            <Experience></Experience>
            <img className="welcome-img" src={painter}></img>
           
            
        </div>
    );
}

export default Welcome;
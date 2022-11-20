//imports 
import React from "react";
import '../Styles/Welcome.css'
import painter from '../Imagenes/painter.jpg'
//imports
function Welcome (){
    return(
        <div className="mainContainer__welcome">
            <div className="welcome-text">HOUSE PAINTING SERVICES</div>
            <img className="welcome-img" src={painter}></img>

            
        </div>
    );
}

export default Welcome;
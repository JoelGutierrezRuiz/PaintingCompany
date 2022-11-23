//imports 
import React from "react";
import '../Styles/Welcome.css'
import painter from '../Imagenes/painter.jpeg'
//imports
function Welcome (){
    return(
        <div className="mainContainer__welcome">
            <div className="welcome-text">HOUSE PAINTING SERVICES</div>
            <div className="welcome-img-container"><img className="welcome-img" src={painter}></img></div>
            
        </div>
    );
}

export default Welcome;
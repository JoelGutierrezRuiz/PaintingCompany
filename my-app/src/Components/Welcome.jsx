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
            <div className="welcome-text--schedule">
                <p>Ready to make a change?</p>
                <button>Schedule an Estimate</button>
            </div>
            
        </div>
    );
}

export default Welcome;
//imports 
import React from "react";
import '../Styles/Welcome.css'
import painter from '../Imagenes/painter.jpeg'
import Experience from "./Experience";
//imports
function Welcome (){
    return(
        <div className="mainContainer__welcome">
            <div className="welcome-container"> 
                <p className="welcome-text"> Painting your safe space and family confort Since 2004 </p>
                <p className="welcome-text-mini">Over more than a half a century, we’ve come to be Southern California’s center of knowledge, sales & service for fireplaces, fire pits & chimneys</p>
            </div>
            <Experience></Experience>
            <img className="welcome-img" src={painter}></img>
           
            
        </div>
    );
}

export default Welcome;
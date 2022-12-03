//imports 
import React from "react";
import '../Styles/Welcome.css'
import { BsFillTelephoneFill } from 'react-icons/bs';
import Experience from "./Experience";
//imports
function Welcome (){
    return(
        <div className="mainContainer__welcome">

            <div className="welcome-phone-container" onClick={()=>{window.open("tel:+4842566");  }}><BsFillTelephoneFill className="welcome-phone-icon"></BsFillTelephoneFill><p className="welcome-phone-text" >Call Us</p></div>
            <Experience></Experience>
            <img className="welcome-img" src={"https://www.marsanmantenimiento.com/wp-content/uploads/2020/10/men-painting-empty-home-interior-P96RH5M-1536x1024.jpg"}></img>
           
            
        </div>
    );
}

export default Welcome;
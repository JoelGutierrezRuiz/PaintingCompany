//imports
import React, { useEffect, useRef } from "react";
import '../Styles/Footer.css'
import paint from'../Videos/paintfalling.mp4'
import { AiOutlineInstagram } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';


//imports

function Footer (){

    const setSpeed = (e)=>{
        console.log(e)
        e.target.playbackRate=10;
    }
    
    return(
        <div className="mainContainer__footer">
            <video muted autoPlay loop onCanPlay={setSpeed} className="footer-video" src={paint}></video>
            <ul>
                <li><AiOutlineInstagram></AiOutlineInstagram></li>
                <li><AiFillLinkedin></AiFillLinkedin></li>
                <li></li>
                <li></li>
            </ul>
        </div>
    );
}

export default Footer;
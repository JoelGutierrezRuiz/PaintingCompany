//imports
import React, { useEffect, useRef } from "react";
import '../Styles/Footer.css'
import paint from'../Videos/paintfalling.mp4'
import { AiOutlineInstagram } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import {FaWhatsapp} from 'react-icons/fa'
import {BiMap} from 'react-icons/bi'
import {BsPhone} from 'react-icons/bs'

import logo from '../Imagenes/logo.png'


//imports

function Footer ({Page}){

    const setSpeed = (e)=>{
        console.log(e)
        e.target.playbackRate=2;
    }
    
    return(
        <div className="mainContainer__footer">
            <video className="video-footer-background"  loop src={paint} autoPlay muted></video>
            <div className="footer-company">

                <div className="footer-company-logo">
                    <img className="footer-logo" src={logo}></img>
                    <ul className="footer-social">
                        <li><AiOutlineInstagram className="footer-icon"/></li>
                        <li><AiFillLinkedin className="footer-icon"/></li>
                        <li><FaWhatsapp className="footer-icon"/></li>

                    </ul>
                </div>

                <div className="footer-direction-container">
                    <p className="footer-direction"> <BiMap className="footer-direction-icon"/>6729-6601 Yarmouth Ave, Reseda, CA 91335</p>
                    <p className="footer-phone"><BsPhone className="footer-phone-icon"/> +1 (818) 660-7669</p> 
                    <div className="footer-schedule-button-container"></div> 
                    <button onClick={()=>{Page("form")}} className="footer-schedule-button">ESTIMATE YOUR PROJECT</button>
                </div>

            </div>



            <div className="footer-services">
                <ul className="footer-info-container">
                    <li className="footer-info">Services</li>
                    <li className="footer-info">Comercial Painting</li>
                    <li className="footer-info">House Painting</li>
                    <li className="footer-info woodWork">Wood Work</li>
                </ul>
            </div>


            




        </div>
    );
}

export default Footer;
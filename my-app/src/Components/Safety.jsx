//imports
import React from "react";
import '../Styles/Safety.css'
import distance from '../Imagenes/distance.png'
import mask from '../Imagenes/mask.png'
import sanitizer from '../Imagenes/sanitizer.png'
import mobile from '../Imagenes/mobile.png'
import family from '../Imagenes/family.jpg'
import { MdSocialDistance } from 'react-icons/md';
import { FaHandHoldingMedical } from 'react-icons/fa';
import { FaHeadSideMask } from 'react-icons/fa';
import { AiOutlineWechat } from 'react-icons/ai';
//imports 
function Safety (){
    return (
        <div className="mainContainer__safety">
            <img className="safety-background" src={family}></img>
            <div className="safety-text">
                <h2>Keeping our Customers and Teams Safe</h2>
                <p >
                    At CertaPro Painters®, we’re focused on providing you with a worry-free painting experience based on a customized
                    project plan – complete with safety and cleaning guidelines to keep you and our teams safe. We look forward to providing you the best customer experience possible. Read more about our cleaning guidelines here.
                </p>
            </div>

            <div className="safety-icons">
                <AiOutlineWechat className="safety-icons-icon"></AiOutlineWechat>
                <FaHeadSideMask className="safety-icons-icon"></FaHeadSideMask>
                <FaHandHoldingMedical className="safety-icons-icon"></FaHandHoldingMedical>
                <MdSocialDistance className="safety-icons-icon"></MdSocialDistance>
            </div>
        </div>
    );
}

export default Safety;
//imports
import React, { useState } from "react";
import '../Styles/StartSchedule.css'
import { AiFillPlayCircle } from 'react-icons/ai';
//imports

function StartSchedule ({Page}){

 
    return(
        <div className="mainContainer___startSchedule">

            <div className="startSchedule-text">
                <h2> A Painting Company You Can Trust</h2>
                <p >
                Welcome to Thick Brush Painting Co., where we bring new life to your space! Our experienced team uses top-quality products to deliver a flawless finish. We prioritize customer satisfaction and open communication. Give us a call for a free quote and let's make your home or business shine!
                    
                </p>
            </div>
            <div className="startSchedule-button">
                <button onClick={()=>{Page("form")}}>Schedule an Stimate <AiFillPlayCircle className="startSchedule-icon"></AiFillPlayCircle></button>
            </div>
           
        </div>
    );
}

export default StartSchedule;
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
                    At CertaPro Painters®, our promise has always been that of Certainty — reassuring our customers of a worry-free and easy property improvement experience. We have spent decades gaining the trust of our customers to become North America’s Most Referred Painting Company®. Your satisfaction is our top priority. Schedule your free estimate today.
                    
                </p>
            </div>
            <div className="startSchedule-button">
                <button onClick={()=>{Page("form")}}>Schedule an Stimate <AiFillPlayCircle className="startSchedule-icon"></AiFillPlayCircle></button>
            </div>
           
        </div>
    );
}

export default StartSchedule;
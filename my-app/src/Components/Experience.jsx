//imports
import React, { useEffect, useState } from "react";
import '../Styles/Experience.css'
import {useSpring,animated} from 'react-spring'
import { AiFillFormatPainter } from 'react-icons/ai';

//imports
function Experience (){

    function Years({n}){
        const {number}= useSpring({
            from:{number:0},
            number:n,
            delay:200,
            config:{mass:1, tension:20,friction:25}
        });
        return <animated.div>{number.to((n)=> n.toFixed(0))}</animated.div>
    }
    function Clients({n}){
        const {number}= useSpring({
            from:{number:0},
            number:n,
            delay:500,
            config:{mass:1, tension:20,friction:50}
        });
        return <animated.div>{number.to((n)=> n.toFixed(0))}</animated.div>
    }

    return (
        <div className="mainContainer__experience">
            <div className="experience-years">
                <div className="experience-paintEffect"><AiFillFormatPainter className="experience-iconEffect"></AiFillFormatPainter></div>
                <span className="experience-years-number"><Years n={18}/></span>
                <p className="experience-years-text">Years in Business</p>
            </div>
            <div className="experience-clients">
                <span className="experience-clients-number"><Clients n={350}/></span>
                <p className="experience-clients-text">Families and Companies Satisfied with our services</p>
            </div>
        </div>
    );
}

export default Experience;
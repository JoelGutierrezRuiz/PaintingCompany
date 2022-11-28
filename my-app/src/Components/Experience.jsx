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
            config:{mass:1, tension:20,friction:30}
        });
        return <animated.div>{number.to((n)=> n.toFixed(0))}</animated.div>
    }
    function Clients({n}){
        const {number}= useSpring({
            from:{number:0},
            number:n,
            delay:200,
            config:{mass:1, tension:20,friction:20}
        });
        return <animated.div>{number.to((n)=> n.toFixed(0))}</animated.div>
    }

    return (
        <div className="mainContainer__experience">

            <div className="mainContainer-years-clients">

                <div className="experience-years">
                    <div className="experience-paintEffect">
                        
                        <AiFillFormatPainter className="experience-iconEffect"></AiFillFormatPainter>
                        <span className="experience-years-number">
                            <Years className="years-counter" n={18}/>
                        </span>
                        <span className="experience-years-plus">+</span>
                        
                    </div>

                    <p className="experience-years-text">Years in Business</p>
                    
                    
                </div>

                <div className="experience-clients">
                    <div className="experience-clients-number-text-container">
                        <span className="experience-clients-number">
                            <Clients className="clients-counter" n={1500}/>
                        </span>
                        <span className="experience-clients-plus">+</span>
                    </div>
                    
                    
                    <p className="experience-clients-text">Families and Companies Satisfied with our services</p>
                </div>
            </div>
            
        </div>
    );
}

export default Experience;
//import
import React, { useState } from "react";
import '../Styles/ClientForm.css'
import { IoMdClose } from 'react-icons/io';
import { BsCheckCircleFill } from 'react-icons/bs';
import { GrLinkNext } from 'react-icons/gr';


//import
function ClientForm ({Page,active,setActive}){

    

    return(
        <div className="mainContainer__clientForm">
            <div className="container__clientForm">
                <div className="clientForm__title">
                    <p className="clientForm__title-text">Project Information</p>
                    <IoMdClose onClick={()=>{Page("")}} className="close-form-icon"/>
                </div>
                
                <ul className="clientForm-form">
                    <li className="clientForm-form-buttonType">
                        <div className="buttonType-container">
                            <p>What type of property needs painting?</p>
                            <div>
                                <button onClick={()=>{setActive({...active,home:true,comercial:null})}} style={active.home?{backgroundColor:"#FF9000",color:"white",border:"none"}:null}>Home</button>
                                <button onClick={()=>{setActive({...active,home:null,comercial:true})}} style={active.comercial?{backgroundColor:"#FF9000",color:"white",border:"none"}:null}>Bussines</button>
                            </div>
                            
                        </div>
                        
                    </li>


                    <li className="clientForm-form-buttonType">
                        <div className="buttonType-container">
                            <p>What would you like to paint?</p>
                            <div>
                                <button onClick={()=>{setActive({...active,interior:true,exterior:null,both:null})}} style={active.interior?{backgroundColor:"#FF9000",color:"white",border:"none"}:null}>Interior</button>
                                <button onClick={()=>{setActive({...active,interior:null,exterior:true,both:null})}} style={active.exterior?{backgroundColor:"#FF9000",color:"white",border:"none"}:null}>Exterior</button>
                                <button onClick={()=>{setActive({...active,interior:null,exterior:null,both:true})}} style={active.both?{backgroundColor:"#FF9000",color:"white",border:"none"}:null}>Both</button>
                            </div>
                            
                        </div>
                        
                    </li>


                    <li className="clientForm-form-buttonType">
                        <button className="clientForm-nextButton">Next <GrLinkNext color="white" className="clientForm-nextIcon"></GrLinkNext></button>
                    </li>
                    
                </ul>
            </div>

        </div>
    );

}

export default ClientForm;
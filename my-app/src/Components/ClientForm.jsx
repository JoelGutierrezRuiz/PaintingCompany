//import
import React from "react";
import '../Styles/ClientForm.css'
import { IoMdClose } from 'react-icons/io';
import { BsCheckCircleFill } from 'react-icons/bs';
import { GrLinkNext } from 'react-icons/gr';


//import
function ClientForm ({Page}){

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
                                <button>Home</button>
                                <button>Bussines</button>
                            </div>
                            
                        </div>
                        
                    </li>


                    <li className="clientForm-form-buttonType">
                        <div className="buttonType-container">
                            <p>What would you like to paint?</p>
                            <div>
                                <button>Interior</button>
                                <button>Exterior</button>
                                <button>Both</button>
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
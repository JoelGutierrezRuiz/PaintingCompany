//import
import React from "react";
import '../Styles/ClientForm.css'
import { IoMdClose } from 'react-icons/io';
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
                    <li className="clientForm-form-input"><input></input></li>
                    <li className="clientForm-form-input"><input></input></li>
                </ul>
            </div>

        </div>
    );

}

export default ClientForm;
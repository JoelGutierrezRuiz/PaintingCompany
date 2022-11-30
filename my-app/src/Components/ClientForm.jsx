//import
import React from "react";
import '../Styles/ClientForm.css'
import { IoMdClose } from 'react-icons/io';
//import
function ClientForm ({Page}){

    return(
        <div className="mainContainer__clientForm">
            <div className="container__clientForm">
                <IoMdClose onClick={()=>{Page("")}} className="close-form-icon"/>
                <ul className="clientForm-form">
                    <li className="clientForm-form-input"><input></input></li>
                    <li className="clientForm-form-input"><input></input></li>
                </ul>
            </div>

        </div>
    );

}

export default ClientForm;
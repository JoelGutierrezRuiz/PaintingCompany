//imports
import '../../Styles/Form/InfoForm.css'
import React from 'react';
import { BiArrowBack } from 'react-icons/bi';
//imports

function InfoForm({setNext}){
    return(
    <div className='mainContainer__infoForm'>
        <ul className='infoForm-list-container'>
            <li className='infoForm-list-input name'><input placeholder='First Name*'></input><input placeholder='Last Name*'></input></li>

            <li className='infoForm-list-input email'><input placeholder='Email*'></input></li>
            <li className='infoForm-list-input phone'><input placeholder='Phone*'></input></li>
            <li className='infoForm-list-input PostalCode'><input placeholder='Postal Code*'></input></li>
            <li className='infoForm-list-input CompanyName'><input placeholder='Company Name*'></input></li>
            
        </ul>
        <div className='infoForm-back'>
            <div className='infoForm-back-icon' onClick={()=>{setNext(null)}}><BiArrowBack ></BiArrowBack></div>
            
            <button className='infoForm-stimate-button'>Get Your Stimate</button>
        </div>
    </div>)
}

export default InfoForm;

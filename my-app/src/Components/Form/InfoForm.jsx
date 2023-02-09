//imports
import '../../Styles/Form/InfoForm.css'
import React from 'react';
import { BiArrowBack } from 'react-icons/bi';
//imports

function InfoForm({setNext}){

    let datosCliente = {"First Name*":"","Email*":"","Phone":"","Postal Code*":"","Company Name":"","Postal Code*":"","Adress 1*":"","Adress 2*":"","City":"",city:""}

    const handleChange=(e)=>{

        

        datosCliente[e.target.placeholder] = e.target.value

        console.log(datosCliente)

        
    }



    return(
    <div className='mainContainer__infoForm'>
        <p className='infoForm-ul-text'>Business Contact Information:</p>
        <ul className='infoForm-list-container'>
            <li onChange={handleChange} className='infoForm-list-input name'><input placeholder='First Name*'></input><input placeholder='Last Name*'></input></li>

            <li onChange={handleChange} className='infoForm-list-input email'><input placeholder='Email*'></input></li>
            <li onChange={handleChange} className='infoForm-list-input phone'><input placeholder='Phone*'></input></li>
            <li onChange={handleChange} className='infoForm-list-input PostalCode'><input placeholder='Postal Code*'></input></li>
            
        </ul>

        <p className='infoForm-ul-text'>Property you want an estimate for:</p>
        <ul className='infoForm-list-container'>

            <li onChange={handleChange} className='infoForm-list-input email'><input placeholder='Adress 1*'></input></li>
            <li onChange={handleChange} className='infoForm-list-input phone'><input placeholder='Adress 2*'></input></li>
            <li onChange={handleChange} className='infoForm-list-input PostalCode'><input placeholder='City*'></input></li>
            <li onChange={handleChange} className='infoForm-list-input CompanyName'><input placeholder='Company Name*'></input></li>
            
        </ul>


        <div className='infoForm-back'>
            <div className='infoForm-back-icon' onClick={()=>{setNext(null)}}><BiArrowBack ></BiArrowBack></div>
            
            <button className='infoForm-stimate-button'>Get Your Stimate</button>
        </div>
    </div>)
}

export default InfoForm;

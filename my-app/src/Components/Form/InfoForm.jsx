//imports
import '../../Styles/Form/InfoForm.css'
import React from 'react';
import { BiArrowBack } from 'react-icons/bi';
//imports

function InfoForm({setNext}){

    let datosCliente = {"First Name*":"","Email*":"","Phone*":"","Postal Code*":"","Company Name*":"","Adress 1*":"","Adress 2*":"","City*":""}

    const handleChange=(e)=>{

        

        datosCliente[e.target.placeholder] = e.target.value
        console.log(datosCliente)

        
    }

    const submitForm=()=>{
        datosCliente["First Name*"]&&datosCliente["Email*"]&&datosCliente["Phone*"]&&datosCliente["Postal Code*"]&&datosCliente["Adress 1*"]?alert("Todo lleno"):alert("Rellena las casillas en rojo")
    }



    return(
    <div className='mainContainer__infoForm'>
        <p className='infoForm-ul-text'>Business Contact Information:</p>
        <ul className='infoForm-list-container'>
            <li  className='infoForm-list-input name'><input onChange={handleChange} placeholder='First Name*'></input><input onChange={handleChange} placeholder='Last Name*'></input></li>
            <li  className='infoForm-list-input email'><input onChange={handleChange} placeholder='Email*'></input></li>
            <li  className='infoForm-list-input phone'><input onChange={handleChange} placeholder='Phone*'></input></li>
            <li className='infoForm-list-input PostalCode'><input onChange={handleChange}  placeholder='Postal Code*'></input></li>
            
        </ul>

        <p className='infoForm-ul-text'>Property you want an estimate for:</p>
        <ul className='infoForm-list-container'>

            <li  className='infoForm-list-input email'><input onChange={handleChange} placeholder='Adress 1*'></input></li>
            <li  className='infoForm-list-input phone'><input onChange={handleChange} placeholder='Adress 2*'></input></li>
            <li  className='infoForm-list-input PostalCode'><input onChange={handleChange} placeholder='City*'></input></li>
            <li  className='infoForm-list-input CompanyName'><input onChange={handleChange} placeholder='Company Name*'></input></li>
            
        </ul>


        <div className='infoForm-back'>
            <div className='infoForm-back-icon' onClick={()=>{setNext(null)}}><BiArrowBack ></BiArrowBack></div>
            
            <button className='infoForm-stimate-button' onClick={submitForm}>Get Your Stimate</button>
        </div>
    </div>)
}

export default InfoForm;

//imports
import '../../Styles/Form/InfoForm.css'
import React, { useEffect, useState } from 'react';
import { BiArrowBack } from 'react-icons/bi';
//imports

function InfoForm({setNext,active,datos,setDatos}){

    //sacamos las keys (valores de active)
    var keys = Object.keys(active);

    useEffect(()=>{

    },[])


    var primerForm = keys.filter(function(key) {
        return active[key]
    });


    const handleChange=(e)=>{

        const inputName = e.target.placeholder
        const value = e.target.value
        setDatos({...datos,[inputName]:value})
        console.log(primerForm)


        
    }

    const submitForm=()=>{
        datos["First Name*"]&&datos["Email*"]&&datos["Phone*"]&&datos["Postal Code*"]&&datos["Adress 1*"]?alert("Todo lleno"):alert("Rellena las casillas en rojo")
    }



    return(
    <div className='mainContainer__infoForm'>
        <p className='infoForm-ul-text'>Business Contact Information:</p>
        <ul className='infoForm-list-container'>
            <li  className='infoForm-list-input name'><input value={datos["First Name*"]} onChange={handleChange} placeholder='First Name*'></input><input value={datos["Last Name*"]} onChange={handleChange} placeholder='Last Name*'></input></li>
            <li  className='infoForm-list-input email'><input value={datos["Email*"]} onChange={handleChange} placeholder='Email*'></input></li>
            <li  className='infoForm-list-input phone'><input value={datos["Phone*"]} onChange={handleChange} placeholder='Phone*'></input></li>
            <li className='infoForm-list-input PostalCode'><input value={datos["Postal Code*"]} onChange={handleChange}  placeholder='Postal Code*'></input></li>
            
        </ul>

        <p className='infoForm-ul-text'>Property you want an estimate for:</p>
        <ul className='infoForm-list-container'>

            <li  className='infoForm-list-input email'><input value={datos["Adress 1*"]} onChange={handleChange} placeholder='Adress 1*'></input></li>
            <li  className='infoForm-list-input phone'><input value={datos["Adress 2*"]} onChange={handleChange} placeholder='Adress 2*'></input></li>
            <li  className='infoForm-list-input PostalCode'><input value={datos["City*"]} onChange={handleChange} placeholder='City*'></input></li>
            <li  className='infoForm-list-input CompanyName'><input value={datos["Company Name*"]} onChange={handleChange} placeholder='Company Name*'></input></li>
            
        </ul>


        <div className='infoForm-back'>
            <div className='infoForm-back-icon' onClick={()=>{setNext(null)}}><BiArrowBack ></BiArrowBack></div>
            
            <button className='infoForm-stimate-button' onClick={submitForm}>Get Your Stimate</button>
        </div>
    </div>)
}

export default InfoForm;

import React from "react";
import '../Styles/Header.css'
import logo from '../Imagenes/logo.png'
import { FaPhoneAlt } from 'react-icons/fa';
function Header (){
    return(
        <section className='header'>
        <ul className='mainContainer__list'>
          <li className='headerList-logo'><img src={logo}></img></li>
          <li className='headerList-contact'><FaPhoneAlt className='headerList-phoneIcon'></FaPhoneAlt> 1-818-660-7669</li>
          <li className='headerList-free'>GET FREE STIMATE</li>
        </ul>
      </section>
    );
}

export default Header
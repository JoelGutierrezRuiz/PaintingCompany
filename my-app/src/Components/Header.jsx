import React from "react";
import '../Styles/Header.css'
import { MdOutlinePhoneIphone } from 'react-icons/md';
import { FiClock } from 'react-icons/fi';

function Header (){
    return(
        <section className='header'>
        <ul className='mainContainer__list'>
          <li className='headerList-contact'>
            <MdOutlinePhoneIphone className='headerList-icon'></MdOutlinePhoneIphone> 1-818-660-7669
          </li>
          <li className="headerList-clock"><FiClock className='headerList-icon'></FiClock> Mon - Fri: 7AM - 5PM</li>
        </ul>
      </section>
    );
}

export default Header
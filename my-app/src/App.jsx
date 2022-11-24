//imports
import { useState } from 'react'
import Header from './Components/Header';
import Safety from './Components/Safety';
import StartSchedule from './Components/StartSchedule';
import Welcome from './Components/Welcome';
import './Styles/App.css'
import logo from './Imagenes/logo.png'
import Footer from './Components/Footer';
import Reviews from './Components/Reviews';
import fixed from './Imagenes/fixed.jpg'
//imports
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='mainContainer-app'>
        <img className='fixed-img' src={fixed}></img>
        <section className='navigate'>
            <ul className='mainContainer__navigate'>
                <li className='navigate-li navigate-li--residential'>
                    RESIDENDENTIAL PAINTING
                    <div className='ampliation'>
                        <ul className='ampliation-list'>
                                <li className='ampliation-li'>Interior Painting</li>
                                <li className='ampliation-li'>Exterior Painting</li>
                                <li className='ampliation-li'>Services</li>
                            </ul>
                    </div>
                </li>

                <li className='navigate-li navigate-li--comercial'>
                    COMERCIAL PAINTING
                    <div className='ampliation'>
                        <ul className='ampliation-list'>
                            <li className='ampliation-li'>Services</li>
                            <li className='ampliation-li'>National Accounts</li>
                            <li className='ampliation-li'>Case Studies</li>
                        </ul>
                    </div>
                </li>

                <li className='navigate-li'>
                    REVIEWS
                </li>

                <li className='navigate-li'>ABOUT US</li>
            </ul>
        </section>
        <Welcome></Welcome>
        <StartSchedule></StartSchedule>
        <Reviews></Reviews>
        <Footer></Footer>
    </div>
   );
}

export default App

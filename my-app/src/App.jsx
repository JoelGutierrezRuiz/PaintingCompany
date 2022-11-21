//imports
import { useState } from 'react'
import Header from './Components/Header';
import Safety from './Components/Safety';
import StartSchedule from './Components/StartSchedule';
import Welcome from './Components/Welcome';
import './Styles/App.css'
import logo from './Imagenes/logo.png'
import Experience from './Components/Experience';
import Footer from './Components/Footer';
//imports
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='mainContainer-app'>
        <section className='navigate'>
            <ul className='mainContainer__navigate'>
                <li className='navigate-logo'><img className='logo-header' src={logo}></img></li>
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
        <Experience></Experience>
        <StartSchedule></StartSchedule>
        <Safety></Safety>
        <Footer></Footer>
    </div>
   );
}

export default App

//imports
import { useState } from 'react'
import StartSchedule from './Components/StartSchedule';
import Welcome from './Components/Welcome';
import {GiHamburgerMenu} from 'react-icons/gi'
import './Styles/App.css'
import Footer from './Components/Footer';
import Reviews from './Components/Reviews';
//import fixed from './Imagenes/fixed.jpg'
import ClientForm from './Components/Form/ClientForm';
import ResponsiveMenu from './Components/ResponsiveMenu';
//imports
function App() {
  const [count, setCount] = useState(0)

  const [page,setPage] = useState("");

  const [menu,setMenu] = useState (null)

  const Page = (pagina)=>{
    setPage(pagina)
  }

  const [active,setActive] = useState({home:null,comercial:null,both:null,interior:null,exterior:null})//objeto para el formulario y mantenerlo activo mientras se navega para no volver a poner la info del proyecto

  return (

    <div className='mainContainer-app' style={page=="form"?{overflowY:"hidden"}:null}>
        
        {
            menu?<ResponsiveMenu setMenu={setMenu}></ResponsiveMenu>:null
        }


        {
            page=="form"?<ClientForm active={active} setActive={setActive} Page={Page}></ClientForm>:null
        }


        <img className='fixed-img' src="https://storage.googleapis.com/sealed-prod.appspot.com/1/2020/09/GettyImages-968891264_small-1024x684.jpg"></img>


        <section className='navigate'>

            <div className='navigate-responsive'>
                
                <div className='navigate-responsive-logo-text-mainContainer'>
                    <img className="navigate-responsive-logo" src={"https://cryptologos.cc/logos/aave-aave-logo.png"}></img>
                    <div className='navigate-responsive-logo-text-container'>
                        <h2 className='navigate-responsive-logo-text-h2'>A+ Painting</h2>
                        <p className='navigate-responsive-logo-text-p'>By JGroup</p>
                    </div>
                    
                </div>
                <div onClick={()=>{setMenu(true)}} className='navigate-responsive-icon-container'>
                    <GiHamburgerMenu  className='navigate-responsive-icon'/>
                </div>
                
            </div>

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
        <StartSchedule Page={Page}></StartSchedule>
        <Reviews></Reviews>
        <Footer Page={Page}></Footer>
    </div>
   );
}

export default App

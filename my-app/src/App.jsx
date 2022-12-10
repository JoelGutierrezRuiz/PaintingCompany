//imports
import { useState } from 'react'
import StartSchedule from './Components/StartSchedule';
import Welcome from './Components/Welcome';
import {GiHamburgerMenu} from 'react-icons/gi'
import './Styles/App.css'
import Footer from './Components/Footer';
import Reviews from './Components/Reviews';
import ClientForm from './Components/Form/ClientForm';
import './Styles/ResponsiveMenu.css'
import { IoMdClose } from 'react-icons/io';
import ResidentialPainting from './Components/ResidentialPainting';
import WhyUS from './Components/WhyUs';

//imports
function App() {
  const [count, setCount] = useState(0)

  const [page,setPage] = useState("");

  const [menu,setMenu] = useState (null)

  const [link,setLink]= useState ("home")

  const Page = (pagina)=>{
    setPage(pagina)
  }

  const [active,setActive] = useState("home")//objeto para el formulario y mantenerlo activo mientras se navega para no volver a poner la info del proyecto

  return (

    <div className='mainContainer-app' style={page=="form"?{overflowY:"hidden"}:null}>
        
        {
            menu?

                <div 
                    className="mainContainer__responsiveMenu">
                <ul className="responsiveMenu-list-container">
                    
                    <li className="responsiveMenu-list-close responseiveMenu-list-item"><IoMdClose onClick={()=>{setMenu(null)}}  className="responsiveMenu-close-icon "></IoMdClose></li>
                    
                    <li onClick={()=>{setLink("home");setMenu(null)}} className="responseiveMenu-list-item">
                        <p>Home</p>
                    </li>
                    
                    <li onClick={()=>{setLink("residential");setMenu(null)}} className="responseiveMenu-list-item">
                        <p>Residential Painting</p>
                    </li>
                    
                    
                    
                    <li onClick={()=>{setLink("comercial");setMenu(null)}} className="responseiveMenu-list-item">
                        <p  >Comercial Painting</p>
                    </li>
                    
                    <li className="responseiveMenu-list-item"><p>About Us</p></li>

                </ul>
                </div>
            
            :null
        }


        {
            page=="form"?<ClientForm active={active} setActive={setActive} Page={Page}></ClientForm>:null
        }


        <img className='fixed-img' src="https://storage.googleapis.com/sealed-prod.appspot.com/1/2020/09/GettyImages-968891264_small-1024x684.jpg"></img>


        <section className='navigate'>

            <div className='navigate-responsive'>

                <div onClick={()=>{setLink("home")}} className='navigate-responsive-logo-text-mainContainer'>
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

                <li onClick={()=>{setLink("home")}} className='navigate-li--logo'>

                    <div className='navigate-logo-text-mainContainer'>
                        <img className="navigate-logo" src={"https://cryptologos.cc/logos/aave-aave-logo.png"}></img>

                        <div className='navigate-logo-text-container'>
                            <h2 className='navigate-logo-text-h2'>A+ Painting</h2>
                            <p className='navigate-logo-text-p'>By JGroup</p>
                        </div>
                    
                    </div>
                </li>


                <li onClick={()=>{setLink("home")}} className='navigate-li navigate-li--residential'>

                    <p>Home</p>

                </li>

                <li onClick={()=>{setLink("residential")}}  className='navigate-li navigate-li--comercial'>
                    
                    <p>Residential Painting</p>
                    
                </li>

                <li onClick={()=>{setLink("comercial")}} className='navigate-li'>
                    <p>Comercial Painting</p>
            
                </li>

                <li className='navigate-li'>
                    <p>ABOUT US</p> 
                </li>
            </ul>
        </section>

        {
            link=="home"?
                <>
                    <Welcome></Welcome>
                    <StartSchedule Page={Page}></StartSchedule>
                    <WhyUS></WhyUS>
                    <Reviews></Reviews>
                </>
            :link=="residential"?
                <ResidentialPainting></ResidentialPainting>
            :link=="comercial"?
                <Welcome></Welcome>
            :null
        }
           
         <Footer Page={Page}></Footer>

    </div>
   );
}

export default App

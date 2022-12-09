//imports

import React from "react";
import "../Styles/WhyUs.css"


//imports

function WhyUS (){

    const img = {estimate:"https://img.freepik.com/foto-gratis/mano-escritura-negocios-papel-oficina_1262-2119.jpg?w=1060&t=st=1670486625~exp=1670487225~hmac=9083009170f81c32c2e1b280b4f2d38af39edd85f9458910f575a30d747e34c7",apluswork:"https://media.angi.com/s3fs-public/Professional-painting-wall.jpg?impolicy=leadImage",contractor:"https://thegoodpainter.co.uk/wp-content/uploads/2019/06/1-2.jpg",quality:"https://nimvo.com/wp-content/uploads/2021/12/shutterstock_1054088231-750x444.jpg"}

    return(
        <div className="mainContainer__whyUs">

            <p className="whyUs-title">Why Us ?</p>

            <div className="container-whyUs">
                <div className="whyUs-why">
                    <img src={img.estimate}></img>
                    <div className="why-container"><p>We dont change our stimate</p></div>
                </div>

                <div className="whyUs-why">
                    <img src={img.apluswork}></img>
                    <div className="why-container"><p>Our commitment is an A+ finish</p></div>
                    
                </div>

                <div className="whyUs-why">
                    <img src={img.contractor}></img>
                    <div className="why-container"><p>We are a state licensed contractor</p></div>
                </div>

                <div className="whyUs-why">
                    <img src={img.quality}></img>
                    <div className="why-container"><p>We use the best quality products</p></div>
                </div>
            </div>
        </div>
    )
}

export default WhyUS;
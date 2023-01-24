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
                
                <img className="whyUs-img" src="https://certapro.com/pittsburgh-south/wp-content/uploads/sites/1323/2019/08/certapro-painters-interior-painting.jpg"></img>  

                <div className="whyUs-why-container">
                    <ul className="whyUs-why-list">
                        <div>
                            <li className="whyUs-why-title"><p>Here are some reasons</p></li>
                            <li className="whyUs-why"><p>1. Experience: With years of experience in the painting industry, our team has the skills and knowledge to deliver a high-quality finish on every project.</p></li>
                            <li className="whyUs-why"><p>2. Quality Materials: We only use top-of-the-line paints and materials to ensure a long-lasting and durable finish.</p></li>
                            <li className="whyUs-why"><p>3. Customer Service: Our priority is to provide exceptional customer service and open communication throughout the entire project to ensure complete satisfaction.</p></li>
                            <li className="whyUs-why"><p>4. Competitive Pricing: We offer competitive pricing options without compromising on quality. We're committed to providing affordable and efficient painting services.</p></li>
                        </div>

                    </ul>
                </div>

            </div>
        </div>
    )
}

export default WhyUS;
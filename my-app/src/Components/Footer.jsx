//imports
import React, { useEffect, useRef } from "react";
import '../Styles/Footer.css'
import paint from'../Videos/paintfalling.mp4'
import { AiOutlineInstagram } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';


//imports

function Footer (){

    const setSpeed = (e)=>{
        console.log(e)
        e.target.playbackRate=2;
    }
    
    return(
        <div className="mainContainer__footer">
            <video muted autoPlay loop onCanPlay={setSpeed} className="footer-video" src="https://rr4---sn-a5msenl7.googlevideo.com/videoplayback?expire=1669110886&ei=Bkh8Y73jJMnokAO-gI2IDQ&ip=216.131.106.168&id=o-AJyt9w9YYQ-358B_QuYYXKFEuMu0-46Y8il970IEf9BC&itag=135&aitags=133%2C134%2C135%2C136%2C160%2C242%2C243%2C244%2C247%2C278%2C298%2C299%2C302%2C303%2C308%2C315%2C394%2C395%2C396%2C397%2C398%2C399%2C400%2C401&source=youtube&requiressl=yes&spc=SFxXNryWfUX1-i3Uerm1TYw3wX_EMDs&vprv=1&mime=video%2Fmp4&ns=G3n_3LHbq1ECaqYWfDicGicJ&gir=yes&clen=120784706&dur=3600.999&lmt=1625338421722207&keepalive=yes&fexp=24001373,24007246&c=WEB&txp=5432432&n=JaWFyjjVZ8N4Lw&sparams=expire%2Cei%2Cip%2Cid%2Caitags%2Csource%2Crequiressl%2Cspc%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cdur%2Clmt&sig=AOq0QJ8wRAIgEq9rqJhz6_of9w4XpTYMSSa5LvnXAuUzIAS2nwgOhqQCIHPOEaGkrlZc1dXO36BGtwJQodlSYoGLjIy_zHjUx8DK&rm=sn-q4fesz7l&req_id=1ff1e81b6358a3ee&ipbypass=yes&redirect_counter=2&cm2rm=sn-a5myr7s&cms_redirect=yes&cmsv=e&mh=u9&mip=2603:8000:2600:1007:1c84:19ca:cd42:cbcd&mm=34&mn=sn-a5msenl7&ms=ltu&mt=1669088955&mv=m&mvi=4&pl=52&lsparams=ipbypass,mh,mip,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRgIhAPVV9eGUeLVmjOtt3adZwGh9Sco7rXSfqZWe_UPaJfvSAiEA2lywrKbdnxwq47kMxi88K41hd03Eoyv1WNwEKdhxuyc%3D"></video>
            <ul>
                <li><AiOutlineInstagram className="footer-icon"/></li>
                <li><AiFillLinkedin className="footer-icon"/></li>
                <li></li>
                <li></li>
            </ul>
        </div>
    );
}

export default Footer;
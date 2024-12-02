// styly
import "./homepage-desktop.css";
import "./zakazane-styly.css";

// Komponenty
import "animate.css";
import { motion } from "framer-motion";
import { FaInstagram } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import { TiArrowRight } from "react-icons/ti";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';


function DesktopHomepage() {

  return (  
    <div className="desktop-pozadi-1">


    <div className="desktop-pozadi-2">  {/* pozadi 1 */}

    <video alt="video pozadi" title="video pozadi" id="video-desktop-background-delete-mobile" className="desktop-pozadi-2-video" autoPlay loop muted>
      <source src="./img/backgorund.mp4" type="video/mp4" />
    </video>

      <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
      
      <div id="desktop-navbar-1" className="desktop-navbar-1 animate__animated animate__bounceInDown animate__delay-0.5s">
        <div className="navbar-container-desktop">
            <div className="navbar-left-desktop">
                <a href="#">DOMŮ</a>
                <a href="#sluzby" to="sluzby">SLUŽBY</a>
                <a href="#reference" to="reference">REFERENCE</a>
                <a href="#onas" to="onas">O NÁS</a>
            </div>
            <div className="navbar-right-desktop">
                <a href="#kontakt" to="kontakt">KONTAKT</a>
            </div>
        </div>
    </div>




      <h1 className="desktop-text-homepage-1 animate__animated animate__bounceInDown animate__delay-0.5s">Zvyšte svůj obrat o <text className="desktop-orange">80%</text> pomocí online marketingu!</h1>
      <h3 className="desktop-text-homepage-2 animate__animated animate__bounceInDown animate__delay-0.5s">Vytváříme uživatelsky přívětivé weby, které zvyšují důvěru, zapojují vaše publikum a podporují růst.</h3>



      <a href="#sluzby" to="sluzby">
    <button className="desktop-homepage-vice-info-button animate__animated animate__bounceInDown animate__delay-0.5s">
      <a href="#sluzby" to="sluzby">VÍCE INFORMACÍ</a>

      <div className="desktop-button-1">
        <TiArrowRight className="desktop-ikona-1" />
      </div>

    </button>
    </a>

    

    <div className="desktop-ctverecek-1 animate__animated animate__bounceInUp animate__delay-1s"></div>
    <h5 className="desktop-ctverecek-text-1 animate__animated animate__bounceInUp animate__delay-1s">Nabíráme nové zákazníky</h5>



    </div>


    <div id="sluzby"/>

    <div className="desktop-ctverecek-2"></div>
    <h5 className="desktop-ctverecek-text-2">Informace o nás</h5>



    <h1 className="desktop-informace-o-nas-1">Pomáháme vašemu podnikání růst v digitálním světě</h1>
    <h5 className="desktop-informace-o-nas-2">Poskytujeme komplexní služby v oblasti digitálního marketingu, tvorby webových stránek, SEO, grafického designu a správy sociálních sítí.
    Naše strategie jsou navrženy tak, aby přitáhly nové zákazníky, zvýšily váš online dosah a konverze, a podpořily dlouhodobý růst a úspěch.</h5>

    <a target="blank" id="desktop-kontaktni-fofmular" href="./kontaktni-formular/online-kalendar-terminu.html">
      <button className="desktop-button-info-1">Zvolte si termín</button>
    </a>

    <a target="blank" id="desktop-kontaktni-fofmular" href="./kontaktni-formular/online-kalendar-terminu.html">
      <button className="desktop-button-info-2">Náš on-line kalendář</button>
    </a> 


  {/* <Link to="/contact-form">
    <button className="desktop-button-info-2">Náš on-line kalendář</button>
  </Link> */}
    

    <br></br><br></br><br></br><br></br>
    <br></br><br></br><br></br><br></br>
    <br></br><br></br><br></br><br></br>
    <br></br><br></br><br></br><br></br>
    <br></br><br></br><br></br><br></br>
    <br></br><br></br><br></br><br></br>
    <br></br><br></br><br></br><br></br>
    <br></br><br></br><br></br><br></br>
    <br></br><br></br><br></br><br></br>
    <br></br><br></br><br></br><br></br>
    <br></br><br></br><br></br><br></br>
    <br></br><br></br><br></br>
  



    <h1 id="reference" className="desktop-reference-1">REFERENCE</h1>







    <div className="desktop-pozadi-3">  {/* pozadi 2 */}



    <img alt="reference" src="./img/obrazek1.jpg" className="desktop-reference-1-img"></img>

    <img alt="reference2" src="./img/obrazek2.jpg" className="desktop-reference-2-img"></img>

  <a href="https://naplast-superpatch.cz/" target="blank">
    <img alt="reference3" src="./img/reference2-2.PNG" className="desktop-reference-3-img"></img>
  </a>


    <h3 className="desktop-reference-3-text-1">Super Patch</h3>


    <li className="desktop-reference-3-text-2">WEB DESIGN</li>
    <li className="desktop-reference-3-text-3">BRANDING</li>
    <li className="desktop-reference-3-text-4">MARKETING</li>


    <button className="desktop-button-reference-1">ZOBRAZIT VÍCE</button>

    </div>


    <div id="onas" />

    <div className="desktop-pozadi-4">


      <p className="desktop-text-dalsi-info-1">Specializuje na komplexní digitální strategie, které zahrnují tvorbu moderních <text className="desktop-text-decoration-1"> 
        webových stránek, efektivní <text className="desktop-text-decoration-1">SEO</text> optimalizaci, atraktivní <text className="desktop-text-decoration-1"></text>
        grafický design </text> a strategickou <text className="desktop-text-decoration-1">správu sociálních sítí.</text> <br></br><br></br>
        
        <p className="desktop-lighter-font-weight">
        Pomáháme našim klientům dosahovat úspěchů v online prostředí prostřednictvím cílené propagace a přesného měření výsledků. <br></br>Jsme tu, 
         abychom vaše podnikání posunuli na novou úroveň prostřednictvím inovativních metod.</p></p>
        



      {/* <p className="desktop-reference-text-page-2">Podívejte se na<br></br><text className="desktop-orange">naše reference</text></p>


    <img src="./img/reference-main-1.jpg" className="desktop-reference-page-2-image"></img>

    <img src="./img/reference-main-1.jpg" className="desktop-reference-page-3-image"></img>

    <img src="./img/reference-main-1.jpg" className="desktop-reference-page-4-image"></img> */}





    </div>




      <div className="desktop-footer-pozadi">




      <div id="kontakt" className="desktop-ctverecek-5"></div>
      <h5 className="desktop-ctverecek-text-5">Kontaktní informace</h5>


      <h1 className="desktop-text-homepage-last">Jste připraveni pozvednout svou značku online?</h1>

      <a alt="kalendar" title="online kalendar terminu" target="blank" id="desktop-kontaktni-fofmular" href="./kontaktni-formular/online-kalendar-terminu.html">
        <button className="desktop-button-footer">Kontaktujte nás</button>
      </a>

        <div className="desktop-carka-kontakt"></div>


        <h5 className="desktop-kontakt-1">Kontaktujte nás</h5>

        <a style={{ textDecoration: 'none' }} href="mailto:cestamarketingem@gmail.com">
          <h5 className="desktop-kontakt-2">cestamarketingem@gmail.com</h5>
        </a>
        {/* <h5 className="desktop-kontakt-3"><b>Webové stránky - Matyáš Hiess: </b><text className="desktop-hover-effect">721 020 161</text></h5> */}
        <h5 className="desktop-kontakt-3"><b>Contact manager - Matěj Houžvička: </b><text className="desktop-hover-effect">777 988 722</text></h5>

        <a href="https://www.instagram.com/socialspecialist_/" target="blank">
          <FaInstagram className="desktop-ikona1-footer" />
        </a>
        <AiFillTikTok className="desktop-ikona2-footer" />
        <FaFacebook className="desktop-ikona3-footer" />
        <FaXTwitter className="desktop-ikona2-footer" />



        <iframe alt="mapa" title="mapa" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2559.9575712924434!2d14.42957839291382!3d50.08708124004748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b9494533bc073%3A0xf0cccde69f030a55!2zSHliZXJuc2vDoSAxMDEyLzMwLCAxMTAgMDAgTm92w6kgTcSbc3Rv!5e0!3m2!1scs!2scz!4v1716807456373!5m2!1scs!2scz" className="desktop-footer-mapa" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

        <div className="desktop-carka-kontakt"></div>


        <p className="desktop-footer-last">©2023 - 2024 - Webmajstr s.r.o., Chráněno autoskými právy.</p>



      </div>


































   </div>







  );
}

export default DesktopHomepage;



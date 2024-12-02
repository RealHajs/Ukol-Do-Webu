import "./homepage.css";

// Komponenty
import Menu from "./menu/menu";

// Knihovny
import "animate.css";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import Typewriter from 'react-typewriter-effect';
import { Link } from 'react-router-dom';



function Mobile() {
  return (
    <div>

    <div className="social-specialist-mobile-pozadi-1">
    
    

    <br></br>
    <Menu/>

    <img alt="logo" className="social-specialist-img-logo-1 animate__animated animate__fadeInLeft" src="./img/logo.png"></img>

    <br></br><br></br>

    <h3 className="social-specialist-main-text-1 animate__animated animate__fadeInLeft">Social Specialist</h3>
    
    <h3 className="social-specialist-main-text-2">
      <Typewriter
        textStyle={{ fontSize: '45px', color: '#00000', display: 'block' }}
        startDelay={600}
        cursorColor="white"
        multiText={[
          "Specialisté ve svém oboru!"
        ]}
        multiTextDelay={2000}
        typeSpeed={150}
        deleteSpeed={150}
        loop={Infinity}
      />
    </h3>

    <div className="social-specialist-podtrzeni-1 animate__animated animate__fadeInLeft"></div>
    <div className="social-specialist-podtrzeni-2 animate__animated animate__fadeInLeft"></div>

    <a href="#sluzby" to="sluzby">
      <button href="#sluzby" className="sdaddadd animate__animated animate__fadeInLeft"><b className="bezpozadi">SLUŽBY</b></button>
    </a>

    <a href="#kontakt-mobile" to="kontakt-mobile">
      <button className="sdaddadd2 animate__animated animate__fadeInLeft"><b className="bezpozadi2">KONTAKT</b></button>
    </a>

    <h3 className="social-specialist-main-homepage-text-1 animate__animated animate__fadeInLeft">Zvyšte svůj obrat o <text className="social-specialist-main-homepage-text-1-cyan-1">80%</text> pomocí online marketingu!</h3>
    <h3 className="social-specialist-main-homepage-text-2 animate__animated animate__fadeInLeft">Více informací</h3>

    
    <FaInstagram className="social-specialist-mobile-instagram animate__animated animate__fadeInLeft" />
    <FaTiktok className="social-specialist-mobile-tiktok animate__animated animate__fadeInLeft" />
    <FaFacebook className="social-specialist-mobile-tiktok animate__animated animate__fadeInLeft" />

    <h5 className="social-specialist-main-homepage-text-1-cyan">Služby</h5>
    <h3 id="sluzby" className="social-specialist-main-homepage-text-3 animate__animated animate__fadeInLeft">Co tvoříme on-line</h3>
    
    <div className="social-specialist-podtrzeni-3 animate__animated animate__fadeInLeft"></div>


{/*  */}
<br></br><br></br>
{/* <FaPeopleGroup className="ikonka" /> */}
      <p className="social-specialist-main-homepage-text-15 animate__animated animate__fadeInLeft">Správa sociálních sítí</p>
      <p className="social-specialist-main-homepage-text-16 animate__animated animate__fadeInLeft">Efektivní správa sociálních sítí vám přinese větší dosah, aktivní zapojení sledujících a zvýšení prodeje</p>


      <br></br><br></br>
      {/* <h3 className="asdadadadad"><FaCaretRight className="ikonka2" /> Analýza návštěvnosti</h3>
      <h3 className="asdadadadad"><FaCaretRight className="ikonka2" /> Správa příspěvků</h3>
      <h3 className="asdadadadad"><FaCaretRight className="ikonka2" /> Komunikance s klienty</h3>
      <h3 className="asdadadadad2"><FaCaretRight className="ikonka2" /> SEO a propagace</h3> */}

{/*  */}

{/* <div className="social-specialist-podtrzeni-3 animate__animated animate__fadeInLeft"></div> */}

{/*  */}
<br></br><br></br>
{/* <AiOutlineGlobal className="ikonka" /> */}
      <p className="social-specialist-main-homepage-text-15 animate__animated animate__fadeInLeft">Tvorba webových stránek</p>
      <p className="social-specialist-main-homepage-text-16 animate__animated animate__fadeInLeft">Moderní a funkční webové stránky, které zaujmou návštěvníky a zvýší konverze. </p>

      <br></br><br></br>
      {/* <h3 className="asdadadadad"><FaCaretRight className="ikonka2" /> Analýza návštěvnosti</h3>
      <h3 className="asdadadadad"><FaCaretRight className="ikonka2" /> Nejnovější design na míru</h3>
      <h3 className="asdadadadad"><FaCaretRight className="ikonka2" /> Optimalizace</h3>
      <h3 className="asdadadadad2"><FaCaretRight className="ikonka2" /> SEO a propagace</h3> */}
      

{/*  */}

{/* <div className="social-specialist-podtrzeni-3 animate__animated animate__fadeInLeft"></div> */}

<br></br><br></br>
{/* <BsGraphUpArrow className="ikonka" /> */}
      <p className="social-specialist-main-homepage-text-15 animate__animated animate__fadeInLeft">Strategické plánování</p>
      <p className="social-specialist-main-homepage-text-16 animate__animated animate__fadeInLeft">Strategické plánování marketingu vám zajistí cílené kampaně, které maximalizují váš dosah a zisky</p>

      <br></br><br></br>
      {/* <h3 className="asdadadadad"><FaCaretRight className="ikonka2" /> Analýza trhu</h3>
      <h3 className="asdadadadad"><FaCaretRight className="ikonka2" /> Cílené kampaně</h3>
      <h3 className="asdadadadad"><FaCaretRight className="ikonka2" /> Konkurenční analýza</h3>
      <h3 className="asdadadadad2"><FaCaretRight className="ikonka2" /> Branding a identita</h3> */}

<div className="social-specialist-podtrzeni-3 animate__animated animate__fadeInLeft"></div>


{/*  */}        
        <h3 className="social-specialist-main-homepage-text-4 animate__animated animate__fadeInLeft">Více o našich <b>službách</b> se dozvíte</h3>

      <Link to="/sluzby">
        <h3 className="social-specialist-main-homepage-text-5 animate__animated animate__fadeInLeft">KLIKNUTÍM ZDE</h3>
      </Link>
       
      <h3 className="social-specialist-main-homepage-text-6 animate__animated animate__fadeInLeft">Co si o nás myslí naši klienti</h3>
      <div className="social-specialist-podtrzeni-3 animate__animated animate__fadeInLeft"></div>

      <img alt="reference" className="social-specialist-img-reference-1 animate__animated animate__fadeInLeft" src="./img/reference-main-1.jpg"></img>

      <h3 className="social-specialist-main-homepage-text-4 animate__animated animate__fadeInLeft">Více o našich <b>referencích</b> se dozvíte</h3>
      <h3 className="social-specialist-main-homepage-text-5 animate__animated animate__fadeInLeft">KLIKNUTÍM ZDE</h3>


      <h3 className="social-specialist-main-homepage-text-6 animate__animated animate__fadeInLeft">Seznamte se s naším týmem profesionálů</h3>

      <div className="social-specialist-podtrzeni-1 animate__animated animate__fadeInLeft"></div>
      <div className="social-specialist-podtrzeni-2 animate__animated animate__fadeInLeft"></div>


      {/* <img alt="Matej Houzvicka" className="social-specialist-img-matthew animate__animated animate__fadeInLeft" src="./img/matthew.jpg"></img> */}

        {/* <h3 className="social-specialist-main-homepage-text-7 animate__animated animate__fadeInLeft">Marketing a sociální sítě</h3> */}

        {/* <h3 className="social-specialist-main-homepage-text-8 animate__animated animate__fadeInLeft">Matěj Houžvička</h3> */}

      {/* <a title="Matej Houzvicka" href="https://www.instagram.com/matejmatej01" target="blank">
        <FaInstagram className="social-specialist-mobile-instagram animate__animated animate__fadeInLeft" />
      </a> */}
        {/* <FaTiktok className="social-specialist-mobile-tiktok animate__animated animate__fadeInLeft" />
        <FaFacebook className="social-specialist-mobile-tiktok animate__animated animate__fadeInLeft" /> */}

      {/* <a href="mailto:cestamarketingem@gmail.com" target="blank">
        <h3 className="social-specialist-main-homepage-text-9 animate__animated animate__fadeInLeft">cestamarketingem@gmail.com</h3>
      </a> */}


        <img alt="Matyas Hiess" className="social-specialist-img-hajs animate__animated animate__fadeInLeft" src="./img/hajs.jpg"></img>

        <h3 className="social-specialist-main-homepage-text-7 animate__animated animate__fadeInLeft">Web development</h3>

      <h3 className="social-specialist-main-homepage-text-8 animate__animated animate__fadeInLeft">Matyáš Hiess</h3>
      
      <a title="Matyas Hiess" href="https://www.instagram.com/hajscze" target="blank">
        <FaInstagram className="social-specialist-mobile-instagram animate__animated animate__fadeInLeft" />
      </a>
      
      <FaTiktok className="social-specialist-mobile-tiktok animate__animated animate__fadeInLeft" />
      <FaFacebook className="social-specialist-mobile-tiktok animate__animated animate__fadeInLeft" />

      <a href="mailto:matyashiess@seznam.cz" target="blank">
        <h3 className="social-specialist-main-homepage-text-9 animate__animated animate__fadeInLeft">matyashiess@seznam.cz</h3><br></br>
      </a>

      <h3 className="social-specialist-main-homepage-text-7 animate__animated animate__fadeInLeft">721 020 161</h3>


      <div className="carkasadadsda"></div>

      <h3 id="kontakt-mobile" className="social-specialist-main-homepage-text-6 animate__animated animate__fadeInLeft">Kontaktní informace</h3>
      <h3 className="social-specialist-main-homepage-text-10 animate__animated animate__fadeInLeft">Garantujeme odpovědí do 24 hodin</h3>


      <iframe title="mapa" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2559.9575712924434!2d14.42957839291382!3d50.08708124004748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b9494533bc073%3A0xf0cccde69f030a55!2zSHliZXJuc2vDoSAxMDEyLzMwLCAxMTAgMDAgTm92w6kgTcSbc3Rv!5e0!3m2!1scs!2scz!4v1716807456373!5m2!1scs!2scz" className="social-specialist-main-homepage-mapa animate__animated animate__fadeInLeft" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

      <h3 className="social-specialist-main-homepage-text-11 animate__animated animate__fadeInLeft">Hybernská 1012/30, Nové Město (Praha 1), 110 00 Praha</h3>


      <FaInstagram className="social-specialist-mobile-instagram2 animate__animated animate__fadeInLeft" />
      <FaTiktok className="social-specialist-mobile-tiktok2 animate__animated animate__fadeInLeft" />
      <FaFacebook className="social-specialist-mobile-tiktok2 animate__animated animate__fadeInLeft" />


      <h3 className="social-specialist-main-homepage-text-12 animate__animated animate__fadeInLeft"><b>Telefon :</b> 721 020 161 </h3>

    <a href="mailto:cestamarketingem@gmail.com" target="blank" className="social-specialist-text-decoration-none">
      <h3 className="social-specialist-main-homepage-text-13 animate__animated animate__fadeInLeft"><b>E-mail :</b> <u>matyashiess@seznam.cz</u></h3>
    </a>

      <h3 className="social-specialist-main-homepage-text-14 animate__animated animate__fadeInLeft">©2023-2024 - Webmajstr s.r.o. , Chráněno autorskými právy</h3>


      <br></br><br></br>












      </div>


    </div>
  );
}

export default Mobile;
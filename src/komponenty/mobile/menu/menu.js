import React, { useState, useEffect } from 'react';
import { HiMenuAlt2 } from 'react-icons/hi';
import { CSSTransition } from 'react-transition-group';
import './menu.css';
import { Link } from 'react-router-dom';

function Menu() {
  const [bool, setBool] = useState(0);

  const toggleBool = () => {
    setBool(bool === 0 ? 1 : 0);
  };

  useEffect(() => {
    document.body.style.overflow = bool === 1 ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [bool]);


  return (
    <div>
      <HiMenuAlt2 className="ikona animate__animated animate__fadeInLeft" onClick={toggleBool} />

      <CSSTransition
        in={bool === 1}
        timeout={500}
        classNames="fade"
        unmountOnExit
      >
        <div className="inside">
          <div className="links">
            <Link className="social-specialist-mobile-cyan" to="/">Domů</Link>
            <Link to="/sluzby">Služby</Link>
            <Link to="/reference">Reference</Link>
            <Link to="/onas">O nás</Link>
            <Link to="/kontakt">Kontakt</Link>
          </div>
        </div>
      </CSSTransition>
    </div>
  );
}

export default Menu;

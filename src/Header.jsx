import React, { useState }from 'react';
import './styles/header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCartShopping, faBars } from '@fortawesome/free-solid-svg-icons';
import logo from './assets/homeinn_logo.png';

function Header(){

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }
    return (
      <div className='content header'>

        <div className='header-logo'>
            <a href="#"><img src={logo} alt="HomeInn Logo" className='logo'/> <p>HomeInn</p></a>
        </div>

            <div className='header-choice'>

                <div className={`header-links ${menuOpen ? 'mobile-visible' : ''}`}>
                  <button onClick={() => scrollToSection("home")}>Home</button>
                  <button onClick={() => scrollToSection("about")}>About us</button>
                  <button onClick={() => scrollToSection("trending")}>Trending</button>
                  <button onClick={() => scrollToSection("catalog")}>Catalog</button>
                </div>

              <div className='mobile-select'>

                <div className='header-select'>
                    <a href="#"><FontAwesomeIcon icon={faUser} /></a>
                    <a href="#"><FontAwesomeIcon icon={faCartShopping} /></a>
                </div>

                <div className="menu-toggle" onClick={toggleMenu}>
                  <FontAwesomeIcon icon={faBars} id='burger'/>
                </div>

              </div>

            </div>

      </div>

    )

}

export default Header

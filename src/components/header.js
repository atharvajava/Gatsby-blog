import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import icon from "../images/icon.png"
import {useEffect, useState } from "react"
import IdentityModal from "react-netlify-identity-widget"



const Header = ({ siteTitle }) => {

  const [dialog, setDialog] = useState(false)
  useEffect(()=>{
    const $navbarBurgers = Array.prototype.slice.call(
      document.querySelectorAll(".navbar-burger"),
      0
    );
    if ($navbarBurgers.length > 0) {
      // Add a click event on each of them
      $navbarBurgers.forEach(el => {
        el.addEventListener("click", () => {
          // Get the target from the "data-target" attribute
          const target = el.dataset.target;
          const $target = document.getElementById(target);
  
          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          el.classList.toggle("is-active");
          $target.classList.toggle("is-active");
        });
      });
    }
    
  },[])

  return (
    <header>
      <nav className="navbar" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item" href="https://atharvapandey.com">
              <img  alt="A" src={icon} width="40" height="28"/><span className="brand-icon">THARVA PANDEY</span>
            </Link>
            <span role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </span>
          </div>

          <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-end">
          <Link to="/" className="navbar-item button">
            Home
          </Link>

          <Link to="/about"  className="navbar-item button">
            About
            </Link>

          <Link to="/blog" className="navbar-item button">
            Blog
            </Link>

          <Link to="/resume"  className="navbar-item button">
            Resume
            </Link>

          <button onClick={() => setDialog(true)} className="navbar-item button">
            Login
          </button>
          
        </div>
      </div>
  </nav>
  <IdentityModal showDialog={dialog} onCloseDialog={() => setDialog(false)}/>
  </header>
)
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

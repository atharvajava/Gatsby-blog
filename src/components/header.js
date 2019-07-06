import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import icon from "../images/icon.png"
import {useEffect} from "react"



const Header = ({ siteTitle }) => {


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
  <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="https://atharvapandey.com">
          <img  alt="" src={icon} width="40" height="28"/><span className="brand-icon">THARVA PANDEY</span>
        </a>
        <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
    <div className="navbar-end">
      <Link to="/" className="navbar-item button">
        Home
      </Link>

      <Link to="/about"  className="navbar-item button">
        About
        </Link>

      <Link to="/portfolio" className="navbar-item button">
        Portfolio
        </Link>

      <Link to="/blog" className="navbar-item button">
        Blog
        </Link>

      <Link to="/cv"  className="navbar-item button">
        CV
        </Link>

      <Link to="/login" className="navbar-item button">
        Login
      </Link>
      
    </div>
  </div>
  </nav>
)
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

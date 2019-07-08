import React from "react"

const Footer = () => (
    <footer className="footer has-text-centered">
    © {new Date().getFullYear()} Atharva Pandey, Built with
    {` `}
    <a href="https://www.gatsbyjs.org">Gatsby</a>
  </footer>
)

export default Footer;
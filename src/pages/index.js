import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import intro from "../images/intro.png"
import Typed from 'react-typed';


const IndexPage = () => {
 
  return (
  <Layout>
    <SEO title="Home" />
    <p className="is-size-5-mobile has-text-centered">Full Stack Web Developer
    <br/><span className="is-size-7-mobile has-text-centered index-title-description">Have a look at my portfolio and job history.</span></p>
    <img alt="" src={intro}/>
    <p className="is-size-6-mobile has-text-justified">Welcome to Atharva's blog. Get informed, collaborate and discover projects I have worked on through the years!</p><br/>  
    <Typed
      className="is-size-6-mobile has-text-danger"
      strings={[
          'Skills = <b>React</b>',
          'Skills = <b>Python</b>',
          'Skills = <b>Golang</b>',
          'Skills = <b>Java</b>',
          'Skills = <b>NodeJS</b>',
          'Skills = <b>Angular</b>']}
          backDelay={1000}
          loop
          typeSpeed={40}
          backSpeed={50} 
          showCursor
          cursorChar="|" /><br/><br/>
              
    <p className="is-size-6-mobile has-text-justified">Have a look at my work or check out my blogs <b></b> happy exploring <b></b></p>
  </Layout>
)
}
export default IndexPage

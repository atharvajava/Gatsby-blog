import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const CVPage = () => (
  <Layout>
    <SEO title="Resume" />
    <p className="is-size-2 has-text-centered other-page-title">RESUME</p>
    <div className="resume-wrapper" >
     
          <iframe title="Atharva's Resume" src={"resume.pdf"} type="application/pdf" frameBorder="0" width="100%" height="100%" allowFullScreen/>
  
    </div>
  </Layout>
)

export default CVPage

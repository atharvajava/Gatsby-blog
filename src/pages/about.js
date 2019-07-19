import React from "react"

import Layout from "../components/oldlayout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import Img from "gatsby-image";



const AboutPage = ({data}) => (
  <Layout>
    <SEO title="About" />
    
    <div className="columns is-desktop">
      
      <div className="column">
        <p className="is-size-1 has-text-centered is-uppercase other-page-title">ABOUT ME</p><br/><br/>
        <br/>
        <p>
        I am a full stack developer based in Germany. I live in Paderborn.
          I solve complex problems and turn them into reality. Plugging in both
          Front-End and Back-End together.
        </p><br/>

        <p>
        I have done my bachelors from the MATS School of Engineering, India and I am pursuing my masters from the University of Paderborn. 
        I have years of hands on the Industry Experience where I collaborated with amazing developers to build an elegant and effective
         solution for both Back-End and Front-End.
        </p>
        <br/>
        <p>
        I also have a blog. Where I share my knowledge on various technologies,
         I have experience with. Please be sure to check it out if you want to learn something. 
         If you like my blogs you can also donate me as it helps me grow as an individual creator.
        </p>
        <br/>
        <p>Happy Coding !!! </p>

      </div>
      <div className="column">
        <Img className="about-image" fluid={data.image1.childImageSharp.fluid} />
      </div>
    </div>
    <span className="about-line"></span>
    <div className="about-slider">
	<div className="slide-track">
		<div className="slide">
      <Img className="about-skill-logo" fluid={data.sql.childImageSharp.fluid} height="100" width="250" alt=""/>
		</div>
		<div className="slide">
      <Img className="about-skill-logo" fluid={data.mongo.childImageSharp.fluid} height="100" width="250" alt=""/>
		</div>
		<div className="slide">
      <Img className="about-skill-logo" fluid={data.vue.childImageSharp.fluid} height="100" width="250" alt=""/>
		</div>
		<div className="slide">
      <Img className="about-skill-logo" fluid={data.angular.childImageSharp.fluid} height="100" width="250" alt=""/>
		</div>
		<div className="slide">
      <Img className="about-skill-logo" fluid={data.react.childImageSharp.fluid} height="100" width="250" alt=""/>
		</div>
		<div className="slide">
      <Img className="about-skill-logo" fluid={data.golang.childImageSharp.fluid} height="100" width="250" alt=""/>
		</div>
		<div className="slide">
      <Img className="about-skill-logo" fluid={data.python.childImageSharp.fluid} height="100" width="250" alt=""/>
		</div>
		<div className="slide">
      <Img className="about-skill-logo" fluid={data.java.childImageSharp.fluid} height="100" width="250" alt=""/>
		</div>
		<div className="slide">
      <Img className="about-skill-logo" fluid={data.sql.childImageSharp.fluid} height="100" width="250" alt=""/>
		</div>
		<div className="slide">
      <Img className="about-skill-logo" fluid={data.mongo.childImageSharp.fluid} height="100" width="250" alt=""/>
		</div>
		<div className="slide">
      <Img className="about-skill-logo" fluid={data.vue.childImageSharp.fluid} height="100" width="250" alt=""/>
		</div>
		<div className="slide">
      <Img className="about-skill-logo" fluid={data.angular.childImageSharp.fluid} height="100" width="250" alt=""/>
		</div>
		<div className="slide">
      <Img className="about-skill-logo" fluid={data.react.childImageSharp.fluid} height="100" width="250" alt=""/>
		</div>
		<div className="slide">
      <Img className="about-skill-logo" fluid={data.golang.childImageSharp.fluid} height="100" width="250" alt=""/>
		</div>
    <div className="slide">
      <Img className="about-skill-logo" fluid={data.python.childImageSharp.fluid} height="100" width="250" alt=""/>
		</div>
    <div className="slide">
      <Img className="about-skill-logo" fluid={data.java.childImageSharp.fluid} height="100" width="250" alt=""/>
		</div>
	</div>
</div>
  </Layout>
)

export const query = graphql`
  query {
    image1: file(relativePath: { eq: "aboutmebw.png" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    sql: file(relativePath: { eq: "sql.png" }) {
      childImageSharp {
        fluid(maxWidth: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    mongo: file(relativePath: { eq: "mongo.png" }) {
      childImageSharp {
        fluid(maxWidth: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    vue: file(relativePath: { eq: "vue.png" }) {
      childImageSharp {
        fluid(maxWidth: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    react: file(relativePath: { eq: "react.png" }) {
      childImageSharp {
        fluid(maxWidth: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    angular: file(relativePath: { eq: "angular.png" }) {
      childImageSharp {
        fluid(maxWidth: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    golang: file(relativePath: { eq: "golang.png" }) {
      childImageSharp {
        fluid(maxWidth: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    python: file(relativePath: { eq: "python.png" }) {
      childImageSharp {
        fluid(maxWidth: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    java: file(relativePath: { eq: "java.png" }) {
      childImageSharp {
        fluid(maxWidth: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default AboutPage
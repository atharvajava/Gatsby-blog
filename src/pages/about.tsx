import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Navigation from "../components/navigation"
import ParticleRustIcon from "../components/particleRustIcon"

interface Props {
  location: Location
  data: {
    site: {
      siteMetadata: {
        title: string
      }
    }
  }
}

const About = ({ data, location }: Props) => {
  return (
    <React.Fragment>
      <Navigation />
      <div className="grid grid-cols-6">
        <div className="col-start-2 col-span-4">
          <SEO title="About Atharva Pandey" />
          <div className="h-screen flex justify-center items-center">
            <div className="grid grid-cols-2">
              <span>
                <h1 className="text-6xl font-mono">ABOUT ME</h1>
                <p className="text-justify py-6 leading-normal">
                  I have been connected to IT and Computer Science, since my
                  highschool. I consider myself a polyglot and know several
                  programming languages including frontend technologies.
                  <br />
                  <br /> A Problem Solver, Project Owner, Manager and Leader
                  with high attention to details and performance. Flexible to
                  work remotely or in berlin area.
                  <br /> <br /> Interested in music,swimming and I am an anime
                  freak (Partial Otaku). Interested in Blockchain and
                  Distributed Computing Space in general, Project's with great
                  innovation and research to learn new concepts and be part of
                  something ground breaking.
                </p>
              </span>
              <span>
                <ParticleRustIcon />
              </span>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default About

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`

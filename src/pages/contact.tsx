import React from "react"
import { graphql } from "gatsby"

import SEO from "../components/seo"
import Navigation from "../components/navigation"

import ContactForm from "../components/conactform"
import ContactMap from "../components/contactmap"
import { Particles } from "../components/particle"

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
    <Particles>
      <Navigation />
      <div className="grid grid-cols-12">
        <div className="col-start-3 col-span-8">
          <SEO title="About Atharva Pandey" />
          <div className="h-screen flex justify-center items-center">
            <div className="grid grid-cols-2 gap-12">
              <span>
                <header className="text-6xl font-mono">CONTACT ME</header>
                <p className="text-justify py-6 leading-normal">
                  I am interested in innovative projects - especially blockchain
                  related projects. You can also mail me to say howdy or just to
                  ask any other buisness related stuff.
                </p>
                <ContactForm />
              </span>
              <span className="mt-20">
                <ContactMap />
              </span>
            </div>
          </div>
        </div>
      </div>
    </Particles>
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

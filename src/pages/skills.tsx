import React from "react"
import { graphql } from "gatsby"

import SEO from "../components/seo"
import Navigation from "../components/navigation"
import TagsCanvas from "react-tags-canvas"

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
          <SEO title="Skills Atharva Pandey" />
          <div className="h-screen flex justify-center items-center">
            <div className="grid grid-cols-2">
              <span>
                <h1 className="text-6xl font-mono">SKILLSET</h1>
                <p className="text-justify py-6 leading-normal">
                  I consider myself a full-stack developer.Though, I am more
                  experienced with the backend professionally.
                  <br />
                  <br /> Rust, Golang, NodeJS(TypeScript), Python are the
                  languages with strong DataStructure Foundation and Design
                  Pattern, I am familiar with and have worked with on the
                  backend. I am very well familiar with good Software Design
                  principle like SOLID and OOPS. I believe languages are just
                  tools to achieve the greater technological goals. Everyone can
                  learn them but what matters is foundations.
                  <br /> <br /> I also have decent experience on frontend with
                  frameworks like HTML,CSS,Angular,React and Svelte ( with less
                  focus on 3d animation).
                </p>
              </span>
              <span className="absolute -my-52 mx-96">
                <TagsCanvas
                  textColour="black"
                  maxSpeed={0.3}
                  freezeActive
                  shuffleTags
                  shape="sphere"
                  zoom={0.7}
                  noSelect
                  textFont={null}
                  pinchZoom
                  width={1000}
                  height={900}
                  className="relative mx-48 -my-10 font-mono"
                  tags={[
                    { value: "Javascript", weight: 61 },
                    { value: "React", weight: 60 },
                    { value: "HTML5", weight: 60 },
                    { value: "CSS3", weight: 60 },
                    { value: "Rust", weight: 60 },
                    { value: "Git", weight: 60 },
                    { value: "Golang", weight: 60 },
                    { value: "Docker", weight: 60 },
                    { value: "Rest", weight: 60 },
                    { value: "Graphql", weight: 60 },
                    { value: "Kubernetes", weight: 60 },
                    { value: "AWS", weight: 60 },
                    { value: "Lambda", weight: 60 },
                    { value: "Python", weight: 60 },
                    { value: "Flask", weight: 60 },
                    { value: "Actix", weight: 60 },
                    { value: "Fiber", weight: 60 },
                    { value: "Blockchain", weight: 60 },
                    { value: "Web3", weight: 60 },
                    { value: "Crypto", weight: 60 },
                  ]}
                />
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

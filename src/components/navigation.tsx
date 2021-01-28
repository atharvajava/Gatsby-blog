import React, { useState } from "react"
import Image from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import {
  VscHome,
  VscAccount,
  VscQuote,
  VscTerminal,
  VscCallIncoming,
  VscMail,
} from "react-icons/vsc"

import { FaLinkedinIn, FaGithub } from "react-icons/fa"

const Navigation = () => {
  const [showIcon, setShowIcon] = useState("")
  const data = useStaticQuery(graphql`
    query NavQuery {
      logo: file(absolutePath: { regex: "/logo_a.png/" }) {
        childImageSharp {
          fixed(height: 50, width: 50, quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  const logo = data?.logo?.childImageSharp?.fixed
  return (
    <div className="fixed m-2 flex flex-col justify-between h-screen">
      <div className="flex-1 hover:animate-pulse">
        {logo && <Image fixed={logo} alt={`A`} />}
      </div>

      <div className="flex-1 mx-2">
        <div className="grid gap-4">
          <p
            className="h-9"
            onMouseEnter={() => setShowIcon("home")}
            onMouseLeave={() => setShowIcon("")}
          >
            {showIcon == "home" ? "HOME" : <VscHome className="text-4xl" />}
          </p>
          <p
            className="h-9"
            onMouseEnter={() => setShowIcon("about")}
            onMouseLeave={() => setShowIcon("")}
          >
            {showIcon == "about" ? (
              "ABOUT"
            ) : (
              <VscAccount className="text-4xl" />
            )}
          </p>
          <p
            className="h-9"
            onMouseEnter={() => setShowIcon("blog")}
            onMouseLeave={() => setShowIcon("")}
          >
            {showIcon == "blog" ? "BLOG" : <VscQuote className="text-4xl" />}
          </p>
          <p
            className="h-9"
            onMouseEnter={() => setShowIcon("skills")}
            onMouseLeave={() => setShowIcon("")}
          >
            {showIcon == "skills" ? (
              "SKILLS"
            ) : (
              <VscTerminal className="text-4xl" />
            )}
          </p>
          <p
            className="h-9"
            onMouseEnter={() => setShowIcon("contact")}
            onMouseLeave={() => setShowIcon("")}
          >
            {showIcon == "contact" ? (
              "CONTACT"
            ) : (
              <VscCallIncoming className="text-4xl" />
            )}
          </p>
        </div>
      </div>

      <div className="flex-3 my-10 mx-2">
        <div className="grid gap-5">
          <p>
            <FaGithub className="text-4xl hover:text-gray-400" />
          </p>
          <p>
            <FaLinkedinIn className="text-4xl hover:text-gray-400" />
          </p>
          <p>
            <VscMail className="text-4xl hover:text-gray-400" />
          </p>
        </div>
      </div>
    </div>
  )
}

export default Navigation

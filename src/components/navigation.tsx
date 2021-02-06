import React, { useState } from "react"
import Image from "gatsby-image"
import { useStaticQuery, graphql, Link } from "gatsby"
import { VscHome, VscMail } from "react-icons/vsc"
import { BsTextareaT } from "react-icons/bs"
import { IoPersonOutline } from "react-icons/io5"
import { IoIosCodeWorking } from "react-icons/io"
import { RiLinkedinLine } from "react-icons/ri"
import { FiGithub, FiTwitter } from "react-icons/fi"
import { useTransition, animated as a } from "react-spring"
import { useHover } from "react-use-gesture"

const Navigation = () => {
  const [showIcon, setShowIcon] = useState("")

  const bind = useHover(({ hovering, args }) => {
    console.log("working")
    hovering ? setShowIcon(args[0]) : setShowIcon("")
  })

  const transitions = useTransition(showIcon, null, {
    config: { tension: 120, friction: 14 },
    initial: { position: "absolute", opacity: 1 },
    from: {
      position: "absolute",
      opacity: 0,
    },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    unique: true,
  })

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

  const navItems = {
    HOME: <VscHome className="text-4xl" />,
    ABOUT: <IoPersonOutline className="text-4xl" />,
    BLOG: <BsTextareaT className="text-4xl" />,
    SKILLS: <IoIosCodeWorking className="text-4xl" />,
    CONTACT: <VscMail className="text-4xl" />,
  }
  //TODO: This component nav icons are not working properly it has trailing animation
  const logo = data?.logo?.childImageSharp?.fixed
  return (
    <nav className="fixed z-50 m-2 flex flex-col justify-between h-screen">
      <div className="flex-1 hover:animate-pulse">
        {logo && <Image fixed={logo} alt={`A`} />}
      </div>

      <div className="flex-1 mx-2">
        <div className="grid gap-4">
          {Object.entries(navItems).map(([navItem, value], idx) => {
            return (
              <a.div key={idx} className="h-9" {...bind(navItem)}>
                {transitions.map(({ item, key, props }) =>
                  item === navItem ? (
                    <a.div key={key} style={props}>
                      <Link
                        to={item === "HOME" ? "/" : "/" + item.toLowerCase()}
                      >
                        {item}
                      </Link>
                    </a.div>
                  ) : (
                    <a.div key={key} style={props}>
                      {value}
                    </a.div>
                  )
                )}
              </a.div>
            )
          })}
        </div>
      </div>

      <div className="flex-3 my-10 mx-2">
        <div className="grid gap-5">
          <a>
            <FiGithub className="text-4xl hover:text-gray-400" />
          </a>
          <a>
            <RiLinkedinLine className="text-4xl hover:text-gray-400" />
          </a>
          <a>
            <FiTwitter className="text-4xl hover:text-gray-400" />
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navigation

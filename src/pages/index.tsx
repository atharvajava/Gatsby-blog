import React from "react"
import Navigation from "../components/navigation"
import { Particles } from "../components/particle"
import { Link } from "gatsby"
import SEO from "../components/seo"

const Index = () => {
  return (
    <Particles>
      <SEO title="Atharva Pandey, Full Stack Developer Blockchain, Defi" />
      <Navigation />
      <div className="flex flex-wrap content-center justify-center h-screen w-screen">
        <div className="text-center leading-none text-8xl">
          Hola, I'm
          <br />
          <span className="opacity-30 hover:opacity-70 transition-opacity duration-1000 ease-out leading-none">
            Atharva
            <header className="text-xl leading-none">
              Full Stack Developer / Blockchain / Rust Enthusiast
            </header>
          </span>
          <div>
            <Link
              to="/contact"
              className=" uppercase text-xl px-8 py-2 border focus:outline-none border-black text-black max-w-max shadow-sm hover:shadow-lg rounded"
            >
              Contact
            </Link>
            &nbsp;
            <Link
              to="/blog"
              className=" uppercase text-xl px-8 py-2 border focus:outline-none border-black text-black max-w-max shadow-sm hover:shadow-lg rounded"
            >
              Read Blog
            </Link>
          </div>
        </div>
      </div>
    </Particles>
  )
}

export default Index

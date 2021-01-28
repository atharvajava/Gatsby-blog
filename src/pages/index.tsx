import React from "react"
import Navigation from "../components/navigation"
import { Particles } from "../components/particle"

const Index = () => {
  return (
    <Particles>
      <Navigation />
      <div className="flex flex-wrap content-center justify-center h-screen w-screen">
        <p className="text-center leading-none text-8xl">
          Hola, I'm
          <br />
          <span className="opacity-30 hover:opacity-70 transition-opacity duration-1000 ease-out leading-none">
            Atharva
            <p className="text-xl leading-none">
              Full Stack Developer / Blockchain / Rust Enthusiast
            </p>
          </span>
          <div>
            <button className="uppercase text-xl px-8 py-2 border border-black text-black max-w-max shadow-sm hover:shadow-lg rounded">
              Contact
            </button>
            &nbsp;
            <button className="uppercase text-xl px-8 py-2 border border-black text-black max-w-max shadow-sm hover:shadow-lg rounded">
              Read Blog
            </button>
          </div>
        </p>
      </div>
    </Particles>
  )
}

export default Index

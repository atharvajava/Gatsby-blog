import React from "react"
import ReactParticles from "react-tsparticles"
import smalldear from "./smalldear.svg"
import "pathseg"

const ParticleRustIcon = () => {
  return (
    <div className="absolute z-1 h-screen">
      <ReactParticles
        id="tsparticles"
        className="flex justify-center items-center"
        options={{
          fps_limit: 60,
          background: {
            color: {
              value: "#ffffff",
            },
          },
          particles: {
            color: {
              value: "#000000",
            },
            collisions: {
              enable: false,
            },
            number: {
              value: 100,
              density: {
                enable: false,
              },
            },
            links: {
              color: "#000000",
              distance: 100,
              enable: true,
              opacity: 0.5,
            },
            move: {
              enable: true,
              outMode: "bounce",
              random: false,
              speed: 0.1,
              straight: false,
            },
            opacity: {
              anim: {
                enable: true,
                opacity_min: 0.05,
                speed: 1,
                sync: false,
              },
              value: 0.4,
            },
          },
          polygon: {
            enable: true,
            scale: 0.5,
            type: "inline",
            move: {
              radius: 10,
            },
            url: smalldear,
            inline: {
              arrangement: "equidistant",
            },
            draw: {
              enable: true,
              stroke: {
                color: "rgba(255, 255, 255, .2)",
              },
            },
          },
          retina_detect: false,

          interactivity: {
            detectsOn: "canvas",
            events: {
              onClick: {
                enable: true,
                mode: "remove",
              },
              onHover: {
                enable: true,
                mode: ["grab", "bubble"],
              },
              resize: true,
            },
            modes: {
              bubble: {
                duration: 10,
                opacity: 1,
                size: 15,
                distance: 40,
              },
            },
          },
        }}
      />
    </div>
  )
}

export default ParticleRustIcon

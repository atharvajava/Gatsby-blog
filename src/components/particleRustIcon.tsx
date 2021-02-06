import React from "react"
import ReactParticles from "react-tsparticles"
import smalldear from "./smalldear.svg"
import "pathseg"

const ParticleRustIcon = () => {
  return (
    <div className="top-0 bottom-0 left-0 right-0 mx-48  h-full w-full absolute">
      <ReactParticles
        id="tsparticles"
        className="-my-72 py-10 relative"
        options={{
          fps_limit: 60,
          background: {
            opacity: 0,
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
              speed: 1,
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
            scale: 0.55,
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

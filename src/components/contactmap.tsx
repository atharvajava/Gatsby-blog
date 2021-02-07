import React from "react"
import {
  ComposableMap,
  Geographies,
  Geography,
  Annotation,
} from "react-simple-maps"

const geoUrl =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/countries/germany/germany-regions.json"

const ContactMap = () => {
  return (
    <ComposableMap
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        rotate: [-10.0, -51.0, 0],
        scale: 4000,
      }}
    >
      <Geographies
        geography={geoUrl}
        fill="#D6D6DA"
        stroke="#FFFFFF"
        strokeWidth={0.5}
      >
        {({ geographies }) =>
          geographies.map(geo => (
            <Geography
              geography={geo}
              style={{
                default: {
                  strokeWidth: 0.75,
                  outline: "none",
                  transition: "all 250ms",
                },
                hover: {
                  fill: "#adb5bd",
                  stroke: "#000000",
                  strokeWidth: 0.75,
                  outline: "none",
                  transition: "all 250ms",
                },
                pressed: {
                  fill: "#000000",
                  stroke: "#FFFFFF",
                  strokeWidth: 0.75,
                  outline: "none",
                  transition: "all 250ms",
                },
              }}
              key={geo.rsmKey}
            />
          ))
        }
      </Geographies>

      <Annotation
        subject={[13.405, 52.52]}
        dx={-90}
        dy={-30}
        connectorProps={{
          stroke: "#000000",
          strokeWidth: 0.8,
          strokeLinecap: "round",
        }}
      >
        <text x="-8" textAnchor="end" alignmentBaseline="middle" fill="#000">
          {"Berlin, Germany"}
        </text>
      </Annotation>
    </ComposableMap>
  )
}

export default ContactMap

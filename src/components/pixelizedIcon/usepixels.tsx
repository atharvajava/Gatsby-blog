// import { useEffect, useState, useMemo } from "react"
// import * as THREE from "three"
// import { CanvasTexture } from "three"

// export const WIDTH = 50
// export const HEIGHT = WIDTH

// const _color = new THREE.Color()

// function useImage(url) {
//   const [imageData, setImageData] = useState<any>([])
//   const [columns, setColumns] = useState<any>(1)
//   const [rows, setRows] = useState<any>(1)

//   useEffect(() => {
//     const img = new Image()
//     img.crossOrigin = "Anonymous"
//     img.src = url

//     img.onload = function () {
//       const canvas = new Canz
//       const ctx = canvas.getContext("2d")

//       canvas.width = WIDTH
//       canvas.height = HEIGHT
//       ctx.drawImage(
//         img,
//         0,
//         0,
//         img.width,
//         img.height,
//         0,
//         0,
//         canvas.width,
//         canvas.height
//       )

//       const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)

//       setImageData(imageData.data)
//       setColumns(canvas.width)
//       setRows(canvas.height)
//     }
//   }, [url, setImageData])

//   const [colors, alpha] = useMemo(() => {
//     const color = new Float32Array((imageData.length * 3) / 4)
//     console.log(color)
//     const alpha = []

//     for (let i = 0, j = 0; i < imageData.length; i += 4, j += 1) {
//       _color.set(
//         `rgb( ${imageData[i]} , ${imageData[i + 1]} , ${imageData[i + 2]})`
//       )
//       _color.toArray(color, j * 3)
//       alpha.push(imageData[i + 3])
//     }
//     return [color, alpha]
//   }, [imageData])

//   return [!(colors && colors.length > 0), { colors, alpha, columns, rows }]
// }

// export default useImage

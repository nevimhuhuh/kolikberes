"use client"

import { useEffect, useState } from "react"

export default function MouseSpotlight() {
  const [mousePosition, setMousePosition] = useState({ x: -1000, y: -1000 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* Sledovací reflektor pod kurzorem */}
      <div
        className="absolute transition-opacity duration-500 ease-out"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          transform: "translate(-50%, -50%)",
          width: "600px",
          height: "600px",
          background:
            "radial-gradient(circle, rgba(255, 45, 85, 0.18) 0%, rgba(255, 90, 0, 0.08) 35%, rgba(0, 0, 0, 0) 70%)",
          filter: "blur(40px)",
        }}
      />

      {/* Druhé ambientní světlo pro hloubku */}
      <div
        className="absolute transition-all duration-1000 ease-out"
        style={{
          left: `${mousePosition.x * 0.3 + 200}px`,
          top: `${mousePosition.y * 0.3 + 100}px`,
          width: "800px",
          height: "800px",
          background:
            "radial-gradient(circle, rgba(180, 0, 60, 0.12) 0%, rgba(0, 0, 0, 0) 65%)",
          filter: "blur(80px)",
        }}
      />
    </div>
  )
}

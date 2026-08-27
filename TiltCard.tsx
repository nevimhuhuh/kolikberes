"use client"

import React, { useRef, useState } from "react"

interface TiltCardProps {
  children: React.ReactNode
  className?: string
}

export default function TiltCard({ children, className = "" }: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [transform, setTransform] = useState("perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)")
  const [glowPos, setGlowPos] = useState({ x: 50, y: 50, opacity: 0 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const centerX = rect.width / 2
    const centerY = rect.height / 2

    // Výpočet úhlu naklonění
    const rotateX = ((y - centerY) / centerY) * -8
    const rotateY = ((x - centerX) / centerX) * 8

    setTransform(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`)

    // Výpočet pozice neónového odlesku na hraně karty
    const glowX = (x / rect.width) * 100
    const glowY = (y / rect.height) * 100
    setGlowPos({ x: glowX, y: glowY, opacity: 1 })
  }

  const handleMouseLeave = () => {
    setTransform("perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)")
    setGlowPos((prev) => ({ ...prev, opacity: 0 }))
  }

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform,
        transition: "transform 0.15s ease-out, border-color 0.3s ease",
      }}
      className={`relative rounded-2xl border border-white/10 bg-zinc-950/70 p-6 backdrop-blur-xl shadow-2xl overflow-hidden group ${className}`}
    >
      {/* Dynamic Glow Layer */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300"
        style={{
          opacity: glowPos.opacity,
          background: `radial-gradient(400px circle at ${glowPos.x}% ${glowPos.y}%, rgba(255, 50, 80, 0.18), transparent 80%)`,
        }}
      />
      
      {/* Highlight border on hover */}
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl transition-opacity duration-300 border border-red-500/30"
        style={{
          opacity: glowPos.opacity,
        }}
      />

      <div className="relative z-10">{children}</div>
    </div>
  )
}

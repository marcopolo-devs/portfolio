"use client"

import { useState, useEffect } from "react"
import { Sphere, MeshDistortMaterial, Float } from "@react-three/drei"
import Navbar from "@/components/navbar"
import Sidebar from "@/components/sidebar"
import HeroSection from "@/components/sections/hero-section"
import AboutSection from "@/components/sections/about-section"
import ServicesSection from "@/components/sections/services-section"
import FeaturedWorkSection from "@/components/sections/featured-work-section"
import ContactSection from "@/components/sections/contact-section"
import Footer from "@/components/footer"

// 3D Background Component
function AnimatedSphere() {
  return (
    <Float speed={1.4} rotationIntensity={1} floatIntensity={2}>
      <Sphere args={[1, 100, 200]} scale={2.4}>
        <MeshDistortMaterial color="#6366f1" attach="material" distort={0.3} speed={1.5} roughness={0.4} />
      </Sphere>
    </Float>
  )
}

function ParticleField() {
  return (
    <>
      {Array.from({ length: 50 }).map((_, i) => (
        <Float key={i} speed={0.5 + Math.random()} rotationIntensity={0.5} floatIntensity={1}>
          <Sphere
            args={[0.02, 8, 8]}
            position={[(Math.random() - 0.5) * 20, (Math.random() - 0.5) * 20, (Math.random() - 0.5) * 20]}
          >
            <meshBasicMaterial color="#8b5cf6" />
          </Sphere>
        </Float>
      ))}
    </>
  )
}

export default function MarcoPoloDigital() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  // Handle left edge hover for sidebar trigger (desktop only)
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Only trigger on desktop (large screens)
      if (window.innerWidth < 1024) return

      // Trigger sidebar when mouse is within 50px of left edge
      if (e.clientX <= 50 && !isSidebarOpen) {
        setIsSidebarOpen(true)
      }
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [isSidebarOpen])

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Navigation */}
      <Navbar onMenuClick={() => setIsSidebarOpen(true)} isSidebarOpen={isSidebarOpen} />

      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

      {/* Sections */}
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <FeaturedWorkSection />
      <ContactSection />

      {/* Footer */}
      <Footer/>
    </div>
  )
}

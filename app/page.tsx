"use client"

import { useState } from "react"
import { Sphere, MeshDistortMaterial, Float } from "@react-three/drei"
import Navbar from "@/components/navbar"
import Sidebar from "@/components/sidebar"
import HeroSection from "@/components/sections/hero-section"
import AboutSection from "@/components/sections/about-section"
import ServicesSection from "@/components/sections/services-section"
import FeaturedWorkSection from "@/components/sections/featured-work-section"
import ContactSection from "@/components/sections/contact-section"

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
      <footer className="py-12 px-6 border-t border-white/10">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4 md:mb-0">
              MarcoPolo Digital
            </div>
            <p className="text-gray-400">© {new Date().getFullYear()} MarcoPolo Digital. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

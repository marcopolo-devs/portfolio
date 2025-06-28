"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar"
import Sidebar from "@/components/sidebar"
import { Play, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function WorksPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState("All")

  const categories = ["All", "Branding", "Web Development", "Software Development", "Marketing", "UI/UX"]

  const allProjects = [
    {
      title: "TechFlow Rebrand",
      category: "Branding",
      image: "/placeholder.svg?height=300&width=400",
      description: "Complete brand transformation for a leading tech company",
    },
    {
      title: "EcoVision Platform",
      category: "Software Development",
      image: "/placeholder.svg?height=300&width=400",
      description: "Sustainable energy management platform",
    },
    {
      title: "Luxe Fashion Campaign",
      category: "Marketing",
      image: "/placeholder.svg?height=300&width=400",
      description: "Digital marketing campaign for luxury fashion brand",
    },
    {
      title: "FinTech Mobile App",
      category: "UI/UX",
      image: "/placeholder.svg?height=300&width=400",
      description: "User-friendly mobile banking application",
    },
    {
      title: "Restaurant Chain Website",
      category: "Web Development",
      image: "/placeholder.svg?height=300&width=400",
      description: "Multi-location restaurant website with online ordering",
    },
    {
      title: "Healthcare Dashboard",
      category: "Software Development",
      image: "/placeholder.svg?height=300&width=400",
      description: "Patient management system for healthcare providers",
    },
    {
      title: "Startup Brand Identity",
      category: "Branding",
      image: "/placeholder.svg?height=300&width=400",
      description: "Complete brand identity for innovative startup",
    },
    {
      title: "E-commerce Platform",
      category: "Web Development",
      image: "/placeholder.svg?height=300&width=400",
      description: "Custom e-commerce solution with advanced features",
    },
    {
      title: "Social Media Campaign",
      category: "Marketing",
      image: "/placeholder.svg?height=300&width=400",
      description: "Viral social media campaign for product launch",
    },
  ]

  const filteredProjects =
    selectedCategory === "All" ? allProjects : allProjects.filter((project) => project.category === selectedCategory)

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Navigation */}
      <Navbar onMenuClick={() => setIsSidebarOpen(true)} isSidebarOpen={isSidebarOpen} />

      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

      {/* Works Content */}
      <div className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <Link href="/">
              <Button variant="ghost" className="mb-6 text-white hover:text-purple-400 hover:bg-white/10">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Our Work
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our complete portfolio of transformative digital experiences and innovative solutions
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => setSelectedCategory(category)}
                variant={selectedCategory === category ? "default" : "outline"}
                className={`rounded-full px-6 py-2 transition-all ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white"
                    : "bg-white/10 border-white/20 text-white hover:bg-white/20"
                }`}
              >
                {category}
              </Button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="group cursor-pointer"
              >
                <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 overflow-hidden">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Play className="w-12 h-12 text-white" />
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm">
                        {project.category}
                      </span>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
                    <p className="text-gray-300 text-sm">{project.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  )
}

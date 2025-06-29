"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Play, ArrowRight } from "lucide-react"
import Link from "next/link"
import Folder from "../ui/Folder"

export default function FeaturedWorkSection() {
  const featuredProjects = [
    {
      title: "TechFlow Rebrand",
      category: "Branding & Web Design",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "EcoVision Platform",
      category: "Software Development",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Luxe Fashion Campaign",
      category: "Marketing & Design",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "FinTech Mobile App",
      category: "UI/UX & Development",
      image: "/placeholder.svg?height=300&width=400",
    },
  ]

  return (
    <section id="work" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Featured Work
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our portfolio of transformative digital experiences
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
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
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-2 text-white">{project.title}</h3>
                  <p className="text-purple-400">{project.category}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* View All Work Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link href="/works">

              
              <div className="w-full pt-6">
                    <Folder size={1.5} color="#B95FC1" className="custom-folder mx-auto w-fit" />
                  
              </div>
              
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

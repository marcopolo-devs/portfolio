"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Palette, Code, Smartphone, Globe, TrendingUp } from "lucide-react"

export default function ServicesSection() {
  const services = [
    {
      icon: Palette,
      title: "Branding",
      description: "Crafting unique brand identities that resonate with your audience",
    },
    {
      icon: Code,
      title: "Web Development",
      description: "Building responsive, modern websites that drive results",
    },
    {
      icon: Smartphone,
      title: "Software Development",
      description: "Custom software solutions tailored to your business needs",
    },
    {
      icon: Globe,
      title: "Graphic Design",
      description: "Visual storytelling that captures attention and communicates value",
    },
    {
      icon: TrendingUp,
      title: "Marketing Strategy",
      description: "Data-driven strategies that accelerate growth and engagement",
    },
  ]

  return (
    <section id="services" className="py-20 px-6 bg-gradient-to-b from-black to-purple-900/20">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Our Services
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From concept to execution, we offer comprehensive digital solutions that elevate your brand
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.05 }}
              className="group cursor-pointer"
            >
              <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 h-full">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <div className="p-4 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 w-fit group-hover:scale-110 transition-transform">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">{service.title}</h3>
                  <p className="text-gray-300">{service.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

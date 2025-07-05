"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Users, Trophy } from "lucide-react"

export default function AboutSection() {
  // Separate variables for easy editing
  const projectsData = {
    number: "20+",
    title: "Projects Delivered",
    description: "Transforming ideas into digital reality",
    icon: CheckCircle,
  }

  const clientsData = {
    number: "10+",
    title: "Clients Served",
    description: "Trusted by businesses worldwide",
    icon: Users,
  }

  const awardsData = {
    number: "0",
    title: "Awards Won",
    description: "Honored for innovation & excellence",
    icon: Trophy,
  }

  const achievements = [projectsData, clientsData, awardsData]

  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            About MarcoPolo Digital
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We are digital explorers, charting new territories in the realm of creativity and technology. Our mission is
            to guide brands through their digital transformation journey with innovative solutions that captivate,
            engage, and convert.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="mb-6 flex justify-center">
                    <div className="p-4 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 w-fit group-hover:scale-110 transition-transform">
                      <achievement.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-4xl font-bold mb-2 text-white">{achievement.number}</h3>
                  <h4 className="text-xl font-semibold mb-3 text-white">{achievement.title}</h4>
                  <p className="text-gray-300">{achievement.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

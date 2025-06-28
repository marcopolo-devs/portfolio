"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, MapPin, Twitter, Linkedin, Instagram } from "lucide-react"

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Let's Collaborate
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Ready to embark on your digital journey? Get in touch and let's create something extraordinary together.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-white">Send us a message</h3>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <Input
                      placeholder="Your Name"
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                    />
                    <Input
                      placeholder="Your Email"
                      type="email"
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                    />
                  </div>
                  <Input
                    placeholder="Subject"
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                  />
                  <Textarea
                    placeholder="Your Message"
                    rows={5}
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                  />
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6 text-white">Get in touch</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-300">Email</p>
                    <p className="text-white">hello@marcopolodigital.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-300">Location</p>
                    <p className="text-white">San Francisco, CA</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-4 text-white">Follow us</h4>
              <div className="flex space-x-4">
                {[Twitter, Linkedin, Instagram].map((Icon, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-3 rounded-full bg-white/10 hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 transition-all cursor-pointer"
                  >
                    <Icon className="w-5 h-5 text-white" />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

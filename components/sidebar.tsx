"use client"

import { motion, AnimatePresence } from "framer-motion"
import { X, ChevronRight, Youtube, Linkedin, Instagram } from "lucide-react"
import { useRouter, usePathname } from "next/navigation"

interface SidebarProps {
  isOpen: boolean
  onClose: () => void
}

// Custom X (Twitter) icon to match the design
const XIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
)

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const router = useRouter()
  const pathname = usePathname()

  const handleNavigation = (target: string, href: string) => {
    onClose() // Close sidebar first

    if (pathname === "/works") {
      // If on works page, navigate to home page with section
      if (target === "about" || target === "services" || target === "contact") {
        router.push(`/#${target}`)
      } else if (href === "/works") {
        // Stay on works page
        return
      }
    } else {
      // If on home page
      if (href === "/works") {
        router.push("/works")
      } else {
        // Scroll to section
        setTimeout(() => {
          const element = document.getElementById(target)
          if (element) {
            element.scrollIntoView({ behavior: "smooth" })
          }
        }, 300) // Small delay to allow sidebar to close
      }
    }
  }

  const sidebarMainItems = [
    { name: "About", href: "#about", target: "about" },
    { name: "Services", href: "#services", target: "services" },
    { name: "Work", href: "/works", target: "work" },
    { name: "Contact Us", href: "#contact", target: "contact" },
  ]

  const socialLinks = [
    { icon: Youtube, href: "#", label: "YouTube" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: XIcon, href: "#", label: "X" },
  ]

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-40"
            onClick={onClose}
          />

          {/* Sidebar */}
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed left-0 top-0 h-full w-96 bg-white z-50 shadow-2xl"
          >
            <div className="p-8 h-full flex flex-col">
              {/* Header */}
              <div className="flex items-center justify-between mb-12">
                <button onClick={onClose} className="p-2 rounded-xl bg-gray-100 hover:bg-gray-200 transition-colors">
                  <X className="w-5 h-5 text-gray-700" />
                </button>
                <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-xl">M</span>
                </div>
              </div>

              {/* Main Navigation */}
              <div className="space-y-6 flex-1">
                {sidebarMainItems.map((item) => (
                  <motion.button
                    key={item.name}
                    onClick={() => handleNavigation(item.target, item.href)}
                    className="flex items-center justify-between group py-3 w-full text-left"
                    whileHover={{ x: 10 }}
                  >
                    <span className="text-2xl font-medium text-gray-800 group-hover:text-purple-600 transition-colors">
                      {item.name}
                    </span>
                    <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center group-hover:bg-purple-600 transition-colors">
                      <ChevronRight className="w-5 h-5 text-white" />
                    </div>
                  </motion.button>
                ))}
              </div>

              {/* Socials Section */}
              <div className="mt-auto pt-8">
                <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-semibold text-gray-800 uppercase tracking-wider">Socials</h4>
                    <div className="flex items-center space-x-4">
                      {socialLinks.map((social, index) => (
                        <motion.a
                          key={index}
                          href={social.href}
                          className="w-8 h-8 flex items-center justify-center text-gray-600 hover:text-gray-900 transition-colors"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          aria-label={social.label}
                        >
                          <social.icon className="w-5 h-5" />
                        </motion.a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

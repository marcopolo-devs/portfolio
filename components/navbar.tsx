"use client"

import { useState, useEffect } from "react"
import { motion, useScroll, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Menu, ChevronRight } from "lucide-react"
import { useRouter, usePathname } from "next/navigation"

interface NavbarProps {
  onMenuClick: () => void
  isSidebarOpen: boolean
}

export default function Navbar({ onMenuClick, isSidebarOpen }: NavbarProps) {
  const [isHidden, setIsHidden] = useState(false)
  const [scrollDirection, setScrollDirection] = useState("up")
  const [lastScrollY, setLastScrollY] = useState(0)

  const router = useRouter()
  const pathname = usePathname()
  const { scrollY } = useScroll()

  // Handle scroll behavior
  useEffect(() => {
    const unsubscribe = scrollY.onChange((latest) => {
      const direction = latest > lastScrollY ? "down" : "up"
      setScrollDirection(direction)
      setLastScrollY(latest)

      // Hide navbar when scrolling down past 100px
      if (latest > 100 && direction === "down") {
        setIsHidden(true)
      } else if (direction === "up") {
        setIsHidden(false)
      }

      // Keep navbar expanded when at top of page
      if (latest <= 100) {
        setIsHidden(false)
      }
    })
    return unsubscribe
  }, [scrollY, lastScrollY])

  // Navigation handlers
  const handleNavigation = (target: string) => {
    if (pathname === "/works") {
      // If on works page, navigate to home page with section
      if (target === "about" || target === "services") {
        router.push(`/#${target}`)
      } else if (target === "work") {
        // Stay on works page
        return
      }
    } else {
      // If on home page, scroll to section
      if (target === "work") {
        router.push("/works")
      } else {
        const element = document.getElementById(target)
        if (element) {
          element.scrollIntoView({ behavior: "smooth" })
        }
      }
    }
  }

  const handleLogoClick = () => {
    if (pathname !== "/") {
      router.push("/")
    } else {
      // If already on home page, scroll to top
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  const handleContactClick = () => {
    if (pathname === "/works") {
      router.push("/#contact")
    } else {
      const element = document.getElementById("contact")
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    }
  }

  return (
    <>
      {/* Desktop Navbar - Only visible on lg screens and up */}
      <AnimatePresence>
        {!isSidebarOpen && !isHidden && (
          <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            exit={{ y: -100 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed top-6 left-6 right-6 z-50 hidden lg:block"
          >
            <motion.div className="bg-white/10 backdrop-blur-xl rounded-full border border-white/20 shadow-2xl relative overflow-hidden">
              <div className="px-8 py-4 flex items-center justify-between">
                {/* Left Section - Logo */}
                <motion.button
                  onClick={handleLogoClick}
                  className="flex items-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center cursor-pointer">
                    <span className="text-white font-bold text-xl">M</span>
                  </div>
                </motion.button>

                {/* Center Section - Navigation Items */}
                <div className="flex items-center space-x-8">
                  <button
                    onClick={() => handleNavigation("about")}
                    className="relative text-white/90 hover:text-white transition-colors font-medium whitespace-nowrap hover:scale-105 transform group"
                  >
                    About
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-full transition-all duration-300 ease-out"></span>
                  </button>
                  <button
                    onClick={() => handleNavigation("services")}
                    className="relative text-white/90 hover:text-white transition-colors font-medium whitespace-nowrap hover:scale-105 transform group"
                  >
                    Services
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-full transition-all duration-300 ease-out"></span>
                  </button>
                  <button
                    onClick={() => handleNavigation("work")}
                    className="relative text-white/90 hover:text-white transition-colors font-medium whitespace-nowrap hover:scale-105 transform group"
                  >
                    Work
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-full transition-all duration-300 ease-out"></span>
                  </button>
                </div>

                {/* Right Section - Contact Button */}
                <div className="flex items-center">
                  <Button
                    onClick={handleContactClick}
                    className="bg-white/20 hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 text-white border border-white/30 hover:border-transparent rounded-full px-6 py-2 font-medium backdrop-blur-sm transition-all hover:scale-105 duration-300"
                  >
                    Contact
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Mobile Sidebar Button - Only visible on screens smaller than lg */}
      <AnimatePresence>
        {!isSidebarOpen && !isHidden && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            onClick={onMenuClick}
            className="fixed top-6 left-6 z-50 lg:hidden p-4 rounded-xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl hover:bg-white/20 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Menu className="w-6 h-6 text-white" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  )
}

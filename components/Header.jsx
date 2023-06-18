"use client"

import Menu from "@/components/MenuSidebar"
import ThemeButton from "@/components/ThemeButton"
import { useEffect, useState } from "react"
import { Link } from "react-scroll/modules"

const Header = () => {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  return (
    <header className="container mx-auto relative sticky top-0 z-50 ">
      <div className="flex items-center justify-between bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-red-300 to-indigo-300 mb-4">
        <a className="p-2" href="/">
          DINWEBDEV
        </a>
        <div className="hidden sm:block">
          <div className="flex items-center gap-4">
            <Link
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              className="cursor-pointer"
            >
              Home
            </Link>
            <Link
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              className="cursor-pointer"
            >
              Projects
            </Link>
            <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              className="cursor-pointer"
            >
              Contact
            </Link>
            <div>Hire Me</div>
          </div>
        </div>
        <div className="flex items-center justify-center mr-[10px] sm:mr-0">
          <div>{mounted && <ThemeButton />}</div>
        </div>
      </div>
      <div className="sm:hidden absolute right-0">
        <Menu />
      </div>
    </header>
  )
}

export default Header

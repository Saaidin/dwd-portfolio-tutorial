"use client"

import { useState } from "react"
import { FaBars, FaTimes } from "react-icons/fa"

const navlinks = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "Projects",
    link: "/",
  },
  {
    title: "Contact",
    link: "/",
  },
  {
    title: "Hire Me",
    link: "/",
  },
]

const MenuSidebar = () => {
  const [open, setOpen] = useState(false)

  const handleMenu = () => {
    setOpen((prev) => !prev)
  }

  return (
    <div className=" relative">
      {/* hamburger button */}
      <div className="absolute right-0 -top-[50px]">
        <div className="-mr-2 flex">
          <button
            type="button"
            onClick={handleMenu}
            className="inline-flex items-center justify-center p-2 rounded-md dark:text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
          >
            <span className="sr-only">Open Main Menu</span>
            {open === true ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open ? (
        <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-800 w-full">
          {navlinks.map((link, index) => (
            <a
              key={index}
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              href={link.link}
            >
              {link.title}
            </a>
          ))}
        </div>
      ) : null}
    </div>
  )
}

export default MenuSidebar

"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [categoryMenuOpen, setCategoryMenuOpen] = useState(false)
  const pathname = usePathname()

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
    if (categoryMenuOpen) setCategoryMenuOpen(false)
  }

  const toggleCategoryMenu = () => {
    setCategoryMenuOpen(!categoryMenuOpen)
    if (mobileMenuOpen) setMobileMenuOpen(false)
  }

  return (
    <>
      <div className="flex items-center justify-between sticky top-0 bg-white px-3 py-3 shadow-md z-50">
        <div className="flex items-center space-x-2">
          <Link href="/" className="flex items-center">
            <p className="text-2xl md:text-6xl font-bold text-blue-600 mt-2">Skymart</p>
            <Image
              src="/k_20250105_180112_0000.png"
              alt="Logo Skymart"
              width={40}
              height={40}
              className="logo rounded-lg"
            />
          </Link>
        </div>
        <div className="flex items-center gap-x-5">
          <div className="relative">
            <button
              id="category-toggle"
              className="px-2 md:px-6 h-12 bg-blue-500 md:text-3xl text-white rounded hover:bg-blue-600 transition"
              onClick={toggleCategoryMenu}
            >
              Kategori
            </button>
            {categoryMenuOpen && (
              <div className="absolute bg-white shadow-lg rounded mt-2 overflow-x-hidden">
                <Link href="#" className="block px-4 py-2 text-gray-700 hover:bg-blue-100">
                  Topi
                </Link>
                <Link href="#" className="block px-4 py-2 text-gray-700 hover:bg-blue-100">
                  Kacamata
                </Link>
                <Link href="#" className="block px-4 py-2 text-gray-700 hover:bg-blue-100">
                  Celana
                </Link>
                <Link href="#" className="block px-4 py-2 text-gray-700 hover:bg-blue-100">
                  Sepatu
                </Link>
              </div>
            )}
          </div>
          <div className="hidden lg:flex items-center gap-x-5 text-xl">
            <Link
              href="/"
              className={`text-gray-700 hover:text-blue-500 font-medium transition ${pathname === "/" ? "text-blue-500" : ""}`}
            >
              Home
            </Link>
            <Link href="#" className="text-gray-700 hover:text-blue-500 font-medium transition">
              About
            </Link>
            <Link
              href="/cart"
              className={`text-gray-700 hover:text-blue-500 font-medium transition ${pathname === "/cart" ? "text-blue-500" : ""}`}
            >
              Cart
            </Link>
          </div>
          <div className="lg:hidden">
            <button id="menu-toggle" className="text-gray-700 focus:outline-none" onClick={toggleMobileMenu}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <nav
          id="mobile-menu"
          className="flex sticky top-16 flex-col p-4 lg:hidden z-50 backdrop-blur-md bg-white/30 border border-gray-200 rounded-lg shadow-md"
        >
          <Link
            href="/"
            className={`text-gray-700 hover:text-blue-500 font-medium transition py-2 ${pathname === "/" ? "text-blue-500" : ""}`}
          >
            Home
          </Link>
          <Link href="#" className="text-gray-700 hover:text-blue-500 font-medium transition py-2">
            About
          </Link>
          <Link
            href="/cart"
            className={`text-gray-700 hover:text-blue-500 font-medium transition py-2 ${pathname === "/cart" ? "text-blue-500" : ""}`}
          >
            Cart
          </Link>
        </nav>
      )}
    </>
  )
}


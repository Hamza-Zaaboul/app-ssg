'use client'

import { useState } from 'react'
import Link from 'next/link'

export function ClientNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 font-bold text-xl text-gray-900">
            Logo
          </Link>

          {/* Navigation desktop */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              <Link href="#hero" className="text-gray-700 hover:text-gray-900 transition-colors">
                Accueil
              </Link>
              <Link href="#gallery" className="text-gray-700 hover:text-gray-900 transition-colors">
                Galerie
              </Link>
    
            </div>
          </div>

          {/* Menu mobile */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-gray-900 focus:outline-none focus:text-gray-900"
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                      d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>

        {/* Menu mobile dropdown */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
              <Link href="#hero" className="block px-3 py-2 text-gray-700 hover:text-gray-900">
                Accueil
              </Link>
              <Link href="#gallery" className="block px-3 py-2 text-gray-700 hover:text-gray-900">
                Galerie
              </Link>
              <Link href="/contact" className="block px-3 py-2 text-gray-700 hover:text-gray-900">
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

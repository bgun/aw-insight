import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const isActive = (path) => {
    return location.pathname === path
  }

  return (
    <nav className="bg-white shadow-md border-b border-gray-200">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-3">
            <img
              src="/images/afterwork-logo.png"
              alt="Afterwork"
              className="h-10 w-auto"
            />
            <span className="text-xl sm:text-2xl font-bold text-gray-900">
              Afterwork
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8 h-full">
            <Link
              to="/"
              className={`text-gray-700 hover:text-[#4e7dee] transition-colors font-medium h-full flex items-center ${
                isActive('/') ? 'border-b-[6px] border-[#4e7dee] text-[#4e7dee]' : ''
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`text-gray-700 hover:text-[#4e7dee] transition-colors font-medium h-full flex items-center ${
                isActive('/about') ? 'border-b-[6px] border-[#4e7dee] text-[#4e7dee]' : ''
              }`}
            >
              Our Mission
            </Link>
            <Link
              to="/research"
              className={`text-gray-700 hover:text-[#4e7dee] transition-colors font-medium h-full flex items-center ${
                isActive('/research') ? 'border-b-[6px] border-[#4e7dee] text-[#4e7dee]' : ''
              }`}
            >
              Research
            </Link>
            <Link
              to="/get-involved"
              className={`text-gray-700 hover:text-[#4e7dee] transition-colors font-medium h-full flex items-center ${
                isActive('/get-involved') ? 'border-b-[6px] border-[#4e7dee] text-[#4e7dee]' : ''
              }`}
            >
              Get Involved
            </Link>
            <Link
              to="/subscribe"
              className={`text-gray-700 hover:text-[#4e7dee] transition-colors font-medium h-full flex items-center ${
                isActive('/subscribe') ? 'border-b-[6px] border-[#4e7dee] text-[#4e7dee]' : ''
              }`}
            >
              Subscribe
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Navigation Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-3">
              <Link
                to="/"
                onClick={toggleMenu}
                className={`text-gray-700 hover:text-[#4e7dee] hover:bg-gray-50 transition-colors font-medium px-4 py-2 rounded-lg ${
                  isActive('/') ? 'text-[#4e7dee] bg-blue-50 border-l-4 border-[#4e7dee]' : ''
                }`}
              >
                Home
              </Link>
              <Link
                to="/about"
                onClick={toggleMenu}
                className={`text-gray-700 hover:text-[#4e7dee] hover:bg-gray-50 transition-colors font-medium px-4 py-2 rounded-lg ${
                  isActive('/about') ? 'text-[#4e7dee] bg-blue-50 border-l-4 border-[#4e7dee]' : ''
                }`}
              >
                Our Mission
              </Link>
              <Link
                to="/research"
                onClick={toggleMenu}
                className={`text-gray-700 hover:text-[#4e7dee] hover:bg-gray-50 transition-colors font-medium px-4 py-2 rounded-lg ${
                  isActive('/research') ? 'text-[#4e7dee] bg-blue-50 border-l-4 border-[#4e7dee]' : ''
                }`}
              >
                Research
              </Link>
              <Link
                to="/get-involved"
                onClick={toggleMenu}
                className={`text-gray-700 hover:text-[#4e7dee] hover:bg-gray-50 transition-colors font-medium px-4 py-2 rounded-lg ${
                  isActive('/get-involved') ? 'text-[#4e7dee] bg-blue-50 border-l-4 border-[#4e7dee]' : ''
                }`}
              >
                Get Involved
              </Link>
              <Link
                to="/subscribe"
                onClick={toggleMenu}
                className={`text-gray-700 hover:text-[#4e7dee] hover:bg-gray-50 transition-colors font-medium px-4 py-2 rounded-lg ${
                  isActive('/subscribe') ? 'text-[#4e7dee] bg-blue-50 border-l-4 border-[#4e7dee]' : ''
                }`}
              >
                Subscribe
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
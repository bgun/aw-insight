import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="bg-white shadow-md border-b border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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

          <div className="flex items-center space-x-4 sm:space-x-8">
            <Link
              to="/"
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium text-sm sm:text-base"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium text-sm sm:text-base"
            >
              About
            </Link>
            <Link
              to="/research"
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium text-sm sm:text-base"
            >
              Research
            </Link>
            <Link
              to="/subscribe"
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium text-sm sm:text-base"
            >
              Subscribe
            </Link>
            <Link
              to="/contact"
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium text-sm sm:text-base"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
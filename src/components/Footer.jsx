import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-auto">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Brand and description */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <img
                src="/images/afterwork-logo.png"
                alt="Afterwork"
                className="h-10 w-auto"
              />
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Afterwork
              </h3>
            </div>
            <p className="text-gray-400 text-sm sm:text-base max-w-md">
              Test your knowledge with our interactive quizzes and assessments.
            </p>
          </div>

          {/* Navigation links */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-base sm:text-lg">Navigation</h4>
            <div className="grid grid-cols-2 gap-3">
              <Link
                to="/"
                className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base"
              >
                About
              </Link>
              <Link
                to="/research"
                className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base"
              >
                Research
              </Link>
              <Link
                to="/get-involved"
                className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base"
              >
                Get Involved
              </Link>
              <Link
                to="/subscribe"
                className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base"
              >
                Subscribe
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 sm:pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs sm:text-sm">
            © {new Date().getFullYear()} Afterwork. All rights reserved.
          </p>
          <div className="flex gap-4 sm:gap-6">
            <Link
              to="/terms"
              className="text-gray-500 hover:text-gray-300 transition-colors text-xs sm:text-sm"
            >
              Terms of Service
            </Link>
            <Link
              to="/privacy"
              className="text-gray-500 hover:text-gray-300 transition-colors text-xs sm:text-sm"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
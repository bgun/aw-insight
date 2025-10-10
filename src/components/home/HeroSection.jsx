import { Link } from 'react-router-dom'

function HeroSection() {
  return (
    <section className="w-full bg-gray-50">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 leading-tight">
            Improve Your Mental Health using Introspective Tools
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 mb-8 leading-relaxed">
            Discover insights about yourself through our thoughtfully designed assessments.
            Take the first step toward greater self-awareness and well-being.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#assessments"
              className="inline-block bg-[#4e7dee] hover:bg-[#3d69d1] text-white font-bold py-4 px-8 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl text-base sm:text-lg"
            >
              Explore Assessments
            </a>
            <Link
              to="/about"
              className="inline-block bg-white hover:bg-gray-50 text-gray-700 font-semibold py-4 px-8 rounded-xl border-2 border-gray-300 hover:border-gray-400 transition-all duration-200 text-base sm:text-lg"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection

import { Link } from 'react-router-dom'

function HeroSection() {
  return (
    <section className="w-full relative overflow-hidden min-h-[500px] sm:min-h-[600px] bg-[#1a472a]" >
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 min-w-full min-h-full w-auto h-auto object-cover sm:scale-100 scale-[1.4]"
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          minWidth: '100%',
          minHeight: '100%',
          width: 'auto',
          height: 'auto'
        }}
      >
        <source src="/images/forest-canopy.mp4" type="video/mp4" />
      </video>

      {/* Black OverVlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-15 z-[1]"></div>

      {/* Content */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl mb-6 text-white leading-tight">
            Transforming <span className="text-amber-300">What's Now</span><br />into <span className="text-amber-300">What's Next</span>.
          </h1>
          <p className="text-lg sm:text-xl text-white mt-12 mb-4 leading-relaxed">
            Insightful tools for managing life's big transitions.
          </p>
          <p className="text-lg sm:text-xl text-white mb-12 leading-relaxed">
            Navigate new challenges and discover your hidden strengths.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/get-involved"
              className="inline-block bg-[#4e7deedd] hover:bg-[#3d69d1] text-white font-bold py-4 px-8 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl text-base sm:text-lg"
            >
              Get Involved
            </Link>
            <a
              href="#assessments"
              className="inline-block bg-[#ffffffdd] hover:bg-gray-50 text-gray-700 font-semibold py-4 px-8 rounded-full transition-all duration-200 text-base sm:text-lg"
            >
              Tools and Courses
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection

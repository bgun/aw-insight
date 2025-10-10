import { Link } from 'react-router-dom'

function HeroSection() {
  return (
    <section className="w-full relative overflow-hidden min-h-[500px] sm:min-h-[600px]">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 min-w-full min-h-full w-auto h-auto object-cover"
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

      {/* Black Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-15 z-[1]"></div>

      {/* Content */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
            Improve Your Mental Health using Introspective Tools
          </h1>
          <p className="text-lg sm:text-xl text-white mb-8 leading-relaxed">
            Discover insights about yourself through our thoughtfully designed assessments.
            Take the first step toward greater self-awareness and well-being.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#assessments"
              className="inline-block bg-[#4e7deedd] hover:bg-[#3d69d1] text-white font-bold py-4 px-8 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl text-base sm:text-lg"
            >
              Explore Assessments
            </a>
            <Link
              to="/about"
              className="inline-block bg-[#ffffffdd] hover:bg-gray-50 text-gray-700 font-semibold py-4 px-8 rounded-xl transition-all duration-200 text-base sm:text-lg"
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

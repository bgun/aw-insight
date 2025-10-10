import { Link } from 'react-router-dom'

function DoctorQuoteSection() {
  return (
    <section className="w-full bg-white">
        <div className="relative overflow-hidden rounded-2xl">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
              alt="Female doctor"
              className="object-cover object-center w-full h-full opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-purple-500/30" />
          </div>

          {/* Content */}
          <div className="relative z-10 py-12 px-6 sm:px-8 md:px-12">
            <div className="max-w-3xl mx-auto">
              <div className="bg-white rounded-xl shadow-lg p-8 md:p-10">
                <div className="mb-6 flex justify-center">
                  <svg className="h-14 w-14 text-[#4e7dee]/50" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>

                <h2 className="text-2xl md:text-3xl text-center mb-6">
                  The Science of Community
                </h2>

                <blockquote className="text-lg md:text-xl text-center text-gray-600 mb-6">
                  "Our research shows that being part of a community - whether it's a club, group, or social circle - can
                  <span className="font-semibold text-[#4e7dee]"> extend your lifespan by up to seven years</span>.
                  That's more significant than the benefits of quitting smoking."
                </blockquote>

                <div className="flex flex-col items-center">
                  <p className="font-semibold">Dr. Emma Richardson, Ph.D</p>
                  <p className="text-sm text-gray-600 my-4 text-center">
                    Institute for Social Health Research. Based on a 10-year longitudinal study of over 12,000 participants across diverse
                    demographics, communities, and engagement levels.
                  </p>
                
                  <Link
                    to="/research"
                    className="inline-block bg-[#4e7dee] hover:bg-[#3d69d1] text-white font-bold py-4 px-8 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl text-base sm:text-lg"
                  >
                    View More Afterwork Research 
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>
  )
}

export default DoctorQuoteSection

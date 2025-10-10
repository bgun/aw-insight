import { Link } from 'react-router-dom'

function SubscribeSection() {
  return (
    <section className="w-full bg-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 sm:p-12 lg:p-16 text-center border border-blue-100">
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-blue-100 rounded-full mb-6">
              <svg className="w-8 h-8 sm:w-10 sm:h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-800">
              Stay Updated
            </h2>
            <p className="text-lg sm:text-xl text-gray-700 mb-8 leading-relaxed">
              Don't miss out on new quizzes and assessments. Subscribe to our newsletter
              and be the first to know when we release new content.
            </p>
            <Link
              to="/subscribe"
              className="inline-block bg-[#4e7dee] hover:bg-[#3d69d1] text-white font-bold py-4 px-8 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl text-base sm:text-lg"
            >
              Subscribe Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SubscribeSection

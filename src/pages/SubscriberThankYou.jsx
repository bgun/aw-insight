import { Link } from 'react-router-dom'

function SubscriberThankYou() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 lg:p-12 border border-gray-100">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 bg-green-100 rounded-full mb-6">
            <svg className="w-12 h-12 sm:w-14 sm:h-14 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
            Thank You for Subscribing!
          </h1>

          <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
            You've successfully subscribed to our newsletter. We'll keep you updated with new quizzes, assessments, and educational content to help you navigate this exciting phase of life.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="bg-[#4e7dee] hover:bg-[#3d69d1] text-white font-bold py-3 px-8 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Explore Assessments
            </Link>
            <Link
              to="/resources"
              className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold py-3 px-8 rounded-full transition-all duration-200 border border-gray-300"
            >
              Explore Resources
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SubscriberThankYou

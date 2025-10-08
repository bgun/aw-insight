import { Link } from 'react-router-dom'

function AssessmentList({ assessments }) {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid gap-4 sm:gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        {assessments.map((assessment, index) => (
          <Link
            key={assessment.slug || index}
            to={`/${assessment.slug}`}
            className="group bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-blue-200 transform hover:-translate-y-1 block flex flex-col"
          >
            {assessment.image && (
              <div className="w-full h-48 overflow-hidden">
                <img
                  src={assessment.image}
                  alt={assessment.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            )}
            <div className="p-5 sm:p-6 lg:p-8 flex-1">
              <div className="flex items-start justify-between mb-3">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors line-clamp-2">
                  {assessment.title}
                </h2>
                <div className="flex-shrink-0 ml-2">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400 group-hover:text-blue-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>

              <p className="text-gray-600 mb-5 text-sm sm:text-base line-clamp-3">
                {assessment.description}
              </p>

              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <div className="flex items-center gap-2 text-gray-500">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span className="text-xs sm:text-sm font-medium">
                    {assessment.questions?.length || 0} {assessment.questions?.length === 1 ? 'question' : 'questions'}
                  </span>
                </div>
                <span className="bg-gradient-to-r from-blue-500 to-blue-600 group-hover:from-blue-600 group-hover:to-blue-700 text-white px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg transition-all duration-200 text-sm sm:text-base font-semibold shadow-sm group-hover:shadow-md">
                  Start Quiz
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {assessments.length === 0 && (
        <div className="text-center py-12 sm:py-16">
          <svg className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          <p className="text-lg sm:text-xl text-gray-500 font-medium">No assessments available</p>
          <p className="text-sm text-gray-400 mt-2">Check back later for new quizzes</p>
        </div>
      )}
    </div>
  )
}

export default AssessmentList
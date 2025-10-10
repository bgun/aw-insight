import { Link } from 'react-router-dom'

function ResearchSection() {
  return (
    <section className="w-full bg-gray-50">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-purple-100 rounded-full mb-6">
            <svg className="w-8 h-8 sm:w-10 sm:h-10 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-800">
            Explore Our Research
          </h2>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            Dive deeper into the science and psychology behind our assessments.
            Read articles and research on topics related to mental health and self-discovery.
          </p>
          <Link
            to="/research"
            className="inline-block bg-[#4e7dee] hover:bg-[#3d69d1] text-white font-bold py-4 px-8 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl text-base sm:text-lg"
          >
            View Research Articles
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ResearchSection

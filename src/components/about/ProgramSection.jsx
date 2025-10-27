import { Link } from 'react-router-dom'

function MissionSection() {
  return (
    <section className="w-full bg-indigo-100">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex flex-col items-center text-center gap-4">
              <div className="flex-shrink-0 w-20 h-20 bg-emerald-500 rounded-full flex items-center justify-center">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <p className="text-gray-700 text-base sm:text-lg font-semibold">
                Free Research-Backed Tools and Assessments
              </p>
            </div>
          </div>

          <Link
            to="/subscribe"
            className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm hover:shadow-md hover:border-amber-500 transition-all"
          >
            <div className="flex flex-col items-center text-center gap-4">
              <div className="flex-shrink-0 w-20 h-20 bg-amber-500 rounded-full flex items-center justify-center">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <p className="text-gray-700 text-base sm:text-lg font-semibold">
                The Afterwork Newsletter
              </p>
            </div>
          </Link>

          <Link
            to="/research"
            className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm hover:shadow-md hover:border-purple-500 transition-all"
          >
            <div className="flex flex-col items-center text-center gap-4">
              <div className="flex-shrink-0 w-20 h-20 bg-purple-500 rounded-full flex items-center justify-center">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <p className="text-gray-700 text-base sm:text-lg font-semibold">
                Our Research Library
              </p>
            </div>
          </Link>

          <a
            href="https://www.youtube.com/@TheLifeAfterworkChannel/shorts"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm hover:shadow-md hover:border-rose-500 transition-all"
          >
            <div className="flex flex-col items-center text-center gap-4">
              <div className="flex-shrink-0 w-20 h-20 bg-rose-500 rounded-full flex items-center justify-center">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </div>
              <p className="text-gray-700 text-base sm:text-lg font-semibold">
                Life Afterwork YouTube Channel
              </p>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}

export default MissionSection

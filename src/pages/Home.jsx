import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import AssessmentList from '../components/AssessmentList'

function Home() {
  const [assessments, setAssessments] = useState([])

  useEffect(() => {
    // Load all assessments from the assessments folder
    const loadAssessments = async () => {
      try {
        // Import all JSON files from assessments folder
        const assessmentModules = import.meta.glob('../../assessments/*.json')
        const loadedAssessments = []

        for (const path in assessmentModules) {
          const module = await assessmentModules[path]()
          loadedAssessments.push(module.default)
        }

        setAssessments(loadedAssessments)
      } catch (error) {
        console.error('Error loading assessments:', error)
      }
    }

    loadAssessments()
  }, [])

  return (
    <div className="space-y-16 sm:space-y-20 lg:space-y-24">
      {/* Hero Section */}
      <section className="text-center max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 leading-tight">
          Improve Your Mental Health with Our Introspective Tools
        </h1>
        <p className="text-lg sm:text-xl text-gray-700 mb-8 leading-relaxed">
          Discover insights about yourself through our thoughtfully designed assessments.
          Take the first step toward greater self-awareness and well-being.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#assessments"
            className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl text-base sm:text-lg"
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
      </section>

      {/* Assessments Section */}
      <section id="assessments">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-800">
            Our Assessments
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose from our collection of interactive quizzes designed to help you learn and grow.
          </p>
        </div>
        <AssessmentList assessments={assessments} />
      </section>

      {/* Subscribe Section */}
      <section className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 sm:p-12 lg:p-16 text-center border border-blue-100">
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
            className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl text-base sm:text-lg"
          >
            Subscribe Now
          </Link>
        </div>
      </section>

      {/* Research Section */}
      <section className="text-center max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-12 border border-gray-100">
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
            className="inline-block bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl text-base sm:text-lg"
          >
            View Research Articles
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home
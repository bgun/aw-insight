import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Quiz from '../components/Quiz'

function AssessmentPage() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const [assessment, setAssessment] = useState(null)
  const [loading, setLoading] = useState(true)
  const [notFound, setNotFound] = useState(false)

  useEffect(() => {
    const loadAssessment = async () => {
      try {
        setLoading(true)
        setNotFound(false)

        // Load all assessments and find the one matching the slug
        const assessmentModules = import.meta.glob('../../assessments/*.json')

        for (const path in assessmentModules) {
          const module = await assessmentModules[path]()
          if (module.default.slug === slug) {
            setAssessment(module.default)
            setLoading(false)
            return
          }
        }

        // If we get here, assessment wasn't found
        setNotFound(true)
        setLoading(false)
      } catch (error) {
        console.error('Error loading assessment:', error)
        setNotFound(true)
        setLoading(false)
      }
    }

    loadAssessment()
  }, [slug])

  const handleBack = () => {
    navigate('/')
  }

  if (loading) {
    return (
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-8 text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mb-4"></div>
          <p className="text-gray-600">Loading assessment...</p>
        </div>
      </div>
    )
  }

  if (notFound) {
    return (
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-8 text-center">
          <svg className="w-16 h-16 mx-auto mb-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Assessment Not Found</h2>
          <p className="text-gray-600 mb-6">
            We couldn't find an assessment with the slug "{slug}"
          </p>
          <button
            onClick={handleBack}
            className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
          >
            Back to Assessments
          </button>
        </div>
      </div>
    )
  }

  return <Quiz assessment={assessment} onBack={handleBack} />
}

export default AssessmentPage
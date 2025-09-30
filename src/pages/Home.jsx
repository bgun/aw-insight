import { useState, useEffect } from 'react'
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

  return <AssessmentList assessments={assessments} />
}

export default Home
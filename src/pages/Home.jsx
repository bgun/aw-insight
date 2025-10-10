import { useState, useEffect } from 'react'
import HeroSection from '../components/home/HeroSection'
import AssessmentsSection from '../components/home/AssessmentsSection'
import SubscribeSection from '../components/home/SubscribeSection'
import DoctorQuoteSection from '../components/home/DoctorQuoteSection'

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
    <div>
      <HeroSection />
      <AssessmentsSection assessments={assessments} />
      <DoctorQuoteSection />
      <SubscribeSection />
    </div>
  )
}

export default Home

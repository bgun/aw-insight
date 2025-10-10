import AssessmentList from '../AssessmentList'

function AssessmentsSection({ assessments }) {
  return (
    <section id="assessments" className="w-full bg-indigo-100">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-800">
            Our Assessments
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose from our collection of interactive quizzes designed to help you learn and grow.
          </p>
        </div>
        <AssessmentList assessments={assessments} />
      </div>
    </section>
  )
}

export default AssessmentsSection

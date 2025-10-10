import SubscribeComponent from '../components/SubscribeComponent'

function Subscribe() {
  return (
    <div className="max-w-4xl mx-auto my-16">
      <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 lg:p-12 border border-gray-100">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
          Subscribe to Our Newsletter
        </h1>

        <div className="prose max-w-none mb-8">
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
            Stay updated with new quizzes, assessments, and educational content.
            Subscribe to our newsletter and never miss out!
          </p>
        </div>

        <SubscribeComponent />
      </div>
    </div>
  )
}

export default Subscribe

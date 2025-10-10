import SubscribeComponent from '../SubscribeComponent'

function SubscribeSection() {
  return (
    <section className="w-full bg-gray-50">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 sm:p-12 lg:p-16 border border-blue-100">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl text-center mb-4 text-gray-800">
              Stay Updated
            </h2>
            <p className="text-lg sm:text-xl text-gray-700 mb-8 leading-relaxed text-center">
              Don't miss out on new quizzes and assessments. Subscribe to our newsletter
              and be the first to know when we release new content.
            </p>
            <SubscribeComponent />
          </div>
        </div>
      </div>
    </section>
  )
}

export default SubscribeSection

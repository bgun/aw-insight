import { Link } from 'react-router-dom'

function SupportSection() {
  return (
    <section className="w-full bg-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-900">How You Can Support Us</h2>
          <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6">
              Help us reach more people navigating life transitions:
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-[#4e7dee]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <Link to="/subscribe" className="text-[#4e7dee] hover:underline font-medium">
                  Subscribe to our newsletter
                </Link>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-[#4e7dee]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <a
                  href="https://www.youtube.com/@TheLifeAfterworkChannel/shorts"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#4e7dee] hover:underline font-medium"
                >
                  Subscribe to our YouTube channel
                </a>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-[#4e7dee]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <Link to="/get-involved" className="text-[#4e7dee] hover:underline font-medium">
                  Share your feedback and get involved
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SupportSection

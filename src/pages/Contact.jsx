function Contact() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 lg:p-12 border border-gray-100">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
          Contact Us
        </h1>

        <div className="prose max-w-none mb-8">
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6">
            We'd love to hear from you! Whether you have questions, feedback, or suggestions
            for new quizzes, feel free to reach out.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-6 border border-blue-100">
            <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Email
            </h2>
            <p className="text-gray-700">
              <a href="mailto:info@assessmentcenter.com" className="text-blue-600 hover:text-blue-700 transition-colors">
                info@assessmentcenter.com
              </a>
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-6 border border-blue-100">
            <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
              </svg>
              Support
            </h2>
            <p className="text-gray-700">
              For technical support, please email us with details about your issue.
            </p>
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-3">Business Hours</h2>
          <p className="text-gray-700">
            Monday - Friday: 9:00 AM - 5:00 PM EST<br />
            We typically respond within 24-48 hours.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Contact
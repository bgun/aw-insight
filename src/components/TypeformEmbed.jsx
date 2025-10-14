import { useEffect } from 'react'

function TypeformEmbed({ assessment, onBack }) {
  useEffect(() => {
    // Load Typeform embed script
    const script = document.createElement('script')
    script.src = '//embed.typeform.com/next/embed.js'
    script.async = true
    document.body.appendChild(script)

    return () => {
      // Cleanup script on unmount
      if (document.body.contains(script)) {
        document.body.removeChild(script)
      }
    }
  }, [])

  return (
    <div className="max-w-6xl mx-auto">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
        {assessment.image && (
          <div className="w-full h-72 overflow-hidden">
            <img
              src={assessment.image}
              alt={assessment.title}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        <div className="p-6 sm:p-8 lg:p-10">
          <div
            data-tf-live={assessment.typeform_id}
            style={{ minHeight: '600px' }}
          ></div>
        </div>
      </div>
    </div>
  )
}

export default TypeformEmbed

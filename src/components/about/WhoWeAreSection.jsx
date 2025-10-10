function WhoWeAreSection() {
  return (
    <section className="w-full bg-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-gray-900 text-center">
          Our Mission
        </h1>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">Who We Are</h2>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4">
            Afterwork helps people in midlife and beyond navigate life transitions with confidence and clarity.
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 text-base sm:text-lg ml-4">
            <li>We provide free, research-backed tools for self-discovery and personal growth</li>
            <li>We focus on purpose, identity, belonging, and mental health during life transitions</li>
            <li>We believe this stage of life holds immense potential for growth and fulfillment</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default WhoWeAreSection

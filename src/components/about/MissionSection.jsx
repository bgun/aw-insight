function WhoWeAreSection() {
  return (
    <section className="w-full bg-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="flex-1">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              The Afterwork Mission
            </h1>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4">
              Afterwork helps people in midlife and beyond navigate life transitions with confidence and clarity.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 text-base sm:text-lg ml-4">
              <li>We provide free, research-backed tools for self-discovery and personal growth</li>
              <li>We identify and curate in-person experiences that help people connect with others and build local community</li>
              <li>We focus on purpose, identity, belonging, and mental health during life transitions</li>
              <li>We believe this stage of life holds immense potential for growth and fulfillment</li>
            </ul>
          </div>
          <div className="flex-shrink-0">
            <img
              src="/images/cave-light.jpg"
              alt="Cave with light"
              className="w-[400px] h-[400px] object-cover rounded-4xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhoWeAreSection

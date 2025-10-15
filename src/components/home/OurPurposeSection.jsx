function OurPurposeSection() {
  const purposes = [
    {
      title: "Loneliness Epidemic",
      image: "/images/gse-harvard-loneliness.png",
      description: "Addressing the growing crisis of social isolation in modern society"
    },
    {
      title: "Career Burnout",
      image: "/images/purpose-burnout.jpg",
      description: "Supporting professionals through work-related stress and exhaustion"
    },
    {
      title: "Life Transitions",
      image: "/images/purpose-transitions.jpg",
      description: "Navigating major life changes with confidence and clarity"
    },
    {
      title: "Community Experiences",
      image: "/images/purpose-community.jpg",
      description: "Building meaningful connections and shared experiences"
    }
  ]

  return (
    <section className="w-full relative bg-white -mt-8 -mb-8 py-16 sm:py-20 lg:py-24" style={{
      clipPath: 'ellipse(100% 100% at 50% 50%)'
    }}>
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-2xl text-center mb-12 text-gray-800">
          Afterwork is committed to solutions for:
        </h2>

        <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 sm:p-12 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {purposes.map((purpose, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="relative h-48">
                  <img
                    src={purpose.image}
                    alt={purpose.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white"></div>
                </div>
                <div className="p-6 -mt-8 relative z-10">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    {purpose.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {purpose.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurPurposeSection

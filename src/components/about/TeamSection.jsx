function TeamSection() {
  const team = [
    {
      name: "Marvin Weinman",
      image: "/images/whoweare-MarvinWeinman.jpg"
    },
    {
      name: "Clark Gaither, MD, FAACP",
      image: "/images/whoweare-ClarkGaither.jpg"
    },
    {
      name: "Benjamin Gundersen",
      image: "/images/whoweare-BenGundersen.jpg"
    }
  ]

  return (
    <section className="w-full bg-gray-50">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center">
          Who We Are
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div key={index} className="relative group">
              <div className="relative overflow-hidden rounded-xl shadow-lg aspect-[3/4]">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                {/* Name Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white text-xl sm:text-2xl font-bold">
                    {member.name}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TeamSection

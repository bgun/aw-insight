function Research() {
  const articles = [
    {
      title: "A lifetime of social ties adds up to healthy aging",
      description: "Cornell University research explores how maintaining social connections throughout life contributes to healthier aging outcomes.",
      url: "https://news.cornell.edu/stories/2025/09/lifetime-social-ties-adds-healthy-aging",
      source: "Cornell University",
      image: "/images/cornell-logo.png"
    },
    {
      title: "Sense of community and mental health: a cross-sectional analysis from a household survey in Wisconsin",
      description: "In the USA, one in five adults live with a mental illness, and researchers have estimated that nearly half of the population will have a mental illness over the course of their lifetime. Research has shown significant associations between social relationships and mental health outcomes at the individual and population levels.",
      url: "https://fmch.bmj.com/content/11/2/e001971",
      source: "BMJ Family Medicine and Community Health",
      image: "/images/bmj-journal.png"
    },
    {
      title: "What Happens to Your Brain When You Retire?",
      description: "It's challenging to stay mentally sharp and healthy through the major transition. Careful planning is key.",
      url: "https://www.nytimes.com/2025/03/26/well/mind/retirement-brain-mental-health-tips.html",
      source: "The New York Times",
      image: "/images/new-york-times-logo.png"
    }
  ]

  return (
    <div className="max-w-5xl mx-auto my-16">
      <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
          Research & Articles
        </h1>
        <p className="text-lg sm:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
          Explore curated research and articles on mental health, psychology, and self-improvement.
        </p>
      </div>

      {articles.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article, index) => (
            <a
              key={index}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-blue-200 transform hover:-translate-y-1 flex flex-col"
            >
              {article.image && (
                <div className="w-full h-48 bg-gray-50 flex items-center justify-center p-6">
                  <img
                    src={article.image}
                    alt={article.source || article.title}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
              )}
              <div className="p-6 flex-1">
                <h3 className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors mb-3 line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-gray-600 text-sm mb-3 line-clamp-3">
                  {article.description}
                </p>
                {article.source && (
                  <p className="text-xs text-gray-500 mb-4 font-medium">
                    {article.source}
                  </p>
                )}
                <div className="flex items-center text-blue-600 font-medium text-sm group-hover:text-blue-700">
                  Read More
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-xl shadow-lg p-12 text-center border border-gray-100">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gray-100 rounded-full mb-6">
            <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-3">
            Research Articles Coming Soon
          </h2>
          <p className="text-gray-600 text-lg">
            We're curating a collection of valuable research articles. Check back soon!
          </p>
        </div>
      )}
    </div>
  )
}

export default Research
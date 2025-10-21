import { useState } from 'react'

function Resources() {
  const [activeFilter, setActiveFilter] = useState('All')

  const articles = [
    {
      title: "What is Causing Our Epidemic of Loneliness and How Can We Fix It?",
      description: "U.S. surgeon general Vivek Murthy explained, in a letter that introduced an urgent advisory, that loneliness is far more than \"just a bad feeling\" and represents a major public health risk for both individuals and society. Murthy also pointed out that, although many people grew lonelier during the COVID-19 pandemic, about half of American adults had already reported experiences of loneliness even before the outbreak.",
      url: "https://www.gse.harvard.edu/ideas/usable-knowledge/24/10/what-causing-our-epidemic-loneliness-and-how-can-we-fix-it",
      source: "Harvard Graduate School of Education",
      image: "/images/gse-harvard-loneliness.png",
      category: "Mental Health"
    },
    {
      title: "Fractional Careers: The Future of Work",
      description: "In a world increasingly shaped by automation, remote work, and shifting professional priorities, the idea of a lifelong, linear career is fading fast. For experienced professionals who have built careers climbing the corporate ladder, this change can feel both liberating and daunting.<br /><br />Enter the fractional career - a modern, flexible way of working that lets professionals apply their hard-won expertise across multiple organisations at once. It's a model that values depth, strategic thinking, and human judgment; precisely the traits automation struggles to replicate.",
      url: "https://www.connectd.com/learn/fractional-careers-the-future-of-work",
      source: "ConnectD",
      image: "/images/fractional-connectd.webp",
      category: "Career & Work"
    },
    {
      title: "A lifetime of social ties adds up to healthy aging",
      description: "Lifetime social ties play a crucial role in promoting healthy aging, as revealed in this Cornell University article. Long-lasting relationships, spanning family, friends, and community connections, support physical and mental well-being throughout life.<br /><br />Researchers found that older adults with strong, sustained social networks are more likely to maintain cognitive abilities, experience less loneliness, and develop positive health behaviors.",
      url: "https://news.cornell.edu/stories/2025/09/lifetime-social-ties-adds-healthy-aging",
      source: "Cornell University",
      image: "/images/cornell-logo.png",
      category: "Mental Health"
    },
    {
      title: "Sense of community and mental health: a cross-sectional analysis from a household survey in Wisconsin",
      description: "In the USA, one in five adults live with a mental illness, and researchers have estimated that nearly half of the population will have a mental illness over the course of their lifetime. Research has shown significant associations between social relationships and mental health outcomes at the individual and population levels.",
      url: "https://fmch.bmj.com/content/11/2/e001971",
      source: "BMJ Family Medicine and Community Health",
      image: "/images/bmj-journal.png",
      category: "Mental Health"
    },
    {
      title: "What Happens to Your Brain When You Retire?",
      description: "It's challenging to stay mentally sharp and healthy through the major transition. Careful planning is key.<br /><br />For the millions of Americans who retire each year, stopping work might seem like a well-deserved break. But it can also precipitate big changes in brain health, including an increased risk of cognitive decline and depression.",
      url: "https://www.nytimes.com/2025/03/26/well/mind/retirement-brain-mental-health-tips.html",
      source: "The New York Times",
      image: "/images/new-york-times-logo.png",
      category: "Retirement"
    },
    {
      title: "15 Creative Ways to Maintain Friendships during Life Transitions",
      description: "Maintaining friendships during life changes provides emotional stability and support when you need it most. This article explores practical strategies for staying connected with friends through creative communication methods and understanding the importance of mutual support during transitions.",
      url: "https://margarethamontagu.com/why-maintain-friendships-during-life-transitions/",
      source: "Margaret Hamontagu",
      image: "https://margarethamontagu.com/wp-content/uploads/2024/10/Friends-Leonardo.jpg",
      category: "Tips & Guides"
    },
    {
      title: "8 Tips for Managing Change and Thriving During Life Transitions",
      description: "Dr. Bojana Jankovic Weatherly provides strategies for navigating life changes, emphasizing the importance of being present, maintaining a sense of humor, and practicing self-care during transitions. Drawing from personal experiences and psychological insights, this article offers practical advice for coping with stress and adapting to new circumstances.",
      url: "https://bestselfmedia.com/8-tips-for-thriving-during-life-transitions/",
      source: "BestSelf Media",
      image: "https://bestselfmedia.com/wp-content/uploads/2017/12/erik-eastman-267511.jpg",
      category: "Tips & Guides"
    },
    {
      title: "It's Never Too Late: Changing Careers at Midlife",
      description: "This article encourages people over 40 to pursue career changes, highlighting that it's never too late to learn and reinvent oneself professionally. Drawing from personal experience, the author shares that changing careers can lead to increased happiness, with studies showing 90% of career changers reporting feeling less stressed and more successful.",
      url: "https://www.psychologytoday.com/us/blog/from-both-sides-of-the-couch/202307/its-never-too-late-changing-careers-at-midlife",
      source: "Psychology Today",
      image: "https://cdn2.psychologytoday.com/assets/styles/article_inline_half_caption/public/field_blog_entry_images/2023-07/Screenshot%202023-07-01%20at%207.22.13%20AM.png.jpg?itok=rrUe3YXG",
      category: "Career & Work"
    },
    {
      title: "Social connectedness as a determinant of mental health: A scoping review",
      description: "This comprehensive scoping review examined how social connectedness impacts mental health, finding that low social support and social isolation are consistently associated with increased risks of depression and anxiety across various populations. The research highlighted that social support, particularly from partners and close relationships, can serve as a protective factor against mental health symptoms.",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9560615/",
      source: "PLOS ONE",
      image: "https://cdn.ncbi.nlm.nih.gov/pmc/blobs/b930/9560615/b0cc4b00e1eb/pone.0275004.g001.jpg",
      category: "Mental Health"
    },
    {
      title: "Social isolation and wellbeing in midlife: Initial findings",
      description: "A study examining social isolation in midlife reveals that being out of education and employment is most consistently associated with lower wellbeing, with all social isolation indicators linked to reduced life satisfaction. The research analyzed data from two British cohort studies, exploring how different forms of social isolation impact psychological distress, self-rated health, and life satisfaction.",
      url: "https://whatworkswellbeing.org/blog/social-isolation-and-wellbeing-in-midlife-initial-findings/",
      source: "What Works Centre for Wellbeing",
      image: "https://whatworkswellbeing.org/wp-content/themes/what-works-wellbeing/img/global/logo.svg",
      category: "Mental Health"
    }
  ]

  const categories = ['All', 'Mental Health', 'Career & Work', 'Retirement', 'Tips & Guides']

  const filteredArticles = activeFilter === 'All'
    ? articles
    : articles.filter(article => article.category === activeFilter)

  return (
    <div className="max-w-5xl mx-auto my-16">
      <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
          Resources
        </h1>
        <p className="text-lg sm:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto mb-8">
          Explore curated resources and articles on mental health, psychology, and self-improvement.
        </p>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                activeFilter === category
                  ? 'bg-[#4e7dee] text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {filteredArticles.length > 0 ? (
        <div className="space-y-8">
          {filteredArticles.map((article, index) => (
            <a
              key={index}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-blue-200 transform hover:-translate-y-1 flex flex-col md:flex-row"
            >
              {article.image && (
                <div className="w-full md:w-80 h-64 md:h-auto bg-gray-50 flex items-center justify-center p-8 flex-shrink-0">
                  <img
                    src={article.image}
                    alt={article.source || article.title}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
              )}
              <div className="p-8 flex-1">
                <h3 className="text-2xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors mb-4">
                  {article.title}
                </h3>
                <div
                  className="text-gray-600 text-base mb-4 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: article.description }}
                />
                <div className="flex items-center text-blue-600 font-medium text-base group-hover:text-blue-700">
                  Read More from {article.source}
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

export default Resources
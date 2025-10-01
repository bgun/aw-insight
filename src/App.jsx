import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Research from './pages/Research'
import Subscribe from './pages/Subscribe'
import Contact from './pages/Contact'
import AssessmentPage from './pages/AssessmentPage'

function Layout() {
  const location = useLocation()

  // Check if current path is an assessment (not one of the static pages)
  const staticPages = ['/', '/about', '/research', '/subscribe', '/contact', '/terms', '/privacy']
  const isQuizPage = !staticPages.includes(location.pathname)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex flex-col">
      {!isQuizPage && <Navbar />}

      <main className="flex-grow">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/research" element={<Research />} />
            <Route path="/subscribe" element={<Subscribe />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/:slug" element={<AssessmentPage />} />
          </Routes>
        </div>
      </main>

      {!isQuizPage && <Footer />}
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  )
}

export default App
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import AssessmentPage from './pages/AssessmentPage'

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
          <header className="mb-8 sm:mb-12">
            <Link to="/" className="block">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-2 sm:mb-3 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:from-blue-700 hover:to-purple-700 transition-all cursor-pointer">
                Assessment Center
              </h1>
            </Link>
            <p className="text-center text-gray-600 text-sm sm:text-base">
              Test your knowledge with our interactive quizzes
            </p>
          </header>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:slug" element={<AssessmentPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
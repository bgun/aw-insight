import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Resources from './pages/Resources'
import Subscribe from './pages/Subscribe'
import AssessmentPage from './pages/AssessmentPage'
import SubscriberThankYou from './pages/SubscriberThankYou'
import GetInvolved from './pages/GetInvolved'

function Layout() {
  const location = useLocation()

  // Check if current path is an assessment (not one of the static pages)
  const staticPages = ['/', '/about', '/resources', '/subscribe', '/terms', '/privacy', '/subscriber-thank-you', '/get-involved']
  const isQuizPage = !staticPages.includes(location.pathname)

  return (
    <div className="min-h-screen flex flex-col">
      {!isQuizPage && <Navbar />}

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/subscribe" element={<Subscribe />} />
          <Route path="/subscriber-thank-you" element={<SubscriberThankYou />} />
          <Route path="/get-involved" element={<GetInvolved />} />
          <Route path="/:slug" element={<AssessmentPage />} />
        </Routes>
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
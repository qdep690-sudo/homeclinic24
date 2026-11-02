import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { BookingProvider } from './BookingContext.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import FloatingButtons from './components/FloatingButtons.jsx'
import BookingModal from './components/BookingModal.jsx'

import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import DoctorConsultation from './pages/DoctorConsultation.jsx'
import Physiotherapy from './pages/Physiotherapy.jsx'
import Pricing from './pages/Pricing.jsx'
import Contact from './pages/Contact.jsx'
import BlogList from './pages/BlogList.jsx'
import BlogDetail from './pages/BlogDetail.jsx'

function ScrollTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

export default function App() {
  return (
    <BookingProvider>
      <ScrollTop />

      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/doctor-consultation" element={<DoctorConsultation />} />
          <Route path="/physiotherapy" element={<Physiotherapy />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/blog" element={<BlogList />} />
          <Route path="/blog/:slug" element={<BlogDetail />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
      <FloatingButtons />
      <BookingModal />
    </BookingProvider>
  )
}

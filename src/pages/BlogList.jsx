import { useEffect } from 'react'
import { BLOGS } from '../data/blogs.js'
import BlogCard from '../components/BlogCard.jsx'
import '../blog.css'

export default function BlogList() {
  useEffect(() => {
    document.title = 'HomeClinic | Health & Wellness Blog'
  }, [])

  return (
    <div className="blog-list-page">
      {/* Cuure-inspired Clean Dark Blue Banner: ONLY "HomeClinic", large, bold, white, left-aligned */}
      <section className="blog-hero-banner">
        <div className="container">
          <h1 className="blog-banner-title">HomeClinic</h1>
        </div>
      </section>

      {/* Clean & Minimal Blog Grid: 3 per row desktop, 2 tablet, 1 mobile */}
      <section className="blog-grid-section">
        <div className="container">
          <div className="blog-grid">
            {BLOGS.map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

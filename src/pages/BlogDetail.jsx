import { useEffect } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { BLOGS } from '../data/blogs.js'
import { CONTACT } from '../data.js'
import { useBooking } from '../BookingContext.jsx'
import '../blog.css'

export default function BlogDetail() {
  const { slug } = useParams()
  const { openBooking } = useBooking()

  const blog = BLOGS.find((b) => b.slug === slug)

  useEffect(() => {
    if (blog) {
      const pageTitle = blog.seoTitle || `${blog.title} | HomeClinic 24`
      document.title = pageTitle

      const setMeta = (attr, key, content) => {
        let tag = document.querySelector(`meta[${attr}="${key}"]`)
        if (!tag) {
          tag = document.createElement('meta')
          tag.setAttribute(attr, key)
          document.head.appendChild(tag)
        }
        tag.setAttribute('content', content)
      }

      const canonicalHref = blog.canonicalUrl || `https://www.homeclinic24.com/blog/${blog.slug}`
      let canonTag = document.querySelector('link[rel="canonical"]')
      if (!canonTag) {
        canonTag = document.createElement('link')
        canonTag.setAttribute('rel', 'canonical')
        document.head.appendChild(canonTag)
      }
      canonTag.setAttribute('href', canonicalHref)

      // Primary Meta Tags
      setMeta('name', 'description', blog.metaDescription || blog.shortDescription)
      setMeta('name', 'keywords', [blog.primaryKeyword, ...(blog.secondaryKeywords || [])].join(', '))
      setMeta('name', 'robots', 'index, follow')

      // Open Graph
      setMeta('property', 'og:type', 'article')
      setMeta('property', 'og:title', pageTitle)
      setMeta('property', 'og:description', blog.metaDescription || blog.shortDescription)
      setMeta('property', 'og:url', canonicalHref)
      setMeta('property', 'og:image', `https://www.homeclinic24.com${blog.image}`)
      setMeta('property', 'og:site_name', 'HomeClinic 24')

      // Twitter Cards
      setMeta('name', 'twitter:card', 'summary_large_image')
      setMeta('name', 'twitter:title', pageTitle)
      setMeta('name', 'twitter:description', blog.metaDescription || blog.shortDescription)
      setMeta('name', 'twitter:image', `https://www.homeclinic24.com${blog.image}`)

      // Structured Data (JSON-LD)
      const scriptId = 'blog-schema-jsonld'
      let scriptTag = document.getElementById(scriptId)
      if (!scriptTag) {
        scriptTag = document.createElement('script')
        scriptTag.id = scriptId
        scriptTag.type = 'application/ld+json'
        document.head.appendChild(scriptTag)
      }

      const schemas = [
        // 1. Article / BlogPosting Schema
        {
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          headline: blog.title,
          description: blog.metaDescription,
          image: `https://www.homeclinic24.com${blog.image}`,
          author: {
            '@type': 'Organization',
            name: blog.author || 'HomeClinic Medical Team',
            url: 'https://www.homeclinic24.com',
          },
          publisher: {
            '@type': 'MedicalBusiness',
            name: 'HomeClinic 24',
            url: 'https://www.homeclinic24.com',
            telephone: '+919606668266',
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Mysuru',
              addressRegion: 'Karnataka',
              addressCountry: 'IN',
            },
            logo: {
              '@type': 'ImageObject',
              url: 'https://www.homeclinic24.com/images/logo.png',
            },
          },
          datePublished: '2026-03-15',
          dateModified: '2026-10-31',
          mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': canonicalHref,
          },
        },
        // 2. BreadcrumbList Schema
        {
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Home',
              item: 'https://www.homeclinic24.com/',
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: 'Blog',
              item: 'https://www.homeclinic24.com/blog',
            },
            {
              '@type': 'ListItem',
              position: 3,
              name: blog.title,
              item: canonicalHref,
            },
          ],
        },
        // 3. MedicalBusiness / LocalBusiness Schema
        {
          '@context': 'https://schema.org',
          '@type': 'MedicalBusiness',
          name: 'HomeClinic 24',
          description: 'Doorstep medical and healthcare services in Mysuru, including general physician home visits, nursing care, lab testing, and physiotherapy.',
          url: 'https://www.homeclinic24.com',
          telephone: '+919606668266',
          areaServed: [
            {
              '@type': 'City',
              name: 'Mysuru',
            },
            {
              '@type': 'City',
              name: 'Mysore',
            },
          ],
          medicalSpecialty: 'PrimaryCare',
          priceRange: '₹₹',
        },
      ]

      // 4. FAQPage Schema (if FAQs exist)
      if (blog.faqs && blog.faqs.length > 0) {
        schemas.push({
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: blog.faqs.map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: faq.answer,
            },
          })),
        })
      }

      scriptTag.text = JSON.stringify(schemas)
    }

    return () => {
      const scriptTag = document.getElementById('blog-schema-jsonld')
      if (scriptTag) scriptTag.remove()
    }
  }, [blog])

  if (!blog) {
    return <Navigate to="/blog" replace />
  }

  return (
    <div className="blog-detail-page">
      <div className="container narrow" style={{ paddingTop: '40px', paddingBottom: '80px' }}>
        {/* Breadcrumb Back Link */}
        <Link to="/blog" className="blog-back-link">
          ← Back to Blogs
        </Link>

        {/* Article H1 Heading */}
        <h1 className="blog-article-heading">{blog.title}</h1>

        {/* Cover Image with SEO Alt Text */}
        <div className="blog-detail-cover">
          <img
            src={blog.image}
            alt={blog.altText || blog.title}
            className="blog-detail-img"
            loading="eager"
          />
        </div>

        {/* Article Body */}
        <article className="blog-clean-article">
          <div className="blog-intro-paragraph">
            <p>{blog.content.intro}</p>
          </div>

          {blog.content.sections.map((section, idx) => (
            <section key={idx} className="blog-content-block">
              <h2>{section.heading}</h2>
              {section.body.map((para, pIdx) => {
                if (
                  para.startsWith('•') ||
                  para.startsWith('1.') ||
                  para.startsWith('2.') ||
                  para.startsWith('3.') ||
                  para.startsWith('4.')
                ) {
                  return (
                    <p key={pIdx} className="blog-list-point">
                      {para}
                    </p>
                  )
                }
                return <p key={pIdx}>{para}</p>
              })}
            </section>
          ))}

          {/* Helpful Internal Links Block */}
          {blog.internalLinks && blog.internalLinks.length > 0 && (
            <div className="blog-internal-links-box">
              <h3>Related HomeClinic 24 Services in Mysuru</h3>
              <p>Explore our verified doorstep medical services and related healthcare guides:</p>
              <ul className="blog-internal-links-list">
                {blog.internalLinks.map((link, lIdx) => (
                  <li key={lIdx}>
                    <Link to={link.url}>
                      → {link.text.charAt(0).toUpperCase() + link.text.slice(1)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Frequently Asked Questions (FAQ) Section */}
          {blog.faqs && blog.faqs.length > 0 && (
            <section className="blog-faq-section">
              <h2>Frequently Asked Questions</h2>
              <div className="blog-faq-list">
                {blog.faqs.map((faq, fIdx) => (
                  <div key={fIdx} className="blog-faq-item">
                    <h3>{faq.question}</h3>
                    <p>{faq.answer}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Medical Emergency Disclaimer */}
          <div className="blog-emergency-note">
            <h4>Important Medical Safety Notice</h4>
            <p>
              Home Clinic 24 provides planned doctor consultations, skilled nursing procedures,
              physiotherapy, and diagnostic sample collections at home. Home healthcare is not a
              substitute for emergency medical services. In the event of acute chest discomfort, sudden
              loss of consciousness, severe shortness of breath, or serious trauma, please call emergency
              services or go to the nearest hospital casualty immediately.
            </p>
          </div>

          {/* Home Clinic 24 Booking CTA */}
          <div className="blog-cta-box">
            <h3>Need Healthcare Support at Home in Mysuru?</h3>
            <p>
              Whether you need an experienced general physician home consultation, sterile nursing
              assistance, diagnostic blood sample collection, or personalized physiotherapy, Home Clinic 24
              is here to help.
            </p>
            <div className="btn-row">
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => openBooking()}
              >
                Book Home Visit
              </button>
              <Link to="/contact" className="btn btn-outline">
                Contact Care Team
              </Link>
            </div>
            <p className="blog-contact-subtext">
              Or call our Mysuru coordination desk directly at <strong>{CONTACT.phone}</strong>
            </p>
          </div>

          <div style={{ marginTop: '40px' }}>
            <Link to="/blog" className="blog-back-link">
              ← Back to Blogs
            </Link>
          </div>
        </article>
      </div>
    </div>
  )
}

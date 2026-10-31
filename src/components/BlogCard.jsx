import { Link } from 'react-router-dom'

export default function BlogCard({ blog }) {
  const { slug, title, image, altText } = blog

  return (
    <Link
      to={`/blog/${slug}`}
      className="blog-card"
      aria-label={title}
    >
      <div className="blog-card-media">
        <img
          src={image}
          alt={altText || title}
          className="blog-card-img"
          loading="lazy"
        />
      </div>
      <div className="blog-card-body">
        <h3 className="blog-card-title">{title}</h3>
      </div>
    </Link>
  )
}

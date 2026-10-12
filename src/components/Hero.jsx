import ImageBox from './ImageBox.jsx'
import Icon from './Icon.jsx'
import { CONTACT, WHATSAPP_COMMUNITY } from '../data.js'
import { useBooking } from '../BookingContext.jsx'
export default function Hero({ title, sub, cta, service, image, images, poster, alt, secondary, pills, stats, dark }) {
  const { openBooking } = useBooking()
  return (
    <section className="hero2"><div className="container hero2-grid">
      <div className={'hero2-left fade-up' + (dark ? ' dark' : '')}>
        {secondary && <div className="chips">
          <div className="chip"><span className="star">★</span><div><b>4.9</b><small>Patient Rating</small></div></div>
          <div className="chip"><div className="avs">{['A', 'R', 'S', 'M'].map((x) => <i key={x}>{x}</i>)}</div><div><b>1,000+</b><small>Patients Served</small></div></div>
        </div>}
        <h1>{title}</h1><p className="lead">{sub}</p>
        <div className="btn-row">
          {/* <button className="btn btn-primary" onClick={() => openBooking(service)}>{cta}<span className="dot">→</span></button> */}
          {secondary && <a className="btn btn-wa" href={'https://wa.me/' + CONTACT.whatsappBot.replace(/\D/g, '') + '?text=' + encodeURIComponent('Hi, I would like to book an appointment.')} target="_blank" rel="noreferrer"><Icon name="chat" size={18} />Book via WhatsApp Bot</a>}
          {secondary && <a className="btn btn-blue" href={WHATSAPP_COMMUNITY} target="_blank" rel="noreferrer"><Icon name="chat" size={18} />Join Our Community</a>}
        </div>
        {pills && <div className="hero-pills">{pills.map((t) => <span key={t}>{t}</span>)}</div>}
        {dark && <div className="btn-row">{cta && <button className="btn btn-white" onClick={() => openBooking(service)}>{cta}<span className="dot">→</span></button>}<a className="btn btn-ghost-light" href={'tel:' + CONTACT.phone.replace(/\s/g, '')}>Call Us</a></div>}
        {stats && <div className="hero-stats">{stats.map(([v, l]) => <div key={l}><b>{v}</b><span>{l}</span></div>)}</div>}
        {secondary && <div className="trust-row">{['Trusted Healthcare Professionals', 'Personalized Care', 'Convenient Home Visits'].map((t) => <span key={t}><Icon name="check" size={18} />{t}</span>)}</div>}
      </div>
      {poster ? <div className="hero-poster"><span className="poster-plus" aria-hidden="true">+</span><span className="poster-dots" aria-hidden="true" /><img src={poster} alt={alt} /><span className="poster-badge">Care that comes home</span></div> : images ? <div className="hero-collage">
        {images.map((it, i) => { const [src, pos] = [].concat(it); return <div key={src} className={'collage-tile t' + (i + 1)}><img src={src} alt={alt} style={pos ? { objectPosition: pos } : undefined} /></div> })}
        <div className="collage-badge">Care that comes home</div>
      </div> : <ImageBox src={image} alt={alt} className="hero2-img" />}
    </div></section>
  )
}

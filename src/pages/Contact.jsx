import { useState } from 'react'
import Icon from '../components/Icon.jsx'
import { CONTACT } from '../data.js'
import { useBooking } from '../BookingContext.jsx'
const digits = (v) => v.replace(/\D/g, '')
const BOT_LINK = 'https://wa.me/' + digits(CONTACT.whatsappBot) + '?text=' + encodeURIComponent('Hi, I would like to book an appointment.')
const CARDS = [
  ['phone', 'Call Us', CONTACT.phone, 'tel:+' + digits(CONTACT.phone), 'Tap to call'],
  ['chat', 'WhatsApp', CONTACT.whatsapp, 'https://wa.me/' + digits(CONTACT.whatsapp), 'Chat with us'],
  ['mail', 'Email', CONTACT.email, 'mailto:' + CONTACT.email, 'Write to us'],
  ['pin', 'Location', CONTACT.location, 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(CONTACT.location), 'View on map'],
]
export default function Contact() {
  const [sent, setSent] = useState(false)
  const { openBooking } = useBooking()
  return (
    <section className="section contact-sec"><div className="container">
      <div className="head ct-head"><span className="ct-eyebrow">Contact Us</span><h1 className="h1s">Need Help?</h1><p>We’re happy to answer your questions.</p></div>
      <div className="ct-grid">{CARDS.map(([i, l, v, href, hint, cls]) => <a key={l} className={'ct-card' + (cls ? ' ' + cls : '')} href={href} {...(href.startsWith('http') ? { target: '_blank', rel: 'noreferrer' } : {})}><span className="ct-ic"><Icon name={i} size={26} /></span><span className="ct-txt"><small>{l}</small><b>{v}</b></span><em>{hint} →</em></a>)}</div>
      {/* <div className="ct-band"><div><h3>Prefer to talk to someone?</h3><p>Call us or book a home visit and our team will get back to you.</p></div><div className="btn-row"><a className="btn btn-white" href={'tel:+' + digits(CONTACT.phone)}>Call Now</a><button type="button" className="btn btn-ghost-light" onClick={() => openBooking()}>Book a Home Visit</button></div></div> */}
      <div className="ct-botx">
        <div className="ct-botx-left">
          <span className="ct-botx-tag"><Icon name="chat" size={16} />WhatsApp Booking Bot</span>
          <h3>Book your appointment <em>in a chat</em></h3>
          <p>No calls, no waiting. Message our bot on WhatsApp and schedule your home visit in a few taps.</p>
          <div className="ct-botx-num"><small>Bot number</small><b>{CONTACT.whatsappBot}</b></div>
          <a className="btn btn-white" href={BOT_LINK} target="_blank" rel="noreferrer"><Icon name="chat" size={18} />Start Booking on WhatsApp</a>
        </div>
        <div className="ct-botx-chat" aria-hidden="true">
          <div className="ct-chat-top"><span className="ct-chat-av">HC</span><div><b>Home Clinic 24</b><small>Booking bot · online</small></div></div>
          <div className="ct-chat-body">
            <p className="me">Hi, I would like to book an appointment.</p>
            <p className="bot">Welcome to Home Clinic 24! Let’s get your home visit booked.</p>
            <p className="bot typing"><i /><i /><i /></p>
          </div>
        </div>
      </div>
      <div className="contact">
        {/* <form className="card" onSubmit={(e) => { e.preventDefault(); setSent(true) }}>
          {sent ? <p className="success">Thank you! Your message has been recorded for demonstration purposes.</p> : <>
            <label className="field">Name<input required /></label><label className="field">Phone<input type="tel" required /></label><label className="field">Email<input type="email" /></label><label className="field">Message<textarea rows="4" required /></label>
            <button className="btn btn-primary">Send Message</button></>}
        </form> */}
      </div>
    </div></section>
  )
}

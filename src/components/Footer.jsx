import { Link } from 'react-router-dom'
import { CONTACT } from '../data.js'
export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div><img src="/images/logo.png" alt="Home Clinic 24" className="footer-logo" /><p>Professional healthcare delivered to your doorstep.</p></div>
        <div><h4>Links</h4>{[['/', 'Home'], ['/doctor-consultation', 'Doctor Consultation'], ['/physiotherapy', 'Physiotherapy'], ['/about', 'About Us'], ['/contact', 'Contact']].map(([t, l]) => <Link key={t} to={t}>{l}</Link>)}</div>
        <div><h4>Support</h4><span>{CONTACT.phone}</span><span>{CONTACT.email}</span><a className="pill" href={"https://wa.me/" + CONTACT.whatsapp.replace(/\D/g, "")} target="_blank" rel="noreferrer">WhatsApp chat</a><a className="pill" href={"https://wa.me/" + CONTACT.whatsappBot.replace(/\D/g, "")} target="_blank" rel="noreferrer">Book via WhatsApp Bot</a></div>
      </div>
      <div className="container footer-bottom"><span>© 2026 Home Clinic 24. All Rights Reserved.</span><span><a href="#">Privacy Policy</a> · <a href="#">Terms &amp; Conditions</a></span></div>
      <div className="container footer-bottom" style={{ justifyContent: 'center' }}><span>Made with ❤️ by Linqway Technicks Pvt Ltd</span></div>
    </footer>
  )
}

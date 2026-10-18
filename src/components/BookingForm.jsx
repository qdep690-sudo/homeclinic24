import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { SERVICES, PRICING } from '../data.js'
import { createBookingRequest } from '../api.js'
export default function BookingForm({ initialService, initialPlan, onDone }) {
  const nav = useNavigate()
  const [f, setF] = useState({ name: '', phone: '' })
  const [err, setErr] = useState('')
  const [done, setDone] = useState(false)
  const [busy, setBusy] = useState(false)
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value })
  const svc = SERVICES.find((s) => s.id === initialService)
  const pkg = PRICING.find((p) => p.id === (initialPlan || 'single'))
  const phoneOk = /^\d{10}$/.test(f.phone.replace(/\D/g, '').slice(-10))
  const confirm = async () => {
    if (busy) return
    const name = f.name.trim()
    if (!name || !phoneOk) return setErr('Please enter your full name and a valid 10-digit mobile number.')
    if (!/^[a-zA-Z\s]+$/.test(name)) return setErr('Name can contain only letters and spaces.')
    setErr(''); setBusy(true)
    try {
      const service = svc ? svc.title + (initialService === 'physio' && pkg ? ' – ' + pkg.name : '') : undefined
      await createBookingRequest({ name, phone: f.phone.replace(/\D/g, '').slice(-10), service })
      setDone(true)
    } catch (e) {
      setErr(e.message)
    } finally {
      setBusy(false)
    }
  }

  if (done) return (
    <div className="confirm">
      <div className="tick"><svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12l5 5 9-10" /></svg></div>
      <h2>Booking Request Confirmed</h2><p>Thank you for choosing Home Clinic 24. Our team will call you shortly.</p>
      <div className="summary">{svc && <div><span>Service</span><b>{svc.title}{initialService === 'physio' && pkg ? ' – ' + pkg.name : ''}</b></div>}<div><span>Name</span><b>{f.name}</b></div><div><span>Mobile</span><b>{f.phone}</b></div></div>
      <button className="btn btn-primary" onClick={() => { onDone(); nav('/') }}>Back to Home</button>
    </div>
  )
  return (
    <div>
      <h2>Your Details</h2>
      <div className="form-grid">
        <label className="field">Full Name<input value={f.name} onChange={set('name')} autoComplete="name" /></label>
        <label className="field">Mobile Number<input value={f.phone} onChange={set('phone')} type="tel" inputMode="numeric" autoComplete="tel" maxLength={14} /></label>
      </div>
      {err && <p className="error">{err}</p>}
      <div className="btn-row"><button className="btn btn-primary" onClick={confirm} disabled={busy}>{busy ? 'Booking…' : 'Confirm Booking'}</button></div>
      {/* <p className="note">Demo only: no data is sent anywhere.</p> */}
    </div>
  )
}

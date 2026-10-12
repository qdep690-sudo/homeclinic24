import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { SERVICES, PRICING, SLOTS } from '../data.js'
const TITLES = ['Select Service', 'Patient Details', 'Address', 'Select Date', 'Select Time', 'Booking Summary']
const fmt = (d) => d.toLocaleDateString('en-IN', { weekday: 'short', day: 'numeric', month: 'short' })
export default function BookingForm({ initialService, initialPlan, onDone }) {
  const nav = useNavigate()
  const [step, setStep] = useState(initialService ? 1 : 0)
  const [f, setF] = useState({ service: initialService, plan: initialPlan || 'single', name: '', phone: '', email: '', age: '', gender: '', house: '', street: '', city: 'Mysuru', pin: '', date: '', slot: '' })
  const [err, setErr] = useState('')
  const [id, setId] = useState('')
  const set = (k) => (e) => setF({ ...f, [k]: e.target ? e.target.value : e })
  const days = useMemo(() => Array.from({ length: 14 }, (_, i) => { const d = new Date(); d.setDate(d.getDate() + i + 1); return d }), [])
  const svc = SERVICES.find((s) => s.id === f.service)
  const pkg = PRICING.find((p) => p.id === f.plan)
  const price = f.service === 'physio' ? pkg.price : svc?.price
  const ok = [f.service, f.name && /^\d{10}$/.test(f.phone.replace(/\D/g, '').slice(-10)) && f.age && f.gender, f.house && f.street && f.city && /^\d{6}$/.test(f.pin), f.date, f.slot, true][step]
  const next = () => { if (!ok) return setErr('Please complete the required fields correctly (10-digit phone, 6-digit pincode).'); setErr(''); setStep(step + 1) }
  const confirm = () => { setId('HC24-' + Math.floor(1000 + Math.random() * 9000)); setStep(6) }
  const I = (label, k, props = {}) => <label className="field">{label}<input value={f[k]} onChange={set(k)} {...props} /></label>

  if (step === 6) return (
    <div className="confirm">
      <div className="tick"><svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12l5 5 9-10" /></svg></div>
      <h2>Booking Request Confirmed</h2><p>Thank you for choosing Home Clinic 24.</p>
      <div className="summary"><div><span>Booking ID</span><b>{id}</b></div><div><span>Service</span><b>{svc.title}</b></div><div><span>Date</span><b>{fmt(new Date(f.date))}</b></div><div><span>Time</span><b>{f.slot}</b></div></div>
      <button className="btn btn-primary" onClick={() => { onDone(); nav('/') }}>Back to Home</button>
    </div>
  )
  return (
    <div>
      <div className="progress">{TITLES.map((_, i) => <i key={i} className={i <= step ? 'on' : ''} />)}</div>
      <p className="muted">Step {step + 1} of 6</p><h2>{TITLES[step]}</h2>
      {step === 0 && <div className="choice-grid">{SERVICES.map((s) => <button key={s.id} className={'choice' + (f.service === s.id ? ' sel' : '')} onClick={() => setF({ ...f, service: s.id })}><b>{s.title}</b><span>From ₹{s.price}</span></button>)}</div>}
      {step === 0 && f.service === 'physio' && <label className="field">Package<select value={f.plan} onChange={set('plan')}>{PRICING.map((p) => <option key={p.id} value={p.id}>{p.name} – ₹{p.price}</option>)}</select></label>}
      {step === 1 && <div className="form-grid">{I('Full Name', 'name')}{I('Phone Number', 'phone', { type: 'tel', inputMode: 'numeric' })}{I('Email', 'email', { type: 'email' })}{I('Age', 'age', { type: 'number', min: 0 })}<label className="field">Gender<select value={f.gender} onChange={set('gender')}><option value="">Select</option><option>Female</option><option>Male</option><option>Other</option></select></label></div>}
      {step === 2 && <div className="form-grid">{I('House / Flat Number', 'house')}{I('Street / Area', 'street')}{I('City', 'city')}{I('Pincode', 'pin', { inputMode: 'numeric', maxLength: 6 })}</div>}
      {step === 3 && <div className="dates">{days.map((d) => { const v = d.toISOString().slice(0, 10); return <button key={v} className={'date' + (f.date === v ? ' sel' : '')} onClick={() => setF({ ...f, date: v })}><small>{d.toLocaleDateString('en-IN', { weekday: 'short' })}</small><b>{d.getDate()}</b><small>{d.toLocaleDateString('en-IN', { month: 'short' })}</small></button> })}</div>}
      {step === 4 && <div className="choice-grid three">{SLOTS.map((s) => <button key={s} className={'choice' + (f.slot === s ? ' sel' : '')} onClick={() => setF({ ...f, slot: s })}><b>{s}</b></button>)}</div>}
      {step === 5 && <div className="summary"><div><span>Patient</span><b>{f.name}, {f.age} · {f.gender}</b></div><div><span>Service</span><b>{svc.title}{f.service === 'physio' ? ' – ' + pkg.name : ''}</b></div><div><span>Date</span><b>{fmt(new Date(f.date))}</b></div><div><span>Time</span><b>{f.slot}</b></div><div><span>Address</span><b>{f.house}, {f.street}, {f.city} {f.pin}</b></div><div><span>Estimated Price</span><b>₹{price.toLocaleString('en-IN')}</b></div></div>}
      {err && <p className="error">{err}</p>}
      <div className="btn-row between">
        {step > (initialService ? 1 : 0) ? <button className="btn btn-ghost" onClick={() => { setErr(''); setStep(step - 1) }}>Back</button> : <span />}
        {step < 5 ? <button className="btn btn-primary" onClick={next}>Continue</button> : <button className="btn btn-primary" onClick={confirm}>Confirm Booking</button>}
      </div>
      {/* <p className="note">Demo only: no data is sent anywhere.</p> */}
    </div>
  )
}

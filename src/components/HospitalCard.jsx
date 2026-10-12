import Icon from './Icon.jsx'
const JOURNEY = ['Consult', 'Test', 'Treat', 'Recover']
const HOT = [['shield', 'Diagnostic Support', 'ECG, sugar, BP & lab tests, without a clinic visit'], ['calendar', 'Sample Collection', 'Painless sampling at home, reports shared with you']]
const NURSING = ['IV & IM injections', 'IV fluids / drip', 'Catheter care', 'Wound dressing', 'Nebulization', 'Vitals monitoring', 'Ryle’s tube feeding', 'Stoma & pressure sore care', 'Bedridden patient care']
export default function HospitalCard() {
  return (
    <div className="hosp">
      <div className="hosp-photo">
        <div className="hosp-collage">
          <img className="c1" src="/images/home-clinic.jpg" alt="Home Clinic doctor visiting a patient at home" style={{ objectPosition: '78% 40%' }} />
          <img className="c2" src="/images/consult-family.jpg" alt="Doctor consulting a family at home" style={{ objectPosition: '30% 40%' }} />
          <img className="c3" src="/images/consult-injection.jpg" alt="Injection and treatment at home" style={{ objectPosition: '55% 40%' }} />
        </div>
        <span className="hosp-tag">Complete Hospital at Home</span>
      </div>
      <div className="hosp-body">
        <h3>Why travel to a hospital when the hospital can come to you?</h3>
        <p>We go beyond a home visit. Doctors, nurses, diagnostics and sample collection work together as one team, so every step of your care is handled under your own roof.</p>
        <div className="hosp-journey">{JOURNEY.map((t, i) => <span key={t}><b>{i + 1}</b>{t}</span>)}</div>
        <div className="hosp-nurse"><h4>Home Nursing Services</h4><div>{NURSING.map((t) => <span key={t}><Icon name="check" size={14} />{t}</span>)}</div><span className="tc-tag">* Terms &amp; Conditions Apply</span></div>
        <div className="hosp-hot">{HOT.map(([i, t, x]) => <div key={t}><i><Icon name={i} size={24} /></i><div><b>{t}</b><span>{x}</span></div></div>)}</div>
      </div>
    </div>
  )
}

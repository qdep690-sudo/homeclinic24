import Hero from '../components/Hero.jsx'
import FeatureCard from '../components/FeatureCard.jsx'
import ServiceCard from '../components/ServiceCard.jsx'
import DoctorCard from '../components/DoctorCard.jsx'
import CTASection from '../components/CTASection.jsx'
import { DOCTORS, CONSULT_TYPES } from '../data.js'
const WHYD = [['home', 'Convenient Home Visits'], ['shield', 'Experienced Doctors'], ['heart', 'Personalized Attention'], ['calendar', 'Comfortable Environment']]
export default function DoctorConsultation() {
  return (<>
    <Hero dark pills={['Fever & Infections', 'BP & Sugar Checks', 'Elderly Care', 'Follow-ups']} stats={[['OPD + IP', 'Care at home'], ['4.9★', 'Patient rating'], ['Mysuru', '& nearby areas']]} title="Doctor Consultation at Home" sub="Professional medical consultation from the comfort of your home." cta="Book a Home Consultation" service="doctor" images={[['/images/consult-bp.jpg', '62% 40%'], ['/images/consult-injection.jpg', '55% 40%'], ['/images/consult-family.jpg', '30% 40%']]} alt="Doctor consulting a patient at home" />
    <section className="section"><div className="container"><div className="head"><h2>Why Choose a Home Doctor Consultation?</h2></div><div className="grid-4">{WHYD.map(([i, t]) => <FeatureCard key={t} icon={i} title={t} />)}</div></div></section>
    <section className="section alt consult"><div className="container"><div className="head"><h2>OPD & IP Home Care</h2><p>Choose the level of medical care that suits your needs.</p></div><div className="grid-2">{CONSULT_TYPES.map((s) => <ServiceCard key={s.id} s={s} />)}</div></div></section>
    <section className="section"><div className="container"><div className="head"><h2>Meet Our Doctors</h2><p>Sample profiles for demonstration.</p></div><div className="grid-3">{DOCTORS.map((d) => <DoctorCard key={d.name} d={d} />)}</div></div></section>
    <CTASection service="doctor" />
  </>)
}

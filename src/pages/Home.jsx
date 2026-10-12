import Hero from '../components/Hero.jsx'
import HospitalCard from '../components/HospitalCard.jsx'
import FeatureCard from '../components/FeatureCard.jsx'
import TestimonialSlider from '../components/TestimonialSlider.jsx'
import PhotoCarousel from '../components/PhotoCarousel.jsx'
import FAQ from '../components/FAQ.jsx'
import CTASection from '../components/CTASection.jsx'
import { WHY, STEPS, STATS, TESTIMONIALS } from '../data.js'
export default function Home() {
  return (<div className="home">
    <Hero title={<>Quality Healthcare,<br /><em>Right at Your Doorstep</em></>} sub="Professional doctor consultations and personalized physiotherapy at home, designed around your comfort and convenience." cta="Book a Home Consultation" service="doctor" secondary={['Explore Home Consultation', '/doctor-consultation']} poster="/images/hero-poster.png" alt="Home Clinic – home doctor consultation starting from ₹499, physiotherapy, lab tests, IV fluids, catheterization and wound care at home" />
    <section className="section"><div className="container"><div className="head fancy"><h2>Healthcare at Your Doorstep</h2><p>From the first consultation to tests, treatment and recovery, your entire care journey happens right inside your home.</p></div><HospitalCard /></div></section>
    <section className="section alt why"><div className="container"><div className="head fancy"><h2>Why Choose Home Clinic 24?</h2></div><div className="why-split"><div className="clinic-banner"><img src="/images/home-clinic.jpg" alt="Home Clinic – Quality healthcare, right at your doorstep" loading="lazy" /></div><div className="why-cards">{WHY.map(([i, t, x]) => <FeatureCard key={t} icon={i} title={t} text={x} />)}</div></div></div></section>
    <section className="section"><div className="container"><div className="head fancy"><h2>Care in Every Home</h2><p>Real moments from the home visits we deliver every day.</p></div>
      <PhotoCarousel items={[['/images/consult-bp.jpg', 'BP checkups at home'], ['/images/about-safety.jpg', 'Safe, hygienic home visits'], ['/images/consult-injection.jpg', 'Injections and treatment at home'], ['/images/hero-consult.jpg', 'Friendly doctor consultations'], ['/images/hero-care.jpg', 'Gentle support for elderly patients'], ['/images/hero-visit.jpg', 'Caring for little ones at home'], ['/images/consult-family.jpg', 'Vaccinations for the whole family'], ['/images/physio.jpg', 'Physiotherapy in your living room']]} />
    </div></section>
    <section className="section steps-sec"><div className="container"><div className="head fancy"><h2>Healthcare Made Simple</h2></div><div className="steps">{STEPS.map((s, i) => <div key={s} className="step"><span>{i + 1}</span><h3>{s}</h3></div>)}</div></div></section>
    <section className="section stats-band"><div className="container"><div className="head fancy"><h2>Care You Can Trust</h2></div><div className="trust-split"><div className="trust-photos"><img className="p1" src="/images/consult-family.jpg" alt="Nurse vaccinating a child at home" /><img className="p2" src="/images/hero-care.jpg" alt="Doctor assisting an elderly patient" /><img className="p3" src="/images/about-safety.jpg" alt="Safe, hygienic home visit" /></div><div className="trust-stats">{STATS.map(([v, l]) => <div key={l} className="card stat"><b>{v}</b><span>{l}</span></div>)}</div></div></div></section>
    <section className="section"><div className="container"><div className="head fancy"><h2>What Our Patients Say</h2></div><TestimonialSlider items={TESTIMONIALS} /></div></section>
    <section className="section alt"><div className="container narrow"><div className="head fancy"><h2>Frequently Asked Questions</h2></div><FAQ /></div></section>
    <CTASection />
  </div>)
}

// ===== Edit content here =====
export const CONTACT = { phone: '+91 96066 68266', email: 'care@homeclinic24.in', whatsapp: '+91 74830 68353', location: 'Mysuru, Karnataka, India' }
// Community sign-up form
export const WHATSAPP_COMMUNITY = 'https://docs.google.com/forms/d/e/1FAIpQLSdkTH-JnmGSWryMxgXMEJ7kXPCvK-jMlvXP5O1bUxa0q7QEAQ/viewform'
export const SERVICES = [
  { id: 'doctor', img: '/images/consult-family.jpg', title: 'Doctor Home Consultation', desc: 'Get professional medical consultation from qualified doctors in the comfort and privacy of your home.', features: ['Doctor home visit', 'Medical consultation', 'Health assessment', 'Treatment guidance', 'Follow-up care'], cta: 'Book Consultation', to: '/doctor-consultation', price: 599 },
  { id: 'physio', img: '/images/physio.jpg', title: 'Physiotherapy at Home', desc: 'Receive personalized physiotherapy sessions at home to improve mobility, manage pain and support recovery.', features: ['Personalized assessment', 'One-on-one sessions', 'Pain management', 'Mobility improvement', 'Recovery support'], cta: 'Book Physiotherapy', to: '/physiotherapy', price: 899 },
]
export const HOSPITAL_AT_HOME = { id: 'hospital', img: '/images/consult-injection.jpg', title: 'Complete Hospital at Home', desc: 'We don’t just offer home consultation. We bring home nursing, diagnostic support and sample collection to your doorstep, so you get a complete hospital experience without leaving home.', features: [{ t: 'Diagnostic support at home', hot: true }, { t: 'Lab sample collection at home', hot: true }, 'Home nursing care', 'Injections, IV fluids & dressings', 'Doctor visits & follow-ups', 'Physiotherapy at home'] }
export const PRICING = [
  { id: 'single', name: 'Single Session', price: 899, features: ['One home session', 'Initial assessment', 'Personalized guidance'], cta: 'Book Session' },
  { id: 'p5', name: '5 Session Package', price: 4250, features: ['5 home sessions', 'Personalized treatment plan', 'Progress monitoring'], cta: 'Choose Package', popular: true },
  { id: 'p10', name: '10 Session Package', price: 7999, features: ['10 home sessions', 'Personalized treatment', 'Progress monitoring'], cta: 'Choose Package' },
]
export const DOCTORS = [
  { name: 'Dr. Rohith', qual: 'MBBS', spec: 'General Physician', exp: '8+ Years Experience', rating: 4.9 },
  { name: 'Dr. Shreyas', qual: 'MBBS',  spec: 'General Physician', exp: '10+ Years Experience', rating: 4.8 },
  { name: 'Dr. Bharath', qual: 'MBBS', spec: 'General Physician', exp: '6+ Years Experience', rating: 4.9 },
  { name: 'Dr. Varshitha', qual: 'MBBS', spec: 'General Physician', exp: '6+ Years Experience', rating: 4.9 },
]
export const DOCTOR_CONDITIONS = [['Fever & Infections', 'Prompt assessment and guidance.'], ['Cold & Cough', 'Relief and recovery advice.'], ['General Health Concerns', 'Check-ups and clear answers.'], ['Blood Pressure', 'Monitoring and lifestyle guidance.'], ['Diabetes Management', 'Ongoing review and support.'], ['Digestive Problems', 'Care for common stomach issues.'], ['General Medical Advice', 'Trusted second opinions at home.'], ['Follow-up Consultations', 'Continued care after treatment.']]
export const CONSULT_TYPES = [
  { id: 'opd', img: '/images/consult-bp.jpg', title: 'OPD – Outpatient Consultation', desc: 'Doctor visits at home for everyday health concerns, without any hospital admission.', features: ['Fever & infections', 'Cold & cough', 'Blood pressure monitoring', 'Diabetes management', 'Digestive problems', 'Check-ups & follow-ups', 'Skin infections & allergies', 'Blood sugar & ECG checks', 'Prescriptions & medical advice', 'Vaccinations & injections'] },
  { id: 'ip', img: '/images/consult-injection.jpg', title: 'IP – Inpatient-Style Care at Home', desc: 'Continuous, supervised medical care at home in place of a hospital stay.', features: ['IV fluids & injections', 'Post-surgery care & dressing', 'Bedridden & elderly care', 'Chronic illness management', 'Catheter & tube care', 'Daily doctor rounds & vitals', 'Nebulization & oxygen support', 'Pressure sore care', 'Palliative & end-of-life care', 'Nursing care & medication management'] },
]
export const PHYSIO_CONDITIONS =[['Back Pain', 'Ease stiffness and strengthen your back.'], ['Neck Pain', 'Relieve tension and improve posture.'], ['Knee Pain', 'Restore movement and stability.'], ['Shoulder Pain', 'Regain comfortable range of motion.'], ['Sciatica', 'Reduce nerve pain and discomfort.'], ['Arthritis', 'Gentle exercise to keep joints active.'], ['Sports Injuries', 'Safe, structured return to activity.'], ['Post-Surgery Recovery', 'Guided rehabilitation at home.']]
export const WHY = [['home', 'Care at Home', 'Receive professional healthcare without unnecessary travel.'], ['shield', 'Qualified Professionals', 'Connect with trained and experienced healthcare professionals.'], ['heart', 'Personalized Attention', 'Get care designed around your individual needs.'], ['calendar', 'Convenient Booking', 'Choose a convenient date and time for your home visit.']]
export const STEPS = ['Choose Your Service', 'Select Date & Time', 'Professional Visits Your Home', 'Receive Personalized Care']
export const STATS = [['4.9/5', 'Patient Rating'], ['1,000+', 'Patients Served'], ['200+', 'Home Consultations'], ['Professional', 'Healthcare Team']]
export const TESTIMONIALS = [
  { text: 'The doctor consultation at home was extremely convenient. The doctor was professional and explained everything clearly.', tag: 'Doctor Consultation', name: 'Anjali R.', loc: 'Mysuru' },
  { text: 'My father’s BP checkup and regular monitoring at home saved us the hassle of hospital queues every month.', tag: 'BP Monitoring', name: 'Suresh K.', loc: 'Mysuru' },
  { text: 'My daughter had a high fever late in the evening. The doctor came home quickly and treated her with such care.', tag: 'Fever Care', name: 'Meera S.', loc: 'Mysuru' },
  { text: 'The doctor did a full health checkup at home, checked my sugar and BP, and guided me on follow-up care.', tag: 'Health Checkup', name: 'Rahul P.', loc: 'Mysuru' },
  { text: 'My mother had a bedsore after a long illness. The team dressed it every day at home with such care, and it healed well. I would suggest them to everyone.', tag: 'Bedsore Care', name: 'Kavitha M.', loc: 'Mysuru' },
  { text: 'My brother had pneumonia and was treated at home with IV fluids, nebulization and daily doctor visits. He recovered well without a hospital stay.', tag: 'Pneumonia Care', name: 'Prakash N.', loc: 'Mysuru' },
  { text: 'After my sister’s knee replacement, the postoperative knee care and physiotherapy at home were excellent. She is walking confidently again.', tag: 'Post-op Knee Care', name: 'Divya H.', loc: 'Mysuru' },
  { text: 'They looked after my uncle’s wound dressing and post-surgery care so gently. Everyone in our family now recommends Home Clinic 24.', tag: 'Wound & Post-surgery Care', name: 'Naveen G.', loc: 'Mysuru' },
]
export const FAQS = [
  ['How do I book a home consultation?', 'Simply call us or tap the Call button on this page. Share your details and address, and we will confirm a convenient time.'],
  ['Can I choose the date and time?', 'Yes. Call us and choose a Morning, Afternoon or Evening slot that suits you.'],
  ['What conditions can a doctor treat at home?', 'Common issues like fever, cold and cough, infections, BP and sugar monitoring, digestive problems, skin allergies and follow-up care.'],
  ['What is the difference between OPD and IP care at home?', 'OPD is a doctor visit for everyday concerns with no admission. IP-style care is continuous, supervised treatment at home, such as IV fluids, post-surgery care and daily doctor rounds.'],
  ['Can the doctor check my BP, sugar and fever at home?', 'Yes. The doctor carries the basic equipment to check BP, blood sugar, temperature, oxygen level and other vitals during the visit.'],
  ['Will I get a prescription after the consultation?', 'Yes. The doctor will explain your diagnosis and provide a prescription along with treatment guidance and follow-up advice.'],
  ['How quickly can a doctor reach my home?', 'Call us and choose a Morning, Afternoon or Evening slot. For urgent needs, tell us when you call and we will arrange the earliest available visit.'],
  ['Can I arrange a follow-up consultation?', 'Yes. Call us to arrange follow-up visits to review your progress and adjust your treatment.'],
  ['Is home consultation suitable for elderly or bedridden patients?', 'Absolutely. It is ideal for elderly and bedridden patients who find travel difficult, with regular visits and monitoring at home.'],
  ['Is home consultation suitable for emergencies?', 'No. For emergencies such as chest pain, severe breathing difficulty or serious injury, please call emergency services or go to the nearest hospital immediately.'],
  ['Can I arrange lab tests at home?', 'Yes. The doctor can advise tests, and sample collection can be arranged at home. Contact us for details.'],
  ['What should I keep ready before the doctor arrives?', 'Keep previous prescriptions, medical reports and a list of current medicines handy, and a family member present if possible.'],
  ['How does home physiotherapy work?', 'A physiotherapist assesses you, creates a personalized plan and delivers one-on-one sessions at home.'],
  ['How long does a physiotherapy session last?', 'Sessions typically last around 45–60 minutes.'],
  ['Can I have multiple physiotherapy sessions?', 'Yes. Call us to arrange a 5 or 10 session package for continuous, progress-focused care.'],
  ['Do I need to visit a clinic?', 'No. Our professionals come to your home.'],
  ['Which locations do you serve?', 'We currently serve Mysuru and nearby areas. Contact us to confirm your location.'],
  ['How can I contact Home Clinic 24?', 'Call, email or WhatsApp us using the details on our Contact page.'],
]
export const SLOTS = ['Morning', 'Afternoon', 'Evening']
export const SERVICE_CHARGES = [
  { category: 'Doctor & Visit Charges', services: [
    { name: 'Doctor Consultation at Home', price: 499 },
    { name: 'Brother Visit', price: 199 },
    { name: 'IP Admission – Doctor Visit', price: 349 },
  ]},
  { category: 'Injections & Procedures', services: [
    { name: 'IM Injection', price: 249 },
    { name: 'IV Injection', price: 399 },
    { name: 'Catheter Application', price: 499, note: '+ Consumables MRP + Brother/Sister Visit' },
    { name: 'Ryles Tube Application', price: 499, note: '+ Consumables + Brother Visit' },
    { name: 'Tracheostomy Care', price: 299, note: '+ Brother Visit' },
  ]},
  { category: 'Dressing', services: [
    { name: 'Small', price: 199 },
    { name: 'Medium', price: 299 },
    { name: 'Large', price: 499 },
  ]},
  { category: 'IP Admission Cases', services: [
    { name: 'AFI', conditions: true },
    { name: 'Pneumonia', conditions: true },
    { name: 'UTI', conditions: true },
    { name: 'Acute GE', conditions: true },
    { name: 'Diabetic Wound Care', conditions: true },
  ]},
  { category: 'Other Nursing & Care Services', services: [
    { name: 'Colostomy Care', price: 499 },
    { name: 'Stoma Care', price: 299 },
    { name: 'Surgical Site Care', price: 299 },
    { name: 'Suture Removal', price: 399 },
    { name: 'Abscess Drainage', price: 299 },
    { name: 'Debridement of Wounds', price: 299 },
    { name: 'Other Cases / Post-operative', price: 299 },
    { name: 'Insulin Administration', note: 'Brother Visit Charges' },
    { name: 'Enema', price: 299 },
    { name: 'Bed Sore Care', price: 299 },
    { name: 'Cancer Care', note: 'Consumables MRP' },
    { name: 'Drain Care', price: 299 },
    { name: 'Nebulization', price: 99 },
  ]},
  { category: 'Additional Services', services: [
    { name: 'Diagnostic Support', note: 'Tie-up Company Prices' },
    { name: 'Physiotherapy', note: 'Tie-up Doctor Charges' },
  ]},
]

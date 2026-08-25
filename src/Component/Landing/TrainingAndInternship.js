import React, { useEffect, useState } from 'react';
import {
  GraduationCap, Code2, Server, Database, Layers, Smartphone, Plug,
  CheckCircle2, ArrowRight, Phone, Star, Clock, Users, Award, Briefcase,
  BookOpen, Target, Rocket, Send, Loader2, ChevronDown, MessageCircle,
  Monitor, FileCode2, Quote
} from 'lucide-react';
import './TrainingAndInternship.css';

const TrainingAndInternship = () => {
  const [activeCourse, setActiveCourse] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);
  const [form, setForm] = useState({ 
    name: '', 
    email: '', 
    phone: '', 
    course: '', 
    college: '', 
    duration: '',
    website_hp: '' // Anti-spam honeypot field
  });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const WHATSAPP = '916262913378';
  
  // 🔴 Apni Google Apps Script ki Web App URL yahan daalein
  const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzPq1Fsv7a06OsjUosY3ePEs9heA5KA1yBU8Rpxcv1geOzjNgTfddPqVj3hufBlLUe1/exec';
  const SECRET_TOKEN = 'MySecretToken12345';

  /* ---------- Scroll Reveal ---------- */
  useEffect(() => {
    const items = document.querySelectorAll('.di-reveal');
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('di-show')),
      { threshold: 0.1 }
    );
    items.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  /* ---------- Form Submit to Google Sheet ---------- */
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setErrorMessage('');

    const payload = {
      token: SECRET_TOKEN,
      formType: 'internship', // Apps Script ise dekhar "Internship" tab me data daalega
      name: form.name,
      email: form.email,
      phone: form.phone,
      college: form.college,
      course: form.course,
      duration: form.duration,
      website_hp: form.website_hp
    };

    try {
      const response = await fetch(SCRIPT_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8', // Google Apps Script CORS issue se bachne ke liye text/plain prefer karta hai
        },
        body: JSON.stringify(payload),
      });

      const resData = await response.json();

      if (resData.result === 'success') {
        setSent(true);
        setForm({ name: '', email: '', phone: '', course: '', college: '', duration: '', website_hp: '' });
        setTimeout(() => setSent(false), 5000);
      } else {
        setErrorMessage(resData.error || 'Kuch galat ho gaya, kripya dubara koshish karein.');
      }
    } catch (err) {
      setErrorMessage('Network error ya server response me samsya. Kripya bad me koshish karein.');
    } finally {
      setSending(false);
    }
  };

  /* ================= COURSES ================= */
  const courses = [
    {
      icon: <Layers size={26} />,
      title: 'Frontend Development',
      level: 'Beginner to Advanced',
      duration: '2 - 3 Months',
      tag: 'Most Popular',
      desc: 'Build modern, responsive and interactive user interfaces from scratch with industry best practices.',
      tech: ['HTML5', 'CSS3', 'JavaScript ES6+', 'React JS', 'Bootstrap', 'Tailwind CSS', 'Redux', 'Git'],
      topics: [
        'HTML5 semantic structure & forms',
        'CSS3, Flexbox, Grid & animations',
        'JavaScript DOM, ES6, async/await',
        'React JS — components, hooks, router',
        'State management with Redux Toolkit',
        'Responsive & mobile-first design',
        'API integration with Axios / Fetch',
        'Deployment on Netlify / Vercel'
      ]
    },
    {
      icon: <Server size={26} />,
      title: 'Backend Development',
      level: 'Intermediate',
      duration: '2 - 3 Months',
      tag: 'High Demand',
      desc: 'Master server-side programming, authentication, business logic and secure API development.',
      tech: ['Node.js', 'Express.js', 'Python', 'Django', 'PHP', 'JWT Auth', 'REST API'],
      topics: [
        'Node.js runtime & npm ecosystem',
        'Express.js routing & middleware',
        'Python fundamentals & OOP',
        'Django MVT architecture & ORM',
        'JWT authentication & authorization',
        'File upload, email & payment gateway',
        'Error handling & security practices',
        'Server deployment (Render / VPS)'
      ]
    },
    {
      icon: <Database size={26} />,
      title: 'Database Management',
      level: 'Beginner Friendly',
      duration: '1 - 2 Months',
      tag: 'Core Skill',
      desc: 'Design, query and optimize databases used in real-world business applications.',
      tech: ['MySQL', 'MongoDB', 'PostgreSQL', 'SQL Server', 'Firebase', 'Mongoose'],
      topics: [
        'RDBMS concepts & normalization',
        'SQL queries, joins & subqueries',
        'Stored procedures, views & triggers',
        'MongoDB collections & aggregation',
        'Mongoose schema & relationships',
        'Indexing & query optimization',
        'Backup, restore & migration',
        'Database design for real projects'
      ]
    },
    {
      icon: <Plug size={26} />,
      title: 'API Development',
      level: 'Intermediate',
      duration: '1 - 2 Months',
      tag: 'Industry Ready',
      desc: 'Build, test, secure and document RESTful APIs used by web and mobile applications.',
      tech: ['REST API', 'JSON', 'Postman', 'JWT', 'Axios', 'Swagger', 'CORS'],
      topics: [
        'REST architecture & HTTP methods',
        'CRUD API design & status codes',
        'Request validation & sanitization',
        'JWT / OAuth authentication',
        'API testing with Postman',
        'Rate limiting & CORS handling',
        'Swagger API documentation',
        'Third-party API integration'
      ]
    },
    {
      icon: <Code2 size={26} />,
      title: 'Full Stack Development',
      level: 'Complete Program',
      duration: '4 - 6 Months',
      tag: 'Best Value',
      desc: 'Complete MERN / Django full stack program with live project and placement assistance.',
      tech: ['MERN Stack', 'React', 'Node.js', 'MongoDB', 'Django', 'Git & GitHub', 'Deployment'],
      topics: [
        'Frontend + Backend complete stack',
        'MERN: MongoDB, Express, React, Node',
        'Django + React full stack combo',
        'Authentication & role-based access',
        'Admin dashboard development',
        'Payment gateway integration',
        'Git, GitHub & team collaboration',
        'Live project + portfolio building'
      ]
    },
    {
      icon: <Smartphone size={26} />,
      title: 'Mobile App Development',
      level: 'Intermediate',
      duration: '2 - 3 Months',
      tag: 'Trending',
      desc: 'Create cross-platform Android & iOS applications with real project experience.',
      tech: ['React Native', 'Flutter', 'Dart', 'Firebase', 'Android Studio', 'Play Store'],
      topics: [
        'React Native components & navigation',
        'Flutter widgets & Dart basics',
        'State management (Provider / Redux)',
        'Firebase auth & realtime database',
        'Push notifications setup',
        'Device APIs — camera, storage, GPS',
        'App build & signing (APK / AAB)',
        'Play Store publishing process'
      ]
    }
  ];

  /* ================= PERKS ================= */
  const perks = [
    { icon: <Briefcase size={22} />, title: 'Live Project Work', desc: 'Work on real client projects, not dummy tutorials.' },
    { icon: <Award size={22} />, title: 'Certificate', desc: 'Industry-recognized completion certificate.' },
    { icon: <Users size={22} />, title: '1-on-1 Mentorship', desc: 'Personal guidance from working developers.' },
    { icon: <Clock size={22} />, title: 'Flexible Timings', desc: 'Morning, evening & weekend batches available.' },
    { icon: <Target size={22} />, title: 'Interview Prep', desc: 'Mock interviews, resume & portfolio building.' },
    { icon: <Rocket size={22} />, title: 'Placement Support', desc: 'Job referrals & placement assistance.' }
  ];

  /* ================= PROCESS ================= */
  const process = [
    { step: '01', icon: <Send size={20} />, title: 'Apply Online', desc: 'Fill the enrollment form or call us directly.' },
    { step: '02', icon: <MessageCircle size={20} />, title: 'Counselling', desc: 'Free career counselling with our expert team.' },
    { step: '03', icon: <BookOpen size={20} />, title: 'Start Learning', desc: 'Join your batch and begin hands-on training.' },
    { step: '04', icon: <FileCode2 size={20} />, title: 'Build Projects', desc: 'Work on live projects with mentor support.' },
    { step: '05', icon: <Award size={20} />, title: 'Get Certified', desc: 'Receive certificate + placement assistance.' }
  ];

  /* ================= TESTIMONIALS ================= */
  const testimonials = [
    {
      name: 'Rahul Verma',
      role: 'B.Tech CSE · Full Stack Intern',
      text: 'The 6-month full stack internship completely changed my career. Working on a real client project gave me confidence, and I got placed within 2 months of completion.',
      rating: 5
    },
    {
      name: 'Priya Sharma',
      role: 'MCA · Frontend Developer',
      text: 'Best React training in Raipur. The mentors explain every concept practically. I built 3 live projects during training which really helped in my interviews.',
      rating: 5
    },
    {
      name: 'Aman Sahu',
      role: 'BCA · Backend Intern',
      text: 'Learned Node.js and Django from scratch. The API development module was outstanding — they teach exactly what companies use in production.',
      rating: 5
    },
    {
      name: 'Sneha Patel',
      role: 'B.Sc IT · App Developer',
      text: 'React Native training was superb. Published my own app on Play Store during the internship. The team is very supportive and always available.',
      rating: 5
    }
  ];

  /* ================= FAQ ================= */
  const faqs = [
    { q: 'Who can join this internship program?', a: 'Students of B.Tech, BCA, MCA, Diploma, B.Sc IT and any graduate interested in IT can join. Freshers with zero coding knowledge are also welcome — we start from basics.' },
    { q: 'What is the duration of the internship?', a: 'We offer flexible durations — 45 Days, 3 Months and 6 Months programs. You can choose based on your college requirement or career goal.' },
    { q: 'Will I get a certificate?', a: 'Yes. On successful completion you receive an industry-recognized Internship Completion Certificate along with a Project Completion Letter.' },
    { q: 'Do you provide placement assistance?', a: 'Yes. We provide resume building, mock interviews, portfolio guidance and job referrals through our client and partner network.' },
    { q: 'Are classes online or offline?', a: 'Both. We offer offline classes at our Raipur office and live online classes for outstation students. Recordings are also provided.' },
    { q: 'Will I work on real projects?', a: 'Absolutely. Every intern works on at least one live client project or a production-grade project under mentor supervision.' }
  ];

  const stats = [
    { num: '1000+', label: 'Students Trained' },
    { num: '95%', label: 'Placement Rate' },
    { num: '50+', label: 'Live Projects' },
    { num: '10+', label: 'Years Experience' }
  ];

  return (
    <main className="di-training-page">
      {/* ================= BANNER ================= */}
      <section className="di-page-banner">
        <div className="di-banner-overlay"></div>

        <div className="di-container di-banner-inner di-reveal">
          <span className="di-banner-badge">
            <Star size={13} fill="#f97316" color="#f97316" />
            Admissions Open · New Batch Starting Soon
          </span>

          <h1>Training &amp; <span>Internship</span></h1>

          <p>
            Industry-focused IT training with live projects, expert mentorship,
            certification and placement assistance.
          </p>

          <div className="di-banner-actions">
            <a href="#enroll" className="di-btn-primary">
              Enroll Now <ArrowRight size={16} />
            </a>
            <a href={`tel:+${WHATSAPP}`} className="di-btn-outline">
              <Phone size={15} /> Talk to Counsellor
            </a>
          </div>
        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="di-tr-stats">
        <div className="di-container">
          <div className="di-tr-stats-grid">
            {stats.map((s, i) => (
              <div className="di-tr-stat di-reveal" key={i} style={{ transitionDelay: `${i * 70}ms` }}>
                <h3>{s.num}</h3>
                <p>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= COURSES ================= */}
      <section className="di-courses">
        <div className="di-container">
          <div className="di-text-center di-reveal">
            <span className="di-section-tag">
              <GraduationCap size={14} style={{ marginRight: 6 }} /> Our Courses
            </span>
            <h2 className="di-heading">What You Will <span>Learn</span></h2>
            <p className="di-section-desc">
              Click any course to see the complete syllabus and technologies covered.
            </p>
          </div>

          <div className="di-course-grid">
            {courses.map((c, i) => (
              <div
                key={i}
                className={`di-course-card di-reveal ${activeCourse === i ? 'di-clicked' : ''}`}
                style={{ transitionDelay: `${i * 60}ms` }}
                onClick={() => setActiveCourse(activeCourse === i ? null : i)}
              >
                <div className="di-course-head">
                  <div className="di-course-icon">{c.icon}</div>
                  <span className="di-course-tag">{c.tag}</span>
                </div>

                <h3>{c.title}</h3>

                <div className="di-course-meta">
                  <span><Monitor size={12} /> {c.level}</span>
                  <span><Clock size={12} /> {c.duration}</span>
                </div>

                <p className="di-course-desc">{c.desc}</p>

                <div className="di-course-tech">
                  {(activeCourse === i ? c.tech : c.tech.slice(0, 4)).map((t, k) => (
                    <span className="di-tag" key={k}>{t}</span>
                  ))}
                  {activeCourse !== i && c.tech.length > 4 && (
                    <span className="di-tag di-tag-more">+{c.tech.length - 4}</span>
                  )}
                </div>

                {/* Expandable Syllabus */}
                <div className={`di-course-topics ${activeCourse === i ? 'di-open' : ''}`}>
                  <h5><BookOpen size={13} /> Syllabus Covered</h5>
                  <ul>
                    {c.topics.map((t, k) => (
                      <li key={k}><CheckCircle2 size={13} /> {t}</li>
                    ))}
                  </ul>
                </div>

                <button className="di-course-link">
                  {activeCourse === i ? 'Hide Syllabus' : 'View Syllabus'}
                  <ChevronDown size={14} className={activeCourse === i ? 'di-rot' : ''} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PERKS ================= */}
      <section className="di-perks-sec">
        <div className="di-container">
          <div className="di-text-center di-reveal">
            <span className="di-section-tag">Why Choose Us</span>
            <h2 className="di-heading">What Makes Us <span>Different</span></h2>
          </div>

          <div className="di-perks-grid">
            {perks.map((p, i) => (
              <div className="di-perk-card di-reveal" key={i} style={{ transitionDelay: `${i * 60}ms` }}>
                <div className="di-perk-ic">{p.icon}</div>
                <h4>{p.title}</h4>
                <p>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PROCESS ================= */}
      <section className="di-process">
        <div className="di-container">
          <div className="di-text-center di-reveal">
            <span className="di-section-tag">How It Works</span>
            <h2 className="di-heading">Simple <span>5-Step</span> Process</h2>
          </div>

          <div className="di-process-grid">
            {process.map((p, i) => (
              <div className="di-process-card di-reveal" key={i} style={{ transitionDelay: `${i * 80}ms` }}>
                <span className="di-process-num">{p.step}</span>
                <div className="di-process-ic">{p.icon}</div>
                <h4>{p.title}</h4>
                <p>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= DURATION / PLANS ================= */}
      <section className="di-plans">
        <div className="di-container">
          <div className="di-text-center di-reveal">
            <span className="di-section-tag">Internship Duration</span>
            <h2 className="di-heading">Choose Your <span>Program</span></h2>
            <p className="di-section-desc">Available for B.Tech, BCA, MCA, Diploma &amp; B.Sc IT students.</p>
          </div>

          <div className="di-plans-grid">
            <div className="di-plan-card di-reveal">
              <span className="di-plan-badge">Short Term</span>
              <h3>45 Days</h3>
              <p className="di-plan-sub">Summer / Winter Internship</p>
              <ul>
                <li><CheckCircle2 size={14} /> 1 Technology Track</li>
                <li><CheckCircle2 size={14} /> Mini Live Project</li>
                <li><CheckCircle2 size={14} /> Completion Certificate</li>
                <li><CheckCircle2 size={14} /> Project Report</li>
              </ul>
              <a href="#enroll" className="di-btn-outline">Enroll Now</a>
            </div>

            <div className="di-plan-card di-plan-featured di-reveal" style={{ transitionDelay: '80ms' }}>
              <span className="di-plan-badge di-badge-hot">Most Popular</span>
              <h3>3 Months</h3>
              <p className="di-plan-sub">Frontend / Backend Specialization</p>
              <ul>
                <li><CheckCircle2 size={14} /> Full Technology Stack</li>
                <li><CheckCircle2 size={14} /> 2 Live Client Projects</li>
                <li><CheckCircle2 size={14} /> Certificate + Letter</li>
                <li><CheckCircle2 size={14} /> Resume &amp; Portfolio Build</li>
                <li><CheckCircle2 size={14} /> Mock Interviews</li>
              </ul>
              <a href="#enroll" className="di-btn-primary">Enroll Now <ArrowRight size={15} /></a>
            </div>

            <div className="di-plan-card di-reveal" style={{ transitionDelay: '160ms' }}>
              <span className="di-plan-badge">Advanced</span>
              <h3>6 Months</h3>
              <p className="di-plan-sub">Full Stack + Placement Track</p>
              <ul>
                <li><CheckCircle2 size={14} /> Complete Full Stack</li>
                <li><CheckCircle2 size={14} /> 3+ Live Projects</li>
                <li><CheckCircle2 size={14} /> Certificate + Experience Letter</li>
                <li><CheckCircle2 size={14} /> Placement Assistance</li>
                <li><CheckCircle2 size={14} /> Job Referrals</li>
              </ul>
              <a href="#enroll" className="di-btn-outline">Enroll Now</a>
            </div>
          </div>
        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}
      <section className="di-testi">
        <div className="di-container">
          <div className="di-text-center di-reveal">
            <span className="di-section-tag">Student Reviews</span>
            <h2 className="di-heading">What Our <span>Students Say</span></h2>
          </div>

          <div className="di-testi-grid">
            {testimonials.map((t, i) => (
              <div className="di-testi-card di-reveal" key={i} style={{ transitionDelay: `${i * 70}ms` }}>
                <Quote size={26} className="di-quote-ic" />

                <div className="di-stars">
                  {[...Array(t.rating)].map((_, k) => (
                    <Star key={k} size={14} fill="#fcd34d" color="#fcd34d" />
                  ))}
                </div>

                <p className="di-testi-text">"{t.text}"</p>

                <div className="di-testi-user">
                  <div className="di-testi-avatar">{t.name.charAt(0)}</div>
                  <div>
                    <h5>{t.name}</h5>
                    <span>{t.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FAQ + FORM ================= */}
      <section className="di-enroll" id="enroll">
        <div className="di-container">
          <div className="di-enroll-wrap">

            {/* FAQ */}
            <div className="di-faq-box di-reveal">
              <span className="di-section-tag">FAQ</span>
              <h2 className="di-heading">Frequently Asked <span>Questions</span></h2>

              <div className="di-faq-list">
                {faqs.map((f, i) => (
                  <div className={`di-faq-item ${openFaq === i ? 'di-open' : ''}`} key={i}>
                    <button onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                      <span>{f.q}</span>
                      <ChevronDown size={17} />
                    </button>
                    <div className="di-faq-ans"><p>{f.a}</p></div>
                  </div>
                ))}
              </div>

              <div className="di-faq-help">
                <MessageCircle size={18} />
                <div>
                  <h5>Still have questions?</h5>
                  <a
                    href={`https://wa.me/${WHATSAPP}?text=Hi%2C%20I%20want%20to%20know%20about%20internship%20program`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Chat with us on WhatsApp <ArrowRight size={13} />
                  </a>
                </div>
              </div>
            </div>

            {/* FORM */}
            <div className="di-enroll-form di-reveal">
              <div className="di-form-head">
                <div className="di-form-ic"><GraduationCap size={22} /></div>
                <div>
                  <h3>Enroll Now</h3>
                  <p>Limited seats · Batch starting soon</p>
                </div>
              </div>

              {sent && (
                <div className="di-form-success">
                  <CheckCircle2 size={18} />
                  Application submitted! Our counsellor will call you shortly.
                </div>
              )}

              {errorMessage && (
                <div className="di-form-error" style={{ color: '#ef4444', marginBottom: '15px', fontSize: '14px' }}>
                  {errorMessage}
                </div>
              )}

              <form onSubmit={handleSubmit}>
                {/* Honeypot Hidden Input for Bots */}
                <input 
                  type="text" 
                  name="website_hp" 
                  value={form.website_hp} 
                  onChange={handleChange} 
                  style={{ display: 'none' }} 
                  tabIndex="-1" 
                  autoComplete="off" 
                />

                <div className="di-fg">
                  <label>Full Name *</label>
                  <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Enter your name" required />
                </div>

                <div className="di-fr">
                  <div className="di-fg">
                    <label>Email *</label>
                    <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="you@example.com" required />
                  </div>
                  <div className="di-fg">
                    <label>Phone *</label>
                    <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="+91 00000 00000" required />
                  </div>
                </div>

                <div className="di-fg">
                  <label>College / University</label>
                  <input type="text" name="college" value={form.college} onChange={handleChange} placeholder="Your college name" />
                </div>

                <div className="di-fr">
                  <div className="di-fg">
                    <label>Course *</label>
                    <select name="course" value={form.course} onChange={handleChange} required>
                      <option value="" disabled>Select course</option>
                      {courses.map((c, i) => <option key={i} value={c.title}>{c.title}</option>)}
                    </select>
                  </div>
                  <div className="di-fg">
                    <label>Duration *</label>
                    <select name="duration" value={form.duration} onChange={handleChange} required>
                      <option value="" disabled>Select duration</option>
                      <option value="45 Days">45 Days</option>
                      <option value="3 Months">3 Months</option>
                      <option value="6 Months">6 Months</option>
                    </select>
                  </div>
                </div>

                <button type="submit" className="di-submit-btn" disabled={sending}>
                  {sending
                    ? <><Loader2 size={17} className="di-spin" /> Submitting...</>
                    : <>Submit Application <Send size={16} /></>}
                </button>

                <p className="di-form-note">
                  <CheckCircle2 size={12} /> Free career counselling · No advance payment
                </p>
              </form>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
};

export default TrainingAndInternship;

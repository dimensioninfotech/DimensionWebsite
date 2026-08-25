import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Monitor,
  Smartphone,
  ShoppingCart,
  Calculator,
  Code2,
  Wrench,
  ArrowRight,
  Star,
  Search,
  Layers,
  Server,
  Database,
  Plug,
  GraduationCap,
  Briefcase,
  Award,
  Clock,
  Users
} from 'lucide-react';
import './Service.css';

const Service = () => {
  const [activeCard, setActiveCard] = useState(null);
  const [activeTrain, setActiveTrain] = useState(null);
  const [query, setQuery] = useState('');

  /* ---------- Scroll Reveal ---------- */
  useEffect(() => {
    const items = document.querySelectorAll('.di-reveal');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('di-show');
        });
      },
      { threshold: 0.1 }
    );

    items.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const coreServices = [
    {
      icon: <Monitor size={26} />,
      title: 'Website Development',
      desc: 'Responsive, fast and SEO-optimized corporate websites and web applications.'
    },
    {
      icon: <Smartphone size={26} />,
      title: 'Android & iOS Apps',
      desc: 'Custom mobile applications for online ordering, tracking and management.'
    },
    {
      icon: <Code2 size={26} />,
      title: 'Custom Software',
      desc: 'Tailor-made production, inventory and accounting software built for your needs.'
    },
    {
      icon: <ShoppingCart size={26} />,
      title: 'E-Commerce Solutions',
      desc: 'End-to-end online store setup with secure payment gateway integrations.'
    },
    {
      icon: <Calculator size={26} />,
      title: 'GST & Tax Software',
      desc: 'Automated billing software with direct Excel reporting for easy GST filing.'
    },
    {
      icon: <Wrench size={26} />,
      title: 'Software Customization',
      desc: 'Modification and upgrade of your existing software as per new requirements.'
    }
  ];

  /* ---------- TRAINING & INTERNSHIP ---------- */
  const trainings = [
    {
      icon: <Layers size={26} />,
      title: 'Frontend Development',
      desc: 'Learn to build modern, responsive and interactive user interfaces from scratch.',
      tags: ['HTML5', 'CSS3', 'JavaScript', 'React JS', 'Bootstrap', 'Tailwind']
    },
    {
      icon: <Server size={26} />,
      title: 'Backend Development',
      desc: 'Server-side logic, authentication, routing and business logic implementation.',
      tags: ['Node.js', 'Express', 'Python', 'Django', 'PHP', 'REST API']
    },
    {
      icon: <Database size={26} />,
      title: 'Database Management',
      desc: 'Design, query and optimize databases for real-world business applications.',
      tags: ['MySQL', 'MongoDB', 'PostgreSQL', 'SQL Server', 'Firebase']
    },
    {
      icon: <Plug size={26} />,
      title: 'API Development',
      desc: 'Build and integrate secure REST APIs with authentication and documentation.',
      tags: ['REST API', 'JSON', 'Postman', 'JWT Auth', 'Axios', 'Integration']
    },
    {
      icon: <Code2 size={26} />,
      title: 'Full Stack Development',
      desc: 'Complete MERN / Django full stack program with live project deployment.',
      tags: ['MERN Stack', 'Django + React', 'Git & GitHub', 'Deployment']
    },
    {
      icon: <Smartphone size={26} />,
      title: 'Mobile App Development',
      desc: 'Cross-platform Android & iOS app development with real project experience.',
      tags: ['React Native', 'Flutter', 'Android', 'Firebase', 'Play Store']
    }
  ];

  const trainingPerks = [
    { icon: <Briefcase size={19} />, text: 'Live Project Work' },
    { icon: <Award size={19} />, text: 'Certificate on Completion' },
    { icon: <Users size={19} />, text: '1-on-1 Expert Mentorship' },
    { icon: <Clock size={19} />, text: 'Flexible Batch Timings' }
  ];

  const industrySoftwares = [
    'Accounting, Inventory with GST & Production',
    'Medical & Pharmacy Store',
    'Automobile & Auto Parts',
    'School Management System',
    'Hotel Management System',
    'Restaurant & Bar Management',
    'Real Estate & Construction',
    'Transport Management',
    'Dairy & Sweet Shop with Production',
    'Cloth Showroom & Boutique',
    'Electronics Shop Software',
    'Super-Bazaar & Retail POS',
    'Computer Sale & Service',
    'Dry Cleaner & Laundry Management',
    'FMCG & Kirana Shop',
    'Beauty Parlour Complete Management',
    'Petrol Pump Software',
    'Poultry Farm Management',
    'Tiffin & Mess Management System'
  ];

  const filtered = industrySoftwares.filter((item) =>
    item.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <main className="di-service">
      {/* ================= BANNER ================= */}
      <section className="di-page-banner">
        <div className="di-banner-overlay"></div>

        <div className="di-container di-banner-inner di-reveal">
          <span className="di-banner-badge">
            <Star size={13} fill="#f97316" color="#f97316" />
            20+ Ready Software Products
          </span>

          <h1>
            Our Core <span>Services</span>
          </h1>

          <p>End-to-End IT Solutions, Software Products &amp; Professional IT Training.</p>
        </div>
      </section>

      {/* ================= CORE SERVICES ================= */}
      <section className="di-core-services">
        <div className="di-container">
          <div className="di-text-center di-reveal">
            <span className="di-section-tag">What We Do</span>
            <h2 className="di-heading">
              Premium <span>IT Solutions</span> We Offer
            </h2>
            <p className="di-section-desc">
              From concept to deployment — we handle everything so you can focus on your business.
            </p>
          </div>

          <div className="di-service-grid">
            {coreServices.map((srv, index) => (
              <div
                key={index}
                className={`di-service-card di-reveal ${activeCard === index ? 'di-clicked' : ''}`}
                style={{ transitionDelay: `${index * 65}ms` }}
                onClick={() => setActiveCard(activeCard === index ? null : index)}
              >
                <div className="di-service-icon">{srv.icon}</div>
                <h3>{srv.title}</h3>
                <p>{srv.desc}</p>

                <Link to="/contact" className="di-service-link">
                  Get Quote <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= TRAINING & INTERNSHIP ================= */}
      <section className="di-training">
        <div className="di-container">
          <div className="di-text-center di-reveal">
            <span className="di-section-tag">
              <GraduationCap size={14} style={{ marginRight: 6 }} />
              Training &amp; Internship
            </span>
            <h2 className="di-heading">
              Learn. Build. <span>Get Hired.</span>
            </h2>
            <p className="di-section-desc">
              Industry-focused IT training and internship programs with live projects,
              expert mentorship and certification.
            </p>
          </div>

          {/* Perks Strip */}
          <div className="di-train-perks di-reveal">
            {trainingPerks.map((p, i) => (
              <div className="di-perk-item" key={i}>
                <span className="di-perk-icon">{p.icon}</span>
                {p.text}
              </div>
            ))}
          </div>

          {/* Training Cards */}
          <div className="di-train-grid">
            {trainings.map((t, i) => (
              <div
                key={i}
                className={`di-train-card di-reveal ${activeTrain === i ? 'di-clicked' : ''}`}
                style={{ transitionDelay: `${i * 65}ms` }}
                onClick={() => setActiveTrain(activeTrain === i ? null : i)}
              >
                <div className="di-train-head">
                  <div className="di-train-icon">{t.icon}</div>
                  <span className="di-train-badge">Internship</span>
                </div>

                <h3>{t.title}</h3>
                <p>{t.desc}</p>

                <div className="di-train-tags">
                  {t.tags.map((tag, k) => (
                    <span className="di-tag" key={k}>{tag}</span>
                  ))}
                </div>

                <Link to="/contact" className="di-service-link">
                  Enroll Now <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>

          {/* Training Note */}
          <div className="di-industry-note di-reveal" style={{ marginTop: 26 }}>
            <div className="di-note-icon">
              <GraduationCap size={20} />
            </div>
            <h4>
              <strong>Internship Duration:</strong> 45 Days / 3 Months / 6 Months —
              available for B.Tech, BCA, MCA, Diploma &amp; B.Sc IT students.
            </h4>
          </div>
        </div>
      </section>

      {/* ================= INDUSTRY SOFTWARES ================= */}
      <section className="di-industry-segments">
        <div className="di-container">
          <div className="di-text-center di-reveal">
            <span className="di-section-tag">Ready Products</span>
            <h2 className="di-heading">
              Software for <span>All Segments</span>
            </h2>
            <p className="di-section-desc">
              Ready-to-use and highly customizable software for more than 19 business sectors.
            </p>
          </div>

          <div className="di-industry-list-container di-reveal">
            {/* Search */}
            <div className="di-industry-search">
              <Search size={17} />
              <input
                type="text"
                placeholder="Search your business software..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <span className="di-search-count">
                {filtered.length} / {industrySoftwares.length}
              </span>
            </div>

            {/* Scrollable Grid */}
            <div className="di-industry-scroll">
              <div className="di-industry-grid">
                {filtered.length > 0 ? (
                  filtered.map((item, index) => (
                    <div className="di-industry-item" key={index}>
                      <div className="di-industry-number">
                        {String(industrySoftwares.indexOf(item) + 1).padStart(2, '0')}
                      </div>
                      <div className="di-industry-name">{item}</div>
                      <ArrowRight size={15} className="di-industry-arrow" />
                    </div>
                  ))
                ) : (
                  <div className="di-industry-empty">
                    No software found for "<strong>{query}</strong>" — but we can build it for you!
                  </div>
                )}
              </div>
            </div>

            <div className="di-industry-note">
              <div className="di-note-icon">
                <GraduationCap size={20} />
              </div>
              <h4>
                We also provide fully <strong>Customized software</strong> as per your specific
                business requirements!
              </h4>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Service;

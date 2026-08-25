import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  CheckCircle2,
  Target,
  Eye,
  Users,
  Award,
  Clock,
  ShieldCheck,
  Rocket,
  Headphones,
  Code2,
  ArrowRight,
  Phone,
  Star,
  Database,
  TrendingUp
} from 'lucide-react';
import './About.css';

const About = () => {
  const [counters, setCounters] = useState({
    clients: 0,
    projects: 0,
    years: 0,
    softwares: 0
  });

  const [activeCard, setActiveCard] = useState(null);
  const [activeMv, setActiveMv] = useState(null);

  const statsRef = useRef(null);
  const countedRef = useRef(false);

  /* ---------- Scroll Reveal ---------- */
  useEffect(() => {
    const items = document.querySelectorAll('.di-reveal');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('di-show');
        });
      },
      { threshold: 0.12 }
    );

    items.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  /* ---------- Counter ---------- */
  useEffect(() => {
    const start = () => {
      if (countedRef.current) return;
      countedRef.current = true;

      const targets = { clients: 500, projects: 750, years: 10, softwares: 20 };
      const steps = 60;
      const interval = 2000 / steps;
      let step = 0;

      const timer = setInterval(() => {
        step++;
        setCounters({
          clients: Math.floor((targets.clients / steps) * step),
          projects: Math.floor((targets.projects / steps) * step),
          years: Math.floor((targets.years / steps) * step),
          softwares: Math.floor((targets.softwares / steps) * step)
        });
        if (step >= steps) {
          setCounters(targets);
          clearInterval(timer);
        }
      }, interval);
    };

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          start();
          obs.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    if (statsRef.current) obs.observe(statsRef.current);
    return () => obs.disconnect();
  }, []);

  const whyCards = [
    {
      icon: <ShieldCheck size={25} />,
      title: 'Secure & Reliable',
      desc: 'We build highly secure software that protects your sensitive business data.'
    },
    {
      icon: <Clock size={25} />,
      title: 'On-Time Delivery',
      desc: 'We respect your time and deliver strictly within the agreed timeline.'
    },
    {
      icon: <CheckCircle2 size={25} />,
      title: 'GST Ready Reports',
      desc: 'One-click GST reports in Excel format with all billing & accounting software.'
    },
    {
      icon: <Headphones size={25} />,
      title: '1 Year Free Support',
      desc: 'Complete service and maintenance support free for one full year.'
    },
    {
      icon: <Code2 size={25} />,
      title: 'Full Customization',
      desc: 'Every module built exactly as per your workflow and business requirements.'
    },
    {
      icon: <Rocket size={25} />,
      title: 'Fast Performance',
      desc: 'Optimized database and clean code for smooth, lag-free daily operations.'
    }
  ];

  return (
    <main className="di-about">
      {/* ================= BANNER ================= */}
      <section className="di-page-banner">
        <div className="di-banner-overlay"></div>

        <div className="di-container di-banner-inner di-reveal">
          <span className="di-banner-badge">
            <Star size={13} fill="#f97316" color="#f97316" />
            Since 10+ Years
          </span>

          <h1>
            About <span>Dimension Infotech</span>
          </h1>

          <p>Innovating Digital Solutions for Modern Businesses Across India</p>
        </div>
      </section>

      {/* ================= MAIN ABOUT ================= */}
      <section className="di-about-main">
        <div className="di-container di-about-wrapper">
          <div className="di-about-content di-reveal">
            <span className="di-section-tag">Who We Are</span>

            <h2 className="di-heading">
              Your Trusted Partner in <span>Software Development</span> &amp; IT Consulting
            </h2>

            <p className="di-desc">
              <strong>Dimension Infotech</strong> is a premier IT company based in Raipur (C.G.),
              specializing in production-based software, custom web development, Android/iOS
              mobile applications, and complete digital transformation.
            </p>

            <p className="di-desc">
              With a strong track record of serving 500+ businesses across India, we deliver
              highly scalable, GST-ready and user-friendly software tailored exactly to your
              business needs — from Accounting &amp; Inventory to complex Production Management.
            </p>

            <ul className="di-about-features">
              <li><CheckCircle2 size={17} /> 100% Customized Software Solutions</li>
              <li><CheckCircle2 size={17} /> Easy to Operate &amp; User-Friendly Interface</li>
              <li><CheckCircle2 size={17} /> 1 Year of Free Service &amp; Maintenance</li>
              <li><CheckCircle2 size={17} /> Delivery within 7 Days (as per contract)</li>
            </ul>

            <div className="di-about-actions">
              <Link to="/services" className="di-btn-primary">
                Our Services <ArrowRight size={17} />
              </Link>
              <a href="tel:+918602373876" className="di-btn-glass">
                <Phone size={16} /> Call Now
              </a>
            </div>
          </div>

          <div className="di-about-image-grid di-reveal">
            <div className="di-img-box di-img-1">
              <div className="di-img-icon"><Users size={25} /></div>
              <h3>500+</h3>
              <p>Happy Clients</p>
            </div>

            <div className="di-img-box di-img-2">
              <div className="di-img-icon"><Award size={25} /></div>
              <h3>10+ Yrs</h3>
              <p>Of Excellence</p>
            </div>

            <div className="di-img-box di-img-3">
              <div className="di-img-icon"><Database size={25} /></div>
              <h3>20+</h3>
              <p>Software Products</p>
            </div>

            <div className="di-img-box di-img-4">
              <div className="di-img-icon"><TrendingUp size={25} /></div>
              <h3>750+</h3>
              <p>Projects Done</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="di-about-stats" ref={statsRef}>
        <div className="di-container">
          <div className="di-stats-grid">
            <div className="di-stat-box di-reveal">
              <Users size={25} />
              <h2>{counters.clients}+</h2>
              <p>Happy Clients</p>
            </div>

            <div className="di-stat-box di-reveal">
              <CheckCircle2 size={25} />
              <h2>{counters.projects}+</h2>
              <p>Projects Delivered</p>
            </div>

            <div className="di-stat-box di-reveal">
              <Clock size={25} />
              <h2>{counters.years}+</h2>
              <p>Years Experience</p>
            </div>

            <div className="di-stat-box di-reveal">
              <Database size={25} />
              <h2>{counters.softwares}+</h2>
              <p>Software Products</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= MISSION & VISION ================= */}
      <section className="di-mission-vision">
        <div className="di-container">
          <div className="di-text-center di-reveal">
            <span className="di-section-tag">Our Purpose</span>
            <h2 className="di-heading">
              Mission &amp; <span>Vision</span>
            </h2>
          </div>

          <div className="di-mv-grid">
            <div
              className={`di-mv-card di-reveal ${activeMv === 0 ? 'di-clicked' : ''}`}
              onClick={() => setActiveMv(activeMv === 0 ? null : 0)}
            >
              <div className="di-mv-icon"><Target size={25} /></div>
              <h3>Our Mission</h3>
              <p>
                To empower businesses of all sizes with smart, reliable and affordable
                technology solutions that automate operations, increase efficiency and
                simplify daily management.
              </p>
            </div>

            <div
              className={`di-mv-card di-reveal ${activeMv === 1 ? 'di-clicked' : ''}`}
              style={{ transitionDelay: '90ms' }}
              onClick={() => setActiveMv(activeMv === 1 ? null : 1)}
            >
              <div className="di-mv-icon"><Eye size={25} /></div>
              <h3>Our Vision</h3>
              <p>
                To become the leading software development and IT consulting firm globally,
                known for innovation, exceptional customer support and uncompromised quality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="di-why-us">
        <div className="di-container">
          <div className="di-text-center di-reveal">
            <span className="di-section-tag">Why Choose Us</span>
            <h2 className="di-heading">
              The Dimension Infotech <span>Advantage</span>
            </h2>
            <p className="di-section-desc">
              Everything you need to run your business smoothly — built, tested and supported by us.
            </p>
          </div>

          <div className="di-why-grid">
            {whyCards.map((c, i) => (
              <div
                key={i}
                className={`di-why-card di-reveal ${activeCard === i ? 'di-clicked' : ''}`}
                style={{ transitionDelay: `${i * 70}ms` }}
                onClick={() => setActiveCard(activeCard === i ? null : i)}
              >
                <div className="di-why-icon">{c.icon}</div>
                <h4>{c.title}</h4>
                <p>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      
    </main>
  );
};

export default About;
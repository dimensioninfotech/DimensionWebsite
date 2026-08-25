import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ExternalLink,
  Monitor,
  Smartphone,
  Database,
  Landmark,
  Truck,
  Package,
  GraduationCap,
  Star,
  ArrowRight,
  Phone,
  Layers,
  CheckCircle2,
  Calendar,
  X
} from 'lucide-react';
import './Portfolio.css';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selected, setSelected] = useState(null);

  /* ---------- Scroll Reveal ---------- */
  useEffect(() => {
    const items = document.querySelectorAll('.di-reveal');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('di-show');
        });
      },
      { threshold: 0.1 }
    );
    items.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [activeFilter]);

  /* ---------- Lock scroll on modal ---------- */
  useEffect(() => {
    document.body.style.overflow = selected ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [selected]);

  const projects = [
    {
      id: 1,
      title: 'Zila Panchayat Raipur',
      category: 'Website',
      badge: 'Government',
      icon: <Landmark size={22} />,
      img: 'https://images.unsplash.com/photo-1541872705-1f73c6400ec9?q=80&w=1600&auto=format&fit=crop',
      tech: ['React JS', 'Node.js', 'MySQL', 'REST API'],
      year: '2024',
      desc: 'Official government web application for Zila Panchayat Raipur with department management, scheme listings, tender notices, gallery and public grievance module.',
      points: [
        'Department & scheme management panel',
        'Tender / notice publishing system',
        'Public grievance registration & tracking',
        'Photo gallery with admin control'
      ]
    },
    {
      id: 2,
      title: 'EduSkillVision Web Portal',
      category: 'Website',
      badge: 'EdTech',
      icon: <GraduationCap size={22} />,
      img: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1600&auto=format&fit=crop',
      tech: ['React JS', 'Tailwind', 'Node.js', 'MongoDB'],
      year: '2024',
      desc: 'Complete company web application for EduSkillVision — course catalogue, student enrollment, batch management, certificates and admin dashboard.',
      points: [
        'Course & batch management',
        'Student enrollment + payment flow',
        'Auto certificate generation',
        'Admin analytics dashboard'
      ]
    },
    {
      id: 3,
      title: 'EduSkillVision Mobile App',
      category: 'Mobile App',
      badge: 'EdTech',
      icon: <Smartphone size={22} />,
      img: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1600&auto=format&fit=crop',
      tech: ['React Native', 'Firebase', 'REST API'],
      year: '2024',
      desc: 'Android & iOS application for students — live classes, notes download, attendance, test series and instant push notifications.',
      points: [
        'Live class & recorded video access',
        'Notes / PDF download section',
        'Online test series with results',
        'Push notification alerts'
      ]
    },
    {
      id: 4,
      title: 'Inventory Management System',
      category: 'Software',
      badge: 'ERP',
      icon: <Package size={22} />,
      img: 'https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=1600&auto=format&fit=crop',
      tech: ['React JS', 'Node.js', 'MySQL', 'Excel Export'],
      year: '2023',
      desc: 'Complete stock and inventory control software with purchase, sales, godown transfer, low-stock alerts and detailed Excel reporting.',
      points: [
        'Purchase, sales & stock ledger',
        'Multi-godown transfer support',
        'Low stock & expiry alerts',
        'One-click Excel / PDF reports'
      ]
    },
    {
      id: 5,
      title: 'Transport Management System',
      category: 'Software',
      badge: 'Logistics',
      icon: <Truck size={22} />,
      img: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=1600&auto=format&fit=crop',
      tech: ['React JS', 'Express', 'PostgreSQL'],
      year: '2023',
      desc: 'End-to-end transport & fleet management with builty (LR) entry, vehicle tracking, driver records, freight billing and party ledger.',
      points: [
        'Builty / LR entry & printing',
        'Vehicle & driver master records',
        'Freight billing with GST',
        'Party outstanding ledger'
      ]
    },
    {
      id: 6,
      title: 'GST Billing & Accounting',
      category: 'Software',
      badge: 'Finance',
      icon: <Database size={22} />,
      img: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1600&auto=format&fit=crop',
      tech: ['React JS', 'Node.js', 'MySQL'],
      year: '2023',
      desc: 'GST-ready billing software with invoicing, purchase entry, GSTR reports, balance sheet and complete accounting modules.',
      points: [
        'GST invoice & e-way bill ready',
        'GSTR-1 / GSTR-3B Excel reports',
        'Day book, ledger & balance sheet',
        'Barcode billing support'
      ]
    },
    {
      id: 7,
      title: 'E-Commerce Grocery App',
      category: 'Mobile App',
      badge: 'Retail',
      icon: <Smartphone size={22} />,
      img: 'https://images.unsplash.com/photo-1584008604720-9b2b0d8a2c99?q=80&w=1600&auto=format&fit=crop',
      tech: ['React Native', 'Firebase', 'Razorpay'],
      year: '2023',
      desc: 'Online grocery ordering app with product catalogue, cart, live order tracking, delivery boy app and online payment gateway.',
      points: [
        'Product catalogue & smart cart',
        'Live order tracking',
        'Delivery partner app',
        'Razorpay / UPI payments'
      ]
    },
    {
      id: 8,
      title: 'Hotel Management ERP',
      category: 'Software',
      badge: 'Hospitality',
      icon: <Layers size={22} />,
      img: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1600&auto=format&fit=crop',
      tech: ['MERN Stack', 'MongoDB'],
      year: '2022',
      desc: 'Hotel operations software covering room booking, check-in/out, restaurant POS, housekeeping and consolidated guest billing.',
      points: [
        'Room booking & availability chart',
        'Check-in / check-out management',
        'Restaurant POS integration',
        'Consolidated guest billing'
      ]
    },
    {
      id: 9,
      title: 'Medical & Pharmacy Software',
      category: 'Software',
      badge: 'Healthcare',
      icon: <Database size={22} />,
      img: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?q=80&w=1600&auto=format&fit=crop',
      tech: ['React JS', 'Node.js', 'MySQL'],
      year: '2022',
      desc: 'Pharmacy store management with batch-wise stock, expiry tracking, salt-wise search, GST billing and supplier management.',
      points: [
        'Batch & expiry-wise stock',
        'Salt / composition search',
        'Supplier & purchase returns',
        'GST-compliant billing'
      ]
    },
    {
      id: 10,
      title: 'Real Estate Corporate Site',
      category: 'Website',
      badge: 'Corporate',
      icon: <Monitor size={22} />,
      img: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1600&auto=format&fit=crop',
      tech: ['React JS', 'Tailwind', 'MongoDB'],
      year: '2023',
      desc: 'Modern real estate website with property listings, advanced filters, image galleries, enquiry forms and admin CMS.',
      points: [
        'Property listing with filters',
        'Gallery & floor plan viewer',
        'Lead / enquiry management',
        'SEO optimized pages'
      ]
    },
    {
      id: 11,
      title: 'School Management System',
      category: 'Software',
      badge: 'Education',
      icon: <GraduationCap size={22} />,
      img: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1600&auto=format&fit=crop',
      tech: ['React JS', 'Django', 'PostgreSQL'],
      year: '2022',
      desc: 'Complete school ERP with admission, fee collection, attendance, exam & result, timetable and SMS notifications to parents.',
      points: [
        'Admission & student records',
        'Fee collection with receipts',
        'Exam, marksheet & result',
        'SMS alerts to parents'
      ]
    },
    {
      id: 12,
      title: 'Restaurant POS & Billing',
      category: 'Software',
      badge: 'Food',
      icon: <Layers size={22} />,
      img: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1600&auto=format&fit=crop',
      tech: ['React JS', 'Node.js', 'MySQL'],
      year: '2023',
      desc: 'Restaurant & bar management with table orders, KOT printing, menu control, bar stock and daily sales summary.',
      points: [
        'Table-wise order & KOT print',
        'Menu & recipe management',
        'Bar / liquor stock control',
        'Daily sales summary'
      ]
    }
  ];

  const filters = ['All', 'Software', 'Website', 'Mobile App'];

  const filteredProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  const stats = [
    { num: '750+', label: 'Projects Delivered' },
    { num: '500+', label: 'Happy Clients' },
    { num: '20+', label: 'Software Products' },
    { num: '10+', label: 'Years Experience' }
  ];

  return (
    <main className="di-portfolio">
      {/* ================= BANNER ================= */}
      <section className="di-page-banner">
        <div className="di-banner-overlay"></div>

        <div className="di-container di-banner-inner di-reveal">
          <span className="di-banner-badge">
            <Star size={13} fill="#f97316" color="#f97316" />
            750+ Projects Delivered
          </span>

          <h1>
            Our <span>Portfolio</span>
          </h1>

          <p>Explore our best software, web applications and mobile apps built for real businesses.</p>
        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="di-pf-stats">
        <div className="di-container">
          <div className="di-pf-stats-grid">
            {stats.map((s, i) => (
              <div className="di-pf-stat di-reveal" key={i} style={{ transitionDelay: `${i * 70}ms` }}>
                <h3>{s.num}</h3>
                <p>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PROJECTS ================= */}
      <section className="di-portfolio-main">
        <div className="di-container">
          <div className="di-text-center di-reveal">
            <span className="di-section-tag">Recent Work</span>
            <h2 className="di-heading">
              Projects We Have <span>Delivered</span>
            </h2>
            <p className="di-section-desc">
              From government portals to enterprise ERP — here's a glimpse of what we build.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="di-portfolio-filters di-reveal">
            {filters.map((filter) => (
              <button
                key={filter}
                className={`di-filter-btn ${activeFilter === filter ? 'active' : ''}`}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
                <span className="di-filter-count">
                  {filter === 'All'
                    ? projects.length
                    : projects.filter((p) => p.category === filter).length}
                </span>
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="di-portfolio-grid">
            {filteredProjects.map((project, i) => (
              <div
                className="di-portfolio-card di-reveal"
                key={project.id}
                style={{ transitionDelay: `${i * 60}ms` }}
                onClick={() => setSelected(project)}
              >
                <div className="di-pf-media">
                  <img src={project.img} alt={project.title} loading="lazy" />
                  <div className="di-pf-shade"></div>

                  <span className="di-pf-badge">{project.badge}</span>

                  <div className="di-pf-icon">{project.icon}</div>

                  <div className="di-pf-hover">
                    <span className="di-pf-hover-btn">
                      View Details <ExternalLink size={15} />
                    </span>
                  </div>
                </div>

                <div className="di-portfolio-info">
                  <div className="di-pf-meta">
                    <span className="di-portfolio-category">{project.category}</span>
                    <span className="di-pf-year">
                      <Calendar size={12} /> {project.year}
                    </span>
                  </div>

                  <h3>{project.title}</h3>
                  <p className="di-pf-desc">{project.desc}</p>

                  <div className="di-pf-tech">
                    {project.tech.slice(0, 3).map((t, k) => (
                      <span className="di-tag" key={k}>{t}</span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="di-tag di-tag-more">+{project.tech.length - 3}</span>
                    )}
                  </div>

                  <button className="di-portfolio-link">
                    View Details <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    

      {/* ================= MODAL ================= */}
      {selected && (
        <div className="di-pf-modal" onClick={() => setSelected(null)}>
          <div className="di-pf-modal-box" onClick={(e) => e.stopPropagation()}>
            <button className="di-pf-close" onClick={() => setSelected(null)}>
              <X size={18} />
            </button>

            <div className="di-pf-modal-img">
              <img src={selected.img} alt={selected.title} />
              <div className="di-pf-modal-shade"></div>
              <span className="di-pf-badge">{selected.badge}</span>
            </div>

            <div className="di-pf-modal-body">
              <div className="di-pf-meta">
                <span className="di-portfolio-category">{selected.category}</span>
                <span className="di-pf-year">
                  <Calendar size={12} /> {selected.year}
                </span>
              </div>

              <h3>{selected.title}</h3>
              <p className="di-pf-desc">{selected.desc}</p>

              <h5 className="di-pf-sub">Key Features</h5>
              <ul className="di-pf-points">
                {selected.points.map((p, i) => (
                  <li key={i}><CheckCircle2 size={15} /> {p}</li>
                ))}
              </ul>

              <h5 className="di-pf-sub">Technology Used</h5>
              <div className="di-pf-tech">
                {selected.tech.map((t, i) => (
                  <span className="di-tag" key={i}>{t}</span>
                ))}
              </div>

              <div className="di-pf-modal-actions">
                <Link to="/contact" className="di-btn-primary" onClick={() => setSelected(null)}>
                  Build Similar <ArrowRight size={16} />
                </Link>
                <a href="tel:+918602373876" className="di-btn-outline">
                  <Phone size={15} /> Talk to Expert
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default Portfolio;
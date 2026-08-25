import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
    Code2,
    Smartphone,
    Globe,
    ShoppingCart,
    Receipt,
    Settings,
    Database,
    Users,
    Award,
    Clock,
    Headphones,
    CheckCircle2,
    ArrowRight,
    Play,
    TrendingUp,
    Shield,
    Zap,
    Star,
    Building2,
    Hospital,
    Car,
    GraduationCap,
    Hotel,
    UtensilsCrossed,
    Factory,
    Store,
    Phone
} from 'lucide-react';
import './Home.css';

const Home = () => {
    const [counters, setCounters] = useState({
        clients: 0,
        projects: 0,
        years: 0,
        softwares: 0
    });

    const [activeCard, setActiveCard] = useState(null);
    const [activeFeature, setActiveFeature] = useState(null);

    const statsRef = useRef(null);
    const countedRef = useRef(false);

    /* ---------- Scroll Reveal ---------- */
    useEffect(() => {
        const revealItems = document.querySelectorAll('.di-reveal');

        const revealObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('di-show');
                    }
                });
            },
            { threshold: 0.12 }
        );

        revealItems.forEach((item) => revealObserver.observe(item));
        return () => revealObserver.disconnect();
    }, []);

    /* ---------- Counter ---------- */
    useEffect(() => {
        const startCounter = () => {
            if (countedRef.current) return;
            countedRef.current = true;

            const targets = { clients: 500, projects: 750, years: 10, softwares: 20 };
            const duration = 2000;
            const steps = 60;
            const interval = duration / steps;
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

        const statsObserver = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    startCounter();
                    statsObserver.disconnect();
                }
            },
            { threshold: 0.25 }
        );

        if (statsRef.current) statsObserver.observe(statsRef.current);
        return () => statsObserver.disconnect();
    }, []);

    const services = [
        {
            icon: <Code2 size={26} />,
            title: 'Custom Software',
            desc: 'Tailor-made business software with GST, inventory & production management.'
        },
        {
            icon: <Globe size={26} />,
            title: 'Website Development',
            desc: 'Modern, responsive, fast-loading & SEO-friendly websites for your brand.'
        },
        {
            icon: <Smartphone size={26} />,
            title: 'Android & iOS Apps',
            desc: 'Business mobile apps for Android and iOS with smooth user experience.'
        },
        {
            icon: <ShoppingCart size={26} />,
            title: 'E-Commerce Solutions',
            desc: 'Online stores with product management, cart, payment and order system.'
        },
        {
            icon: <Receipt size={26} />,
            title: 'GST & Tax Software',
            desc: 'GST billing, accounting, stock, reports and invoice-ready software.'
        },
        {
            icon: <Settings size={26} />,
            title: 'Software Customization',
            desc: 'Modify existing software as per your workflow and business requirements.'
        }
    ];

    const industries = [
        { icon: <Store size={23} />, name: 'FMCG & Kirana' },
        { icon: <Hospital size={23} />, name: 'Medical & Pharma' },
        { icon: <Car size={23} />, name: 'Automobile' },
        { icon: <GraduationCap size={23} />, name: 'School Management' },
        { icon: <Hotel size={23} />, name: 'Hotel Management' },
        { icon: <UtensilsCrossed size={23} />, name: 'Restaurant & Bar' },
        { icon: <Building2 size={23} />, name: 'Real Estate' },
        { icon: <Factory size={23} />, name: 'Production Units' }
    ];

    const features = [
        {
            icon: <Zap size={23} />,
            title: 'Fast Delivery',
            desc: 'We deliver projects quickly with proper planning and quality testing.'
        },
        {
            icon: <Shield size={23} />,
            title: 'Secure & Reliable',
            desc: 'Strong security, clean database structure and reliable performance.'
        },
        {
            icon: <Headphones size={23} />,
            title: '1 Year Support',
            desc: 'Free service and maintenance support for one year after delivery.'
        },
        {
            icon: <TrendingUp size={23} />,
            title: 'Business Growth',
            desc: 'Solutions designed to improve operations, speed and business growth.'
        }
    ];

    return (
        <main className="di-home">
            {/* ================= HERO ================= */}
            <section className="di-hero">
                <div className="di-hero-overlay"></div>

                <div className="di-hero-container">
                    <div className="di-hero-content di-reveal">
                        <span className="di-hero-badge">
                            <Star size={14} fill="#f97316" color="#f97316" />
                            Trusted by 500+ Businesses
                        </span>

                        <h1 className="di-hero-title">
                            Innovative <span>Software</span>, Websites &{' '}
                            <span>Mobile Apps</span> for Your Business
                        </h1>

                        <p className="di-hero-desc">
                            Dimension Infotech provides fully customized production-based software,
                            GST billing, inventory management, e-commerce websites, and Android/iOS
                            mobile applications — built for every industry, delivered on time.
                        </p>

                        <div className="di-hero-actions">
                            <Link to="/services" className="di-btn-primary">
                                Explore Services <ArrowRight size={18} />
                            </Link>

                            <Link to="/contact" className="di-btn-glass">
                                <Play size={16} /> Get Free Demo
                            </Link>
                        </div>

                        <div className="di-hero-highlights">
                            <div className="di-highlight-item">
                                <CheckCircle2 size={16} /> GST Ready
                            </div>
                            <div className="di-highlight-item">
                                <CheckCircle2 size={16} /> Fully Customizable
                            </div>
                            <div className="di-highlight-item">
                                <CheckCircle2 size={16} /> 1 Year Free Service
                            </div>
                        </div>
                    </div>

                    <div className="di-hero-visual di-reveal">
                        <div className="di-hero-glass-card di-card-1">
                            <div className="di-glass-icon">
                                <Database size={24} />
                            </div>
                            <div>
                                <h4>20+ Softwares</h4>
                                <p>Ready to Deploy</p>
                            </div>
                        </div>

                        <div className="di-hero-glass-card di-card-2">
                            <div className="di-glass-icon">
                                <Smartphone size={24} />
                            </div>
                            <div>
                                <h4>Mobile Apps</h4>
                                <p>Android & iOS</p>
                            </div>
                        </div>

                        <div className="di-hero-glass-card di-card-3">
                            <div className="di-glass-icon">
                                <Award size={24} />
                            </div>
                            <div>
                                <h4>10+ Years</h4>
                                <p>Experience</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= STATS ================= */}
            <section className="di-stats" ref={statsRef}>
                <div className="di-container">
                    <div className="di-stats-grid">
                        <div className="di-stat-box di-reveal">
                            <Users size={26} />
                            <h2>{counters.clients}+</h2>
                            <p>Happy Clients</p>
                        </div>

                        <div className="di-stat-box di-reveal">
                            <CheckCircle2 size={26} />
                            <h2>{counters.projects}+</h2>
                            <p>Projects Delivered</p>
                        </div>

                        <div className="di-stat-box di-reveal">
                            <Clock size={26} />
                            <h2>{counters.years}+</h2>
                            <p>Years Experience</p>
                        </div>

                        <div className="di-stat-box di-reveal">
                            <Database size={26} />
                            <h2>{counters.softwares}+</h2>
                            <p>Software Products</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= SERVICES ================= */}
            <section className="di-services">
                <div className="di-container">
                    <div className="di-section-head di-reveal">
                        <span className="di-section-tag">Our Services</span>
                        <h2 className="di-section-title">
                            What We <span>Offer</span>
                        </h2>
                        <p className="di-section-desc">
                            End-to-end IT solutions built with the latest technology to power your business growth.
                        </p>
                    </div>

                    <div className="di-services-grid">
                        {services.map((item, index) => (
                            <div
                                className={`di-service-card di-reveal ${activeCard === index ? 'di-clicked' : ''}`}
                                key={index}
                                style={{ transitionDelay: `${index * 70}ms` }}
                                onClick={() => setActiveCard(activeCard === index ? null : index)}
                            >
                                <div className="di-service-icon">{item.icon}</div>

                                <h3>{item.title}</h3>
                                <p>{item.desc}</p>

                                <Link to="/services" className="di-service-link">
                                    Learn More <ArrowRight size={14} />
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ================= INDUSTRIES ================= */}
            <section className="di-industries">
                <div className="di-container">
                    <div className="di-section-head di-reveal">
                        <span className="di-section-tag">Industries We Serve</span>
                        <h2 className="di-section-title">
                            Software for <span>Every Business</span>
                        </h2>
                        <p className="di-section-desc">
                            We provide specialized software solutions for 20+ industry segments.
                        </p>
                    </div>
                </div>

                <div className="di-industries-marquee di-reveal">
                    <div className="di-industries-track">
                        {[...industries, ...industries, ...industries].map((ind, i) => (
                            <div className="di-industry-card" key={i}>
                                <div className="di-industry-icon">{ind.icon}</div>
                                <h4>{ind.name}</h4>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ================= WHY CHOOSE US ================= */}
            <section className="di-why">
                <div className="di-container">
                    <div className="di-why-wrap">
                        <div className="di-why-left di-reveal">
                            <span className="di-section-tag">Why Choose Us</span>

                            <h2 className="di-section-title">
                                We Build <span>Business-Ready</span> Solutions
                            </h2>

                            <p className="di-why-desc">
                                With over a decade of experience serving 500+ clients across India,
                                Dimension Infotech stands as a trusted name in software development
                                and IT consulting. From simple billing software to complex ERP systems,
                                we deliver quality at every step.
                            </p>

                            <ul className="di-why-list">
                                <li><CheckCircle2 size={16} /> User-friendly &amp; easy to operate</li>
                                <li><CheckCircle2 size={16} /> Excel reports &amp; GST compliance</li>
                                <li><CheckCircle2 size={16} /> Complete customization support</li>
                                <li><CheckCircle2 size={16} /> On-time delivery guarantee</li>
                            </ul>

                            <Link to="/about" className="di-btn-primary">
                                Know More About Us <ArrowRight size={18} />
                            </Link>
                        </div>

                        <div className="di-why-right">
                            {features.map((f, i) => (
                                <div
                                    className={`di-feature-box di-reveal ${activeFeature === i ? 'di-clicked' : ''}`}
                                    key={i}
                                    style={{ transitionDelay: `${i * 80}ms` }}
                                    onClick={() => setActiveFeature(activeFeature === i ? null : i)}
                                >
                                    <div className="di-feature-icon">{f.icon}</div>
                                    <h4>{f.title}</h4>
                                    <p>{f.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            
        </main>
    );
};

export default Home;
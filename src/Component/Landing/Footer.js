import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ArrowRight, Clock, Globe, GraduationCap } from 'lucide-react';
import logo from '../../assects/image.png';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  /* ---------- MAIN CONTACT ---------- */
  const MAIN_TEL = '+916262913378';
  const WHATSAPP = '916262913378';
  const WA_TEXT = 'Hello%20Dimension%20Infotech%2C%20I%20need%20software%20for%20my%20business.';

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  return (
    <>
      <footer className="di-footer">
        {/* ============ Top CTA Strip ============ */}
        <div className="di-footer-cta">
          <div className="di-footer-container">
            <div className="di-footer-cta-inner">
              <div className="di-footer-cta-text">
                <h3>Need Custom Software for Your Business?</h3>
                <p>Talk to our experts today — free consultation available.</p>
              </div>
              <div className="di-footer-cta-btns">
                <a href={`tel:${MAIN_TEL}`} className="di-footer-cta-btn di-footer-cta-call">
                  <Phone size={17} /> Call Now
                </a>
                <Link to="/contact" onClick={scrollToTop} className="di-footer-cta-btn di-footer-cta-quote">
                  Get a Quote <ArrowRight size={17} />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* ============ Main Footer ============ */}
        <div className="di-footer-main">
          <div className="di-footer-container">
            <div className="di-footer-grid">

              {/* Column 1 - Brand */}
              <div className="di-footer-col di-footer-about">
                <Link to="/" onClick={scrollToTop} className="di-footer-brand">
                  <img src={logo} alt="Dimension Infotech" className="di-footer-logo-img" />
                </Link>

                <p className="di-footer-about-text">
                  We provide production-based software, websites, Android/iOS apps,
                  e-commerce &amp; GST solutions with full customization for every industry.
                </p>

                {/* Admission Badge */}
                <Link to="/training" onClick={scrollToTop} className="di-footer-admission">
                  <span className="di-adm-icon"><GraduationCap size={17} /></span>
                  <span className="di-adm-text">
                    <strong>Admissions Open</strong>
                    Training &amp; Internship
                  </span>
                  <ArrowRight size={15} />
                </Link>

                <div className="di-footer-social">
                  {/* WhatsApp */}
                  <a
                    href={`https://wa.me/${WHATSAPP}?text=${WA_TEXT}`}
                    target="_blank"
                    rel="noreferrer"
                    className="di-footer-social-link di-social-wa"
                    aria-label="WhatsApp"
                  >
                    <svg width="17" height="17" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884a9.82 9.82 0 0 1 6.988 2.896 9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                    </svg>
                  </a>

                  {/* Instagram */}
                  <a href="https://instagram.com" target="_blank" rel="noreferrer" className="di-footer-social-link" aria-label="Instagram">
                    <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Column 2 - Quick Links */}
              <div className="di-footer-col">
                <h4 className="di-footer-heading">Quick Links</h4>
                <ul className="di-footer-links">
                  <li><Link to="/" onClick={scrollToTop}>Home</Link></li>
                  <li><Link to="/about" onClick={scrollToTop}>About Us</Link></li>
                  <li><Link to="/services" onClick={scrollToTop}>Our Services</Link></li>
                  <li><Link to="/portfolio" onClick={scrollToTop}>Portfolio</Link></li>
                  <li>
                    <Link to="/training" onClick={scrollToTop} className="di-link-hot">
                      Training &amp; Internship
                      <span className="di-hot-tag">New</span>
                    </Link>
                  </li>
                  <li><Link to="/contact" onClick={scrollToTop}>Contact Us</Link></li>
                </ul>
              </div>

              {/* Column 3 - Services */}
              <div className="di-footer-col">
                <h4 className="di-footer-heading">Our Services</h4>
                <ul className="di-footer-links">
                  <li><Link to="/services" onClick={scrollToTop}>Custom Software</Link></li>
                  <li><Link to="/services" onClick={scrollToTop}>Website Development</Link></li>
                  <li><Link to="/services" onClick={scrollToTop}>Android &amp; iOS Apps</Link></li>
                  <li><Link to="/services" onClick={scrollToTop}>E-Commerce Solutions</Link></li>
                  <li><Link to="/services" onClick={scrollToTop}>GST &amp; Tax Software</Link></li>
                  <li><Link to="/training" onClick={scrollToTop}>Full Stack Training</Link></li>
                </ul>
              </div>

              {/* Column 4 - Contact */}
              <div className="di-footer-col">
                <h4 className="di-footer-heading">Contact Info</h4>
                <ul className="di-footer-contact-list">
                  <li>
                    <MapPin size={16} />
                    <span>
                      Shop No. 34, 1st Floor, Samridhi Market,
                      Budha Para, Raipur (C.G.) - 492001
                    </span>
                  </li>

                  <li>
                    <Phone size={16} />
                    <div className="di-footer-phones-grid">
                      <a href="tel:+916262913378" className="di-main-no">+91-62629 13378</a>
                      <a href="tel:+919098474135">+91-90984 74135</a>
                      <a href="tel:+918602373876">+91-86023 73876</a>
                      <a href="tel:+917470898235">+91-74708 98235</a>
                    </div>
                  </li>

                  <li>
                    <Mail size={16} />
                    <div className="di-footer-mails">
                      <a href="mailto:infotechdimension@gmail.com">infotechdimension@gmail.com</a>
                      <a href="mailto:support@dimensioninfotech.com">support@dimensioninfotech.com</a>
                    </div>
                  </li>

                  <li>
                    <Globe size={16} />
                    <a href="https://www.dimensioninfotech.com" target="_blank" rel="noreferrer">
                      www.dimensioninfotech.com
                    </a>
                  </li>

                  <li>
                    <Clock size={16} />
                    <span>Mon - Sat: 10:00 AM - 7:00 PM</span>
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </div>

        {/* ============ Bottom Bar ============ */}
        <div className="di-footer-bottom">
          <div className="di-footer-container">
            <div className="di-footer-bottom-inner">
              <p>
                © {currentYear} <strong>Dimension Infotech</strong>. All Rights Reserved.
              </p>
              <p className="di-footer-bottom-web">
                <a href="https://www.dimensioninfotech.com" target="_blank" rel="noreferrer">
                  www.dimensioninfotech.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* ============ Floating WhatsApp Button ============ */}
      <a
        href={`https://wa.me/${WHATSAPP}?text=${WA_TEXT}`}
        target="_blank"
        rel="noreferrer"
        className="di-wa-float"
        aria-label="Chat on WhatsApp"
      >
        <svg width="27" height="27" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884a9.82 9.82 0 0 1 6.988 2.896 9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
        </svg>
        <span className="di-wa-pulse"></span>
      </a>
    </>
  );
};

export default Footer;

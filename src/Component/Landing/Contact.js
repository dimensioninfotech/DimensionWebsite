import React, { useEffect, useState } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Send,
  Clock,
  Globe,
  Star,
  MessageCircle,
  ArrowRight,
  Loader2
} from 'lucide-react';
import './Contact.css';

// ⚠️ Configuration Settings
const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzPq1Fsv7a06OsjUosY3ePEs9heA5KA1yBU8Rpxcv1geOzjNgTfddPqVj3hufBlLUe1/exec";
const SECRET_TOKEN = "MySecretToken12345";

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
    website_hp: '' // Honeypot Field (Spam protection)
  });

  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

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
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  /* ---------- Real Form Submission ---------- */
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setErrorMessage('');

    // Security Check: Honeypot trigger check
    if (form.website_hp) {
      setSending(false);
      setSent(true);
      return;
    }

    try {
      const response = await fetch(SCRIPT_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8'
        },
        body: JSON.stringify({
          token: SECRET_TOKEN,
          name: form.name,
          email: form.email,
          phone: form.phone,
          service: form.service,
          message: form.message,
          website_hp: form.website_hp
        })
      });

      const result = await response.json();

      if (result.result === 'success') {
        setSent(true);
        setForm({ name: '', email: '', phone: '', service: '', message: '', website_hp: '' });
        setTimeout(() => setSent(false), 6000);
      } else {
        setErrorMessage('Failed to submit. Please try again.');
      }
    } catch (err) {
      setErrorMessage('Network error! Please try again later.');
    } finally {
      setSending(false);
    }
  };

  /* ---------- CONTACT NUMBERS ---------- */
  const MAIN_PHONE = '+91-62629 13378';
  const MAIN_TEL = '+916262913378';
  const WHATSAPP = '916262913378';

  const phones = [
    { no: '+91-62629 13378', tel: '+916262913378', main: true },
   
    { no: '+91-86023 73876', tel: '+918602373876', main: false },
   
  ];

  return (
    <main className="di-contact">
      {/* ================= BANNER ================= */}
      <section className="di-page-banner">
        <div className="di-banner-overlay"></div>

        <div className="di-container di-banner-inner di-reveal">
          <span className="di-banner-badge">
            <Star size={13} fill="#f97316" color="#f97316" />
            Free Consultation Available
          </span>

          <h1>
            Get in <span>Touch</span>
          </h1>

          <p>We are here to help you with your next software, website and mobile app project.</p>
        </div>
      </section>

      {/* ================= QUICK CONTACT STRIP ================= */}
      <section className="di-quick-strip">
        <div className="di-container">
          <div className="di-quick-grid">
            <a href={`tel:${MAIN_TEL}`} className="di-quick-card di-reveal">
              <div className="di-quick-icon"><Phone size={20} /></div>
              <div>
                <h4>Call Us</h4>
                <p>{MAIN_PHONE}</p>
              </div>
            </a>

            <a
              href={`https://wa.me/${WHATSAPP}?text=Hello%20Dimension%20Infotech%2C%20I%20need%20software%20for%20my%20business.`}
              target="_blank"
              rel="noreferrer"
              className="di-quick-card di-reveal di-quick-wa"
              style={{ transitionDelay: '70ms' }}
            >
              <div className="di-quick-icon"><MessageCircle size={20} /></div>
              <div>
                <h4>WhatsApp</h4>
                <p>{MAIN_PHONE}</p>
              </div>
            </a>

            <a
              href="mailto:infotechdimension@gmail.com"
              className="di-quick-card di-reveal"
              style={{ transitionDelay: '140ms' }}
            >
              <div className="di-quick-icon"><Mail size={20} /></div>
              <div>
                <h4>Email Us</h4>
                <p>infotechdimension@gmail.com</p>
              </div>
            </a>

            <div className="di-quick-card di-reveal" style={{ transitionDelay: '210ms' }}>
              <div className="di-quick-icon"><Clock size={20} /></div>
              <div>
                <h4>Working Hours</h4>
                <p>Mon - Sat: 10 AM - 7 PM</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= MAIN ================= */}
      <section className="di-contact-main">
        <div className="di-container">
          <div className="di-contact-wrapper">

            {/* LEFT — INFO */}
            <div className="di-contact-info di-reveal">
              <span className="di-section-tag">Contact Us</span>
              <h2 className="di-heading">
                Let's Discuss Your <span>Project</span>
              </h2>
              <p className="di-desc">
                Reach out to Dimension Infotech for customized software, GST billing,
                websites or Android / iOS app development inquiries.
              </p>

              <div className="di-info-box">
                <div className="di-info-icon"><MapPin size={20} /></div>
                <div>
                  <h4>Our Office</h4>
                  <p>
                    Shop No. 34, 1st Floor, Samridhi Market,<br />
                    Budha Para, Raipur (C.G.) - 492001, India
                  </p>
                </div>
              </div>

              <div className="di-info-box">
                <div className="di-info-icon"><Phone size={20} /></div>
                <div>
                  <h4>Call Us</h4>
                  <div className="di-phone-grid">
                    {phones.map((p, i) => (
                      <a key={i} href={`tel:${p.tel}`} className={p.main ? 'di-main-no' : ''}>
                        {p.no}
                        {p.main && <span className="di-main-tag">Main</span>}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <div className="di-info-box">
                <div className="di-info-icon"><Mail size={20} /></div>
                <div>
                  <h4>Email Us</h4>
                  <div className="di-mail-list">
                    <a href="mailto:infotechdimension@gmail.com">infotechdimension@gmail.com</a>
                    <a href="mailto:support@dimensioninfotech.com">support@dimensioninfotech.com</a>
                  </div>
                </div>
              </div>

              <div className="di-info-box">
                <div className="di-info-icon"><Globe size={20} /></div>
                <div>
                  <h4>Website</h4>
                  <div className="di-mail-list">
                    <a href="https://www.dimensioninfotech.com" target="_blank" rel="noreferrer">
                      www.dimensioninfotech.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT — FORM */}
            <div className="di-contact-form-container di-reveal">
              <h3>Send us a Message</h3>
              <p className="di-form-sub">Fill the form — we'll get back to you within 24 hours.</p>

              {sent && (
                <div className="di-form-success">
                  Thank you! Your inquiry has been submitted successfully.
                </div>
              )}

              {errorMessage && (
                <div className="di-form-error" style={{ color: '#ef4444', marginBottom: '15px' }}>
                  {errorMessage}
                </div>
              )}

              <form className="di-contact-form" onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="website_hp"
                  value={form.website_hp}
                  onChange={handleChange}
                  style={{ display: 'none' }}
                  tabIndex="-1"
                  autoComplete="off"
                />

                <div className="di-form-group">
                  <label>Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                  />
                </div>

                <div className="di-form-row">
                  <div className="di-form-group">
                    <label>Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      required
                    />
                  </div>

                  <div className="di-form-group">
                    <label>Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+91 00000 00000"
                      required
                    />
                  </div>
                </div>

                <div className="di-form-group">
                  <label>Service Required *</label>
                  <select name="service" value={form.service} onChange={handleChange} required>
                    <option value="" disabled>Select a service</option>
                    <option value="software">Custom Software / GST Billing</option>
                    <option value="website">Website Development</option>
                    <option value="app">Android / iOS Mobile App</option>
                    <option value="ecommerce">E-Commerce Solution</option>
                    <option value="training">Training / Internship</option>
                    <option value="other">Other / General Inquiry</option>
                  </select>
                </div>

                <div className="di-form-group">
                  <label>Your Requirement *</label>
                  <textarea
                    rows="4"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Describe your requirement in brief..."
                    required
                  ></textarea>
                </div>

                <button type="submit" className="di-submit-btn" disabled={sending}>
                  {sending ? (
                    <>
                      <Loader2 size={17} className="di-spin" /> Sending...
                    </>
                  ) : (
                    <>
                      Submit Inquiry <Send size={17} />
                    </>
                  )}
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* ================= MAP + VISIT ================= */}
      <section className="di-map-section">
        <div className="di-container">
          <div className="di-text-center di-reveal">
            <span className="di-section-tag">Find Us</span>
            <h2 className="di-heading">
              Visit Our <span>Office</span>
            </h2>
            <p className="di-desc" style={{ textAlign: 'center' }}>
              Located in the heart of Raipur — walk in anytime during working hours.
            </p>
          </div>

          <div className="di-map-wrapper di-reveal">
            <div className="di-map-box">
              <iframe
                title="Dimension Infotech Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d118991.60339241943!2d81.56455171732626!3d21.261882520668045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a28dda23be28229%3A0x163ee1204ff9e240!2sRaipur%2C%20Chhattisgarh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            <div className="di-visit-box">
              <div className="di-visit-icon"><MapPin size={24} /></div>

              <h3>Dimension Infotech</h3>
              <p className="di-visit-addr">
                Ring Road Near Hotel Emerald Kavir Bhawan<br />
                Khushalpur Chaowk, Raipur (Chhattisgarh) - 492001, India
              </p>

              <ul className="di-visit-list">
                <li><Clock size={15} /> Mon - Sat: 10:00 AM - 7:00 PM</li>
                <li><Phone size={15} /> {MAIN_PHONE} <span className="di-main-tag">Main</span></li>
                <li><Phone size={15} /> +91-86023 73876</li>
                <li><Mail size={15} /> infotechdimension@gmail.com</li>
                <li><Globe size={15} /> www.dimensioninfotech.com</li>
              </ul>

              <div className="di-visit-actions">
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=Samridhi+Market+Budha+Para+Raipur+Chhattisgarh"
                  target="_blank"
                  rel="noreferrer"
                  className="di-btn-primary"
                >
                  Get Directions <ArrowRight size={16} />
                </a>

                <a
                  href={`https://wa.me/${WHATSAPP}?text=Hello%20Dimension%20Infotech`}
                  target="_blank"
                  rel="noreferrer"
                  className="di-btn-outline"
                >
                  <MessageCircle size={15} /> WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;

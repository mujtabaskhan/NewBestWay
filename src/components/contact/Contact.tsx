"use client";

import { useState } from "react";

// ─── Inline styles / CSS ────────────────────────────────────────────────────
const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Roboto+Serif:ital,wght@0,300;0,400;0,600;1,400&family=DM+Sans:wght@300;400;500;600&display=swap');

  .contact-root {
    --cream: #ffffff;
    --ink: #0f0f0f;
    --muted: #6b6b6b;
    --accent: #027C99;
    --accent-light: #e6f4f8;
    --border: #e8e4de;
    --card-bg: #fafaf8;
    font-family: 'DM Sans', sans-serif;
    background: var(--cream);
    color: var(--ink);
  }



  /* ── Layout ── */
  .contact-container {
    max-width: 1160px;
    margin: 0 auto;
    padding: 0 32px;
  }

  .contact-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2px;
    border: 2px solid var(--border);
    border-radius: 20px;
    overflow: hidden;
    margin-bottom: 2px;
  }

  @media (max-width: 768px) {
    .contact-grid {
      grid-template-columns: 1fr;
    }
  }

  /* ── Info Card ── */
  .info-card {
    background: var(--card-bg);
    padding: 60px 48px;
    display: flex;
    flex-direction: column;
    gap: 44px;
  }

  .info-section-label {
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--accent);
    margin-bottom: 20px;
    display: block;
  }

  .info-item {
    display: flex;
    align-items: flex-start;
    gap: 18px;
    text-decoration: none;
    color: inherit;
    transition: opacity 0.2s;
  }
  .info-item:hover { opacity: 0.7; }

  .info-icon {
    width: 44px;
    height: 44px;
    border-radius: 12px;
    border: 1.5px solid var(--border);
    background: white;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    color: var(--accent);
  }

  .info-label {
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: var(--muted);
    margin-bottom: 4px;
  }
  .info-value {
    font-size: 1rem;
    font-weight: 500;
    color: var(--ink);
    line-height: 1.4;
  }
  .info-value-sub {
    font-size: 0.85rem;
    color: var(--muted);
    font-weight: 300;
    margin-top: 2px;
  }

  .info-divider {
    width: 100%;
    height: 1px;
    background: var(--border);
  }

  /* ── Map Card ── */
  .map-card {
    position: relative;
    overflow: hidden;
    min-height: 420px;
  }
  .map-card iframe {
    width: 100%;
    height: 100%;
    border: none;
    display: block;
    position: absolute;
    inset: 0;
  }
  .map-overlay-label {
    position: absolute;
    bottom: 20px;
    left: 20px;
    background: white;
    border: 1.5px solid var(--border);
    padding: 10px 16px;
    border-radius: 10px;
    font-size: 0.8rem;
    font-weight: 600;
    color: var(--ink);
    pointer-events: none;
    box-shadow: 0 4px 20px rgba(0,0,0,0.08);
  }

  /* ── Calendly Section ── */
  .calendly-section {
    border: 2px solid var(--border);
    border-radius: 20px;
    overflow: hidden;
    margin-top: 24px;
    margin-bottom: 80px;
  }

  .calendly-header {
    padding: 40px 48px 36px;
    background: var(--card-bg);
    border-bottom: 2px solid var(--border);
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 24px;
    flex-wrap: wrap;
  }

  .calendly-title-group {}
  .calendly-title {
    font-family: 'Roboto Serif', serif;
    font-size: 1.9rem;
    font-weight: 400;
    margin: 0 0 6px;
    color: var(--ink);
  }
  .calendly-subtitle {
    color: var(--muted);
    font-size: 0.9rem;
    font-weight: 300;
    margin: 0;
  }

  .calendly-badge {
    display: flex;
    align-items: center;
    gap: 8px;
    background: var(--accent-light);
    border: 1.5px solid var(--accent);
    padding: 10px 18px;
    border-radius: 100px;
    font-size: 0.8rem;
    font-weight: 600;
    color: #014f61;
    white-space: nowrap;
  }
  .calendly-badge-dot {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: #014f61;
    animation: pulse 2s infinite;
  }
  @keyframes pulse {
    0%, 100% { opacity: 1; transform: scale(1); }
    50% { opacity: 0.5; transform: scale(0.8); }
  }

  .calendly-embed-wrapper {
    background: white;
    min-height: 700px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }
  .calendly-embed-wrapper iframe {
    width: 100%;
    min-height: 700px;
    border: none;
  }

  /* fallback placeholder shown when JS disabled */
  .calendly-placeholder {
    text-align: center;
    padding: 80px 40px;
  }
  .calendly-placeholder-icon {
    width: 64px;
    height: 64px;
    border-radius: 20px;
    background: var(--accent-light);
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 24px;
    color: var(--accent);
  }
  .calendly-cta {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    background: var(--ink);
    color: white;
    text-decoration: none;
    padding: 14px 28px;
    border-radius: 100px;
    font-size: 0.9rem;
    font-weight: 600;
    letter-spacing: 0.02em;
    margin-top: 24px;
    transition: background 0.2s, transform 0.2s;
  }
  .calendly-cta:hover {
    background: #027C99;
    transform: translateY(-2px);
  }
`;

// ─── SVG Icons ───────────────────────────────────────────────────────────────
const IconPhone = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.68A2 2 0 012 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
  </svg>
);

const IconMail = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

const IconMapPin = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const IconCalendar = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

const IconArrow = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
  </svg>
);

// ─── Config — edit these ────────────────────────────────────────────────────
const CONTACT_INFO = {
  address: {
    line1: "1 W,34th Street, Suite 201",
    line2: "New York, NY 10001",
  },
  address2: {
    line1: "15 Prospect Lane, Suite 1C-9",
    line2: "Colonia, NJ 07067",
  },
  phone: "(212) 714-1100",
  phone2: "(732) 564-6965",  // ← add this
  email: "newbestwayinc@gmail.com",
  // Replace with your Google Maps embed URL
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6045.217597539713!2d-73.98517227456958!3d40.74863280672389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9bb853f49%3A0x3da55bc6c02918a8!2s1%20W%2034th%20St.%20Rm%20201%2C%20New%20York%2C%20NY%2010001%2C%20USA!5e0!3m2!1sen!2s!4v1772223428112!5m2!1sen!2s",
  // Replace with your Calendly URL
  calendlyUrl: "https://calendly.com/your-username/30min",
};

// ─── Component ───────────────────────────────────────────────────────────────
export default function ContactPage() {
  const [calendlyLoaded, setCalendlyLoaded] = useState(false);

  return (
    <>
      <style>{styles}</style>

      <main className="contact-root">


        <div className="contact-container">
          {/* Info + Map Grid */}
          <div className="contact-grid">
            {/* Left: contact info */}
            <div className="info-card">
              <div>
                <span className="info-section-label">Our details</span>

                {/* Address 1 */}
                <div style={{ marginBottom: 24 }}>
                  <div className="info-item" style={{ cursor: "default" }}>
                    <div className="info-icon"><IconMapPin /></div>
                    <div>
                      <p className="info-label">Address - New York</p>
                      <p className="info-value">{CONTACT_INFO.address.line1}</p>
                      <p className="info-value-sub">{CONTACT_INFO.address.line2}</p>
                    </div>
                  </div>
                </div>

                {/* Address 2 */}
                <div style={{ marginBottom: 32 }}>
                  <div className="info-item" style={{ cursor: "default" }}>
                    <div className="info-icon"><IconMapPin /></div>
                    <div>
                      <p className="info-label">Address - New Jersey</p>
                      <p className="info-value">{CONTACT_INFO.address2.line1}</p>
                      <p className="info-value-sub">{CONTACT_INFO.address2.line2}</p>
                    </div>
                  </div>
                </div>

                <div className="info-divider" />
              </div>

              {/* Phone */}
              <a href={`tel:${CONTACT_INFO.phone.replace(/\D/g, "")}`} className="info-item">
                <div className="info-icon"><IconPhone /></div>
                <div>
                  <p className="info-label">Phone – New York</p>
                  <p className="info-value">{CONTACT_INFO.phone}</p>
                  <p className="info-value-sub">Mon – Fri, 9 am – 6 pm EST</p>
                </div>
              </a>

              {/* Phone 2 */}
              <a href={`tel:${CONTACT_INFO.phone2.replace(/\D/g, "")}`} className="info-item" style={{ marginTop: 20 }}>
                <div className="info-icon"><IconPhone /></div>
                <div>
                  <p className="info-label">Phone – New Jersey</p>
                  <p className="info-value">{CONTACT_INFO.phone2}</p>
                  <p className="info-value-sub">Mon – Fri, 9 am – 6 pm EST</p>
                </div>
              </a>

              <div className="info-divider" />

              {/* Email */}
              <div>
                <a href={`mailto:${CONTACT_INFO.email}`} className="info-item">
                  <div className="info-icon"><IconMail /></div>
                  <div>
                    <p className="info-label">Email</p>
                    <p className="info-value">{CONTACT_INFO.email}</p>
                    <p className="info-value-sub">We reply within 24 hours</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Right: Google Map */}
            <div className="map-card">
              <iframe
                src={CONTACT_INFO.mapEmbedUrl}
                title="Office location"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="map-overlay-label">📍 {CONTACT_INFO.address.line2}</div>
            </div>
          </div>

          {/* Calendly Section */}
          <div className="calendly-section">
            <div className="calendly-header">
              <div className="calendly-title-group">
                <h2 className="calendly-title">Book a meeting</h2>
                <p className="calendly-subtitle">
                  Pick a time that works for you — 30-minute intro call, no commitment.
                </p>
              </div>
              <div className="calendly-badge">
                <span className="calendly-badge-dot" />
                Booking available
              </div>
            </div>

            <div className="calendly-embed-wrapper">
              {!calendlyLoaded ? (
                // Show a friendly CTA while iframe hasn't been requested yet
                <div className="calendly-placeholder">
                  <div className="calendly-placeholder-icon">
                    <IconCalendar />
                  </div>
                  <p style={{ color: "var(--muted)", fontSize: "0.95rem", margin: 0 }}>
                    Click below to open the scheduling calendar
                  </p>
                  <button
                    onClick={() => setCalendlyLoaded(true)}
                    className="calendly-cta"
                    style={{ border: "none", cursor: "pointer" }}
                  >
                    View Available Times <IconArrow />
                  </button>
                </div>
              ) : (
                <iframe
                  src={`${CONTACT_INFO.calendlyUrl}?hide_event_type_details=1&hide_gdpr_banner=1&primary_color=027C99`}
                  title="Schedule a meeting"
                  frameBorder="0"
                />
              )}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
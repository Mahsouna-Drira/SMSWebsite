'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      {/* Background */}
      <div 
        className="footer-background"
        style={{ backgroundImage: 'url("/stranger-bg.png")' }}
        aria-hidden="true"
      />

      <div className="footer-container">
        <div className="footer-grid">
          {/* Column 3: AIESEC Logo + Legal Text */}
          <div className="footer-column footer-aiesec-section">
            <img
              src="/aiesec-logo.png"
              alt="AIESEC Logo"
              className="aiesec-main-logo"
            />
            <p className="aiesec-legal-text">
             AIESEC is the world’s largest youth-led organization, present in over 100 countries and territories. It is a global platform for young people to explore and develop their leadership potential through cross-cultural exchanges, professional internships, and volunteer opportunities.
            </p>
          </div>
          {/* Column 2: Quick Links */}
          <div className="footer-column footer-links-section">
            <h3 className="footer-heading">Quick Links</h3>
            <nav className="footer-nav">
              {[
                { name: 'About', href: '#about' },
                { name: 'Schedule', href: '#schedule' },
                { name: 'Team', href: '#team' },
                { name: 'Register', href: '#register' },
                { name: 'Contact', href: '#contact' },
              ].map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="footer-link"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
                    {/* Column 1: Conference Logo + Tagline */}
                    <div className="footer-column footer-logo-section">
            <div className="logo-wrapper">
              <Image
                src="/logo.png"
                alt="SMS Logo"
                width={100}
                height={100}
                className="footer-logo"
                priority
              />
              <p className="conference-title glow-text">
                Sfax Motivational Seminar 
              </p>
              <p className="conference-tagline">
                Empowering Leaders of Tomorrow
              </p>
            </div>

            {/* Social Media */}
            <div className="social-media">
              {[
                { icon: 'instagram', label: 'Instagram', url: 'https://www.instagram.com/sms.2k25/' },
              ].map((social) => (
                <Link
                  key={social.label}
                  href={social.url}
                  aria-label={social.label}
                  className="social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className={`fab fa-${social.icon}`} />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .footer {
          background-color: #000;
          color: #d1d5db;
          position: relative;
          overflow: hidden;
          border-top: 1px solid ;
        }

        .footer-background {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-size: cover;
          background-position: center;
          opacity: 0.1;
        }

        .footer-container {
          position: relative;
          max-width: 1280px;
          margin: 0 auto;
          padding: 48px 16px 64px;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 40px;
        }

        @media (min-width: 768px) {
          .footer-grid {
            grid-template-columns: 2fr 1fr 2fr;
            gap: 64px;
          }
          
          .footer-container {
            padding: 48px 24px 64px;
          }
        }

        .footer-column {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        @media (min-width: 768px) {
          .footer-column {
            align-items: flex-start;
          }
        }

        .logo-wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-bottom: 16px;
        }

        @media (min-width: 768px) {
          .logo-wrapper {
            align-items: flex-start;
          }
        }

        .footer-logo {
          width: 80px;
          height: 80px;
          filter: drop-shadow(0 10px 8px rgb(0 0 0 / 0.04)) drop-shadow(0 4px 3px rgb(0 0 0 / 0.1));
        }

        @media (min-width: 768px) {
          .footer-logo {
            width: 96px;
            height: 96px;
          }
        }

        .conference-title {
          margin-top: 12px;
          font-size: 18px;
          font-weight: 500;
          letter-spacing: 0.1em;
          color: #ffd700;
          text-transform: uppercase;
        }

        .conference-tagline {
          margin-top: 8px;
          font-size: 14px;
          color: #9ca3af;
        }

        .social-media {
          display: flex;
          gap: 20px;
          margin-top: 16px;
        }

        .social-link {
          color: #9ca3af;
          transition: color 0.2s;
          font-size: 20px;
        }

        .social-link:hover {
          color: #fff;
        }

        .footer-heading {
          font-size: 18px;
          font-weight: 600;
          color: #ffd700;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          margin-bottom: 16px;
        }

        .footer-nav {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .footer-link {
          color: #9ca3af;
          transition: color 0.2s;
          text-decoration: none;
        }

        .footer-link:hover {
          color: #fff;
        }

        .footer-aiesec-section {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
        }

        @media (min-width: 768px) {
          .footer-aiesec-section {
            align-items: flex-start;
          }
        }

        .aiesec-main-logo {
          width: auto;
          max-height: 40px;
          opacity: 0.9;
          transition: opacity 0.2s;
        }

        .aiesec-main-logo:hover {
          opacity: 1;
        }

        .aiesec-legal-text {
          font-size: 12px;
          color: #9ca3af;
          line-height: 1.5;
          text-align: center;
          margin: 0;
          max-width: 300px;
        }

        @media (min-width: 768px) {
          .aiesec-legal-text {
            text-align: left;
          }
        }

        .footer-divider {
          border-top: 1px solid rgba(153, 27, 27, 0.3);
          margin: 48px 0;
        }

        .footer-bottom {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding-top: 16px;
          gap: 16px;
        }

        @media (min-width: 768px) {
          .footer-bottom {
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
          }
        }

        .aiesec-logo {
          height: 32px;
          width: auto;
          opacity: 0.8;
          transition: opacity 0.2s;
        }

        .aiesec-logo:hover {
          opacity: 1;
        }

        .footer-legal {
          font-size: 14px;
          color: #6b7280;
          text-align: center;
        }

        @media (min-width: 768px) {
          .footer-legal {
            text-align: right;
          }
        }

        .copyright {
          margin-bottom: 8px;
        }

        .legal-text {
          font-size: 12px;
          margin: 0;
        }

        .glow-text {
          text-shadow: 0 0 8px rgb(255, 215, 0),
                     0 0 16px rgb(255, 215, 0);
        }
      `}</style>
    </footer>
  );
}

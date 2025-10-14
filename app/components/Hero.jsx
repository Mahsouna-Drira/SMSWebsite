import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-left">
          <p className="conference-subtitle">Sfax Motivational Seminar</p>
          <p className="conference-date">October 24-25 , 2025</p>
          <Link href="/registration" passHref>
            <button className="register-btn">
              <span className="register-icon">📝</span>
              REGISTER NOW
            </button>
          </Link>
        </div>
        <div className="hero-center">
          <div className="conference-logo">
            <div className="logo-glow"></div>
            <Image src="/logo.png" alt="SMS Logo" className="hero-logo" width={500} height={500} />
          </div>
        </div>
        <div className="hero-right">
          <div className="host-info">
            <p>Hosted by</p>
            <h3>AIESEC Sfax</h3>
          </div>
        </div>
      </div>
    </section>
  );
}

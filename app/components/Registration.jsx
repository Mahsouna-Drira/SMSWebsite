import Link from 'next/link';

export default function Registration() {
  return (
    <section className="registration-section" id="register">
      <div className="container">
        <h2>What You'll Gain</h2>
        <div className="benefits-grid">
          <div className="benefit-item">
            <div className="benefit-icon">🎯</div>
            <h3>Strategic Thinking</h3>
            <p>Develop critical thinking skills to navigate complex challenges</p>
          </div>
          <div className="benefit-item">
            <div className="benefit-icon">🤝</div>
            <h3>Team Leadership</h3>
            <p>Learn to inspire and guide teams toward common goals</p>
          </div>
          <div className="benefit-item">
            <div className="benefit-icon">💬</div>
            <h3>Communication</h3>
            <p>Master the art of clear, persuasive communication</p>
          </div>
          <div className="benefit-item">
            <div className="benefit-icon">🚀</div>
            <h3>Innovation</h3>
            <p>Foster creativity and innovative problem-solving approaches</p>
          </div>
        </div>
        <div className="registration-cta">
          <h3>Ready to Lead?</h3>
          <p>Join us for an unforgettable leadership experience</p>
          <Link href="/registration" passHref>
            <button className="register-btn"><span className="register-icon">📝</span>REGISTER NOW</button>
          </Link>
        </div>
      </div>
    </section>
  );
}

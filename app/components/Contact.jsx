import Image from 'next/image';

export default function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <div className="contact-content">
          <div className="contact-info">
            <h2>Get In Touch</h2>
            <p>Have questions? We'd love to hear from you.</p>
            <div className="contact-details">
              <div className="contact-item">
                <span className="contact-icon">📧</span>
                <span>aiesec.tacapes@gmail.com</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📞</span>
                <span>+216 55 555 555</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <span>Soviva Hotel & Resort, Sousse, Tunisie</span>
              </div>
            </div>
          </div>
          <div className="contact-image">
            <Image
              src="/contact.jpg"
              alt="Contact Us"
              width={600}
              height={400}
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 80vw, 600px"
              className="contact-photo"
              style={{ objectFit: 'cover', objectPosition: 'top', borderRadius: '8px' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

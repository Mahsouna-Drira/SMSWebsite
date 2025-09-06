export default function Schedule() {
  return (
    <section className="event-details-section" id="schedule">
      <div className="container">
        <div className="event-details-content">
          <h2>Event Details</h2>
          <p className="event-subtitle">Everything you need to know about the event</p>
          
          <div className="event-grid">
            <div className="event-info-card">
              <div className="info-icon">📅</div>
              <h3>When</h3>
              <p>September 11-14, 2025</p>
            </div>
            
            <div className="event-info-card">
              <div className="info-icon">📍</div>
              <h3>Venue</h3>
              <p>Amir Palace</p>
              <p>Zone Touristique Bp 21 Aéroport, 5000 Monastir, Tunisia</p>
            </div>
            
            <div className="event-info-card">
              <div className="info-icon">💵</div>
              <h3>Fees</h3>
              <p>EBs: 215 TND</p>
              <p>Middle Managers: 145 TND</p>
              <p>Single Room: +63 TND</p>
            </div>
          </div>
          
          <div className="venue-details">
            <div className="hotel-image">
              <img 
                src="/hotel.jpg" 
                alt="Amir Palace"
                className="hotel-img"
              />
              <a 
                href="https://maps.app.goo.gl/V2FXrBPwZ4F1HN4n7" 
                target="_blank" 
                rel="noopener noreferrer"
                className="map-link"
              >
                View on Google Maps ↗
              </a>
            </div>
            <div className="map-container">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3237.463367167191!2d10.734303999999998!3d35.7639925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13020cc0e66aa0ff%3A0xf1b4942694536653!2sAmir%20Palace!5e0!3m2!1sen!2stn!4v1757106799579!5m2!1sen!2stn"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Amir Palace Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

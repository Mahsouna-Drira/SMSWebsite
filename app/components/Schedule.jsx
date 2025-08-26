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
              <p>Soviva Hotel & Resort</p>
              <p>Port El Kantaoui, Hammam Sousse 4011 Tunisie</p>
            </div>
            
            <div className="event-info-card">
              <div className="info-icon">💵</div>
              <h3>Fees</h3>
              <p>EBs: 215 TND</p>
              <p>Middle Managers: 145 TND</p>
              <p>Single Room: +58 TND</p>
            </div>
          </div>
          
          <div className="venue-details">
            <div className="hotel-image">
              <img 
                src="/hotel.jpg" 
                alt="Soviva Hotel & Resort"
                className="hotel-img"
              />
              <a 
                href="https://www.google.com/maps/place/Soviva+Hotel+%26+Resort/@35.829861,10.626313,17z/data=!3m1!4b1!4m9!3m8!1s0x1302756b4f8c7c0f:0x4e8c1b2f1e5e4b5a!5m2!4m1!1i2!8m2!3d35.8298567!4d10.6288933!16s%2Fg%2F11b8v5zv5w?entry=ttu" 
                target="_blank" 
                rel="noopener noreferrer"
                className="map-link"
              >
                View on Google Maps ↗
              </a>
            </div>
            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3239.225306092092!2d10.626313!3d35.829861!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1302756b4f8c7c0f%3A0x4e8c1b2f1e5e4b5a!2sSoviva%20Hotel%20%26%20Resort!5e0!3m2!1sen!2stn!4v1620000000000!5m2!1sen!2stn"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Soviva Hotel & Resort Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

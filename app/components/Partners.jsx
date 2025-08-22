'use client';

import { useState, useEffect } from 'react';

export default function Partners() {
  const [partnersIndex, setPartnersIndex] = useState(0);

  useEffect(() => {
    const partnersTimer = setInterval(() => {
      setPartnersIndex(prevIndex => prevIndex + 1);
    }, 3000);

    return () => clearInterval(partnersTimer);
  }, []);

  useEffect(() => {
    const partnersTrack = document.querySelector('.partners-carousel .carousel-track');
    if (partnersTrack && partnersTrack.children.length > 0) {
      const itemWidth = partnersTrack.children[0].offsetWidth;
      const gap = 20;
      const totalWidth = itemWidth + gap;
      partnersTrack.style.transform = `translateX(-${partnersIndex * totalWidth}px)`;

      if (partnersIndex >= partnersTrack.children.length - 4) {
        setTimeout(() => {
          partnersTrack.style.transition = 'none';
          setPartnersIndex(0);
          partnersTrack.style.transform = `translateX(0px)`;
          setTimeout(() => {
            partnersTrack.style.transition = 'transform 0.5s ease';
          }, 50);
        }, 500);
      }
    }
  }, [partnersIndex]);

  const partners = [
    { name: 'Innovate Corp', type: 'Gold Sponsor' },
    { name: 'Future Leaders Inc.', type: 'Silver Sponsor' },
    { name: 'Tech Solutions', type: 'Bronze Sponsor' },
    { name: 'Global Ventures', type: 'Gold Sponsor' },
    { name: 'Synergy Group', type: 'Silver Sponsor' },
    { name: 'NextGen Innovators', type: 'Bronze Sponsor' },
  ];

  return (
    <section className="partners-section">
      <div className="container">
        <div className="partners-content">
          <h2>Our Partners & Sponsors</h2>
          <p className="partners-subtitle">The organizations that make this event possible</p>
          <div className="partners-carousel">
            <div className="carousel-container">
              <div className="carousel-track">
                {partners.map((partner, index) => (
                  <div className="partner-item" key={index}>
                    <div className="partner-logo"></div>
                    <h3>{partner.name}</h3>
                    <p>{partner.type}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="carousel-dots">
              {[...Array(6)].map((_, i) => (
                <div key={i} className={`dot ${i === (partnersIndex % 6) ? 'active' : ''}`}></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

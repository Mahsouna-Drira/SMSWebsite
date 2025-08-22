'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Committees() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [itemsPerSlide, setItemsPerSlide] = useState(3);

  // auto-advance like Team
  useEffect(() => {
    if (!isPaused) {
      const timer = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % Math.ceil(committees.length / itemsPerSlide));
      }, 3000);
      return () => clearInterval(timer);
    }
  }, [isPaused, itemsPerSlide]);

  // Responsive: match Team (1 / 2 / 3 per slide)
  useEffect(() => {
    const computeItemsPerSlide = () => {
      if (typeof window === 'undefined') return;
      const w = window.innerWidth;
      if (w < 640) setItemsPerSlide(1);
      else if (w < 1024) setItemsPerSlide(2);
      else setItemsPerSlide(3);
    };
    computeItemsPerSlide();
    window.addEventListener('resize', computeItemsPerSlide);
    return () => window.removeEventListener('resize', computeItemsPerSlide);
  }, []);

  const committees = [
    { name: 'AIESEC in Bardo', logo: '/LCs/Bardo.png' },
    { name: 'AIESEC in Bizerte', logo: '/LCs/Bizerte.png' },
    { name: 'AIESEC in Carthage', logo: '/LCs/Carthage.png' },
    { name: 'AIESEC in Hadrumet', logo: '/LCs/Hadrumet.png' },
    { name: 'AIESEC in Medina', logo: '/LCs/Medina.png' },
    { name: 'AIESEC in Nabel', logo: '/LCs/Nabel.png' },
    { name: 'AIESEC in Ruspina', logo: '/LCs/Ruspina.png' },
    { name: 'AIESEC in Sfax', logo: '/LCs/Sfax.png' },
    { name: 'AIESEC in Tacapes', logo: '/LCs/Tacapes.png' },
    { name: 'AIESEC in Thyna', logo: '/LCs/Thyna.png' },
    { name: 'AIESEC in University', logo: '/LCs/University.png' }
  ];

  const totalSlides = Math.ceil(committees.length / itemsPerSlide);
  const getCurrentCommittees = () => {
    const start = currentSlide * itemsPerSlide;
    return committees.slice(start, start + itemsPerSlide);
  };

  return (
    <section className="committees-section">
      <div className="container">
        <div className="committees-content">
          <h2>Participating Local Committees</h2>
          <p className="committees-subtitle">Local Commitees from all over Tunisia</p>
          <div 
            className="committees-carousel"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="carousel-container">
              <div className="committees-cards">
                {getCurrentCommittees().map((committee, index) => (
                  <div className="committee-item" key={currentSlide * itemsPerSlide + index}>
                    <div className="committee-card">
                      <div className="committee-logo-container">
                        <Image
                          src={committee.logo}
                          alt={`${committee.name} logo`}
                          className="committee-logo"
                          width={120}
                          height={120}
                          sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 120px"
                          loading="lazy"
                          style={{ objectFit: 'contain' }}
                        />
                      </div>
                      <h3>{committee.name}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="carousel-dots">
              {Array.from({ length: totalSlides }).map((_, i) => (
                <div 
                  key={i} 
                  className={`dot ${currentSlide === i ? 'active' : ''}`}
                  onClick={() => setCurrentSlide(i)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

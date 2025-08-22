'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Team() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [itemsPerSlide, setItemsPerSlide] = useState(3);
  
  const teamMembers = [
    { name: "Walid Abdennebi", image: "walid.png", position: "OCP" },
    { name: "Sadek Souei", image: "sadek.png", position: "OCVP ER" },
    { name: "Wadii Jmaii", image: "wadi.png", position: "OC ER" },
    { name: "Nour Chetoui", image: "nour.png", position: "OC ER" },
    { name: "Sajed Bekri", image: "sajed.png", position: "OCVP MKT" },
    { name: "Mohamed Jarboui", image: "jarboui.png", position: "OC MKT" },
    { name: "Malek Guefrech", image: "malek.png", position: "OC MKT" },
    { name: "Hanine Jridi", image: "hanine.png", position: "OCVP DXP" },
    { name: "Bayrem Jbel", image: "bayrem.png", position: "OCVP LOG" },
    { name: "Alaa Gaidi", image: "alae.png", position: "OC LOG&DXP" },
    { name: "Mokhtar Kilani", image: "mokhtar.png", position: "OC LOG&DXP" }
  ];

  const totalSlides = Math.ceil(teamMembers.length / itemsPerSlide);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const getCurrentMembers = () => {
    const start = currentSlide * itemsPerSlide;
    return teamMembers.slice(start, start + itemsPerSlide);
  };

  // Auto-scroll functionality
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % totalSlides);
      }, 3000); // Change slide every 3 seconds

      return () => clearInterval(interval);
    }
  }, [totalSlides, isPaused]);

  // Responsive: adjust items per slide based on viewport width
  useEffect(() => {
    const computeItemsPerSlide = () => {
      if (typeof window === 'undefined') return;
      const w = window.innerWidth;
      if (w < 640) {
        setItemsPerSlide(1);
      } else if (w < 1024) {
        setItemsPerSlide(2);
      } else {
        setItemsPerSlide(3);
      }
    };

    computeItemsPerSlide();
    window.addEventListener('resize', computeItemsPerSlide);
    return () => window.removeEventListener('resize', computeItemsPerSlide);
  }, []);

  return (
    <section className="team-section" id="team">
      <div className="container">
        <div className="team-content">
          <h2>Meet Our Team</h2>
          <p className="team-subtitle">The minds behind Lead'n'Lead Conference</p>
          
          <div 
            className="team-carousel"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="team-carousel-container">
              <div className="team-cards">
                {getCurrentMembers().map((member, index) => (
                  <div key={currentSlide * itemsPerSlide + index} className="team-member">
                    <div className="member-photo-square">
                      <Image
                        src={`/OCs/${member.image}`}
                        alt={member.name}
                        width={250}
                        height={250}
                        sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 250px"
                        className="member-image-square"
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <h3>{member.name}</h3>
                    <p className="member-role">{member.position}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="carousel-indicators">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                className={`indicator ${currentSlide === index ? 'active' : ''}`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}

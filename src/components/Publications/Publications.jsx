import React, { useState, useEffect } from 'react';
import './Slider.css';
import Publication1 from '../../assets/publication/channels4_profile.jpg';
import Publication2 from '../../assets/publication/Green_University_of_Bangladesh_logo.jpg';
import Publication3 from '../../assets/publication/University_of_Calgary_coat_of_arms_without_motto_scroll.svg.png';
import Publication4 from '../../assets/publication/channels4_profile (1).jpg';
import Publication5 from '../../assets/publication/Fc3gRsU6_400x400.png';
import Publication6 from '../../assets/publication/Istanbul_Medipol_University_Logo.png';
import Publication7 from '../../assets/publication/sdulogo-uk-sort-feb2019.png';

const Slider = () => {
  const originalSlides = [
    { id: 1, image: Publication7, description: 'University of Southern Denmark', viewLink: 'https://www.sdu.dk/en' }, 
    { id: 2, image: Publication2, description: 'Green University', viewLink: 'https://www.green.edu.bd/' },
    { id: 3, image: Publication3, description: 'The University of Calgary', viewLink: 'https://www.ucalgary.ca/' },
    { id: 4, image: Publication4, description: 'VNR Vignana Jyothi Institute of Engineering and Technology', viewLink: 'https://vnrvjiet.ac.in/' },
    { id: 5, image: Publication5, description: 'East West University', viewLink: 'https://www.ewubd.edu/' },
    { id: 6, image: Publication1, description: 'Daffodil International University', viewLink: 'https://daffodilvarsity.edu.bd/' },
    { id: 7, image: Publication6, description: 'Istanbul Medipol University', viewLink: 'https://www.medipol.edu.tr/en' },
  ];

  const slides = [...originalSlides, ...originalSlides];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(5);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSlidesToShow(2);
      } else if (window.innerWidth < 1024) {
        setSlidesToShow(5);
      } else {
        setSlidesToShow(5);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentIndex(prev => (prev + 1) % originalSlides.length);
  //   }, 3000);
  //   return () => clearInterval(interval);
  // }, [originalSlides.length]);

  const handleNext = () => {
    setCurrentIndex(prev => (prev + 1) % originalSlides.length);
  };

  const handlePrev = () => {
    setCurrentIndex(prev => (prev - 1 + originalSlides.length) % originalSlides.length);
  };

  const slideWidth = 100 / slidesToShow;

  return (
    <section className="about section" id='collaboration'>
      <h2 className="section__title">Collaborations</h2>
      <span className="section__subtitle">All my collaborations</span>
      
      <div className="slider-container container grid">
        <button 
          className="slider-arrow prev" 
          onClick={handlePrev} 
          aria-label="Previous slide"
        >
          &#10094;
        </button>
        
        <div className="slider">
          <div 
            className="slides"
            style={{ transform: `translateX(-${currentIndex * slideWidth}%)` }}
          >
            {slides.map((slide, index) => (
              <div 
                key={`${slide.id}-${index}`} 
                className="slide"
                style={{ width: `${slideWidth}%` }}
              >
                <a href={slide.viewLink} target="_blank" rel="noopener noreferrer">
                  <img 
                    src={slide.image} 
                    alt={slide.description} 
                    className="slide-image" 
                  />
                  <p className="slide-description">{slide.description}</p>
                </a>
              </div>
            ))}
          </div>
        </div>
        
        <button 
          className="slider-arrow next" 
          onClick={handleNext} 
          aria-label="Next slide"
        >
          &#10095;
        </button>
      </div>
    </section>
  );
};

export default Slider;

import React, { useState, useEffect } from 'react';
import './Slider.css';
import Publication1 from '../../assets/publication/data in breaf.jpg'; // Correctly import your image
import Publication2 from '../../assets/publication/ijrasat.jpg'; // Correctly import your image
import Publication3 from '../../assets/publication/BIM.jpg'; // Correctly import your image
import Publication4 from '../../assets/publication/data in breaf.jpg'; // Correctly import your image

const Slider = () => {
  const slides = [
    { id: 1, image: Publication1, description: 'Description for Slide 1', viewLink: 'https://asrafulme.netlify.app/static/media/about.f532a43be189d27803bc.jpg' },
    { id: 2, image: Publication2, description: 'Description for Slide 2' },
    { id: 3, image: Publication3, description: 'Description for Slide 3' },
    { id: 4, image: Publication4, description: 'Description for Slide 4' },
    { id: 5, image: Publication4, description: 'Description for Slide 5' },
    { id: 6, image: Publication4, description: 'Description for Slide 6' }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const slidesToShow = 4;
  const totalSlides = slides.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % (totalSlides - slidesToShow + 1));
    }, 10000); // 10000 milliseconds = 10 seconds

    return () => clearInterval(interval); // Clean up interval on component unmount
  }, [totalSlides, slidesToShow]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % (totalSlides - slidesToShow + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + (totalSlides - slidesToShow + 1)) % (totalSlides - slidesToShow + 1));
  };

  return (
    <section className="about section" id='about'>
      <h2 className="section__title">Publication</h2>
      <span className="section__subtitle">All my publications</span>

      <div className="slider-container container grid">
        <div className="slider">
          <div className="slides" style={{ transform: `translateX(-${currentIndex * (100 / slidesToShow)}%)` }}>
            {slides.map((slide) => (
              <div key={slide.id} className="slide">
                <img src={slide.image} alt={`Slide ${slide.id}`} className="slide-image" />
                <p className="slide-description">{slide.description}</p>
                {slide.viewLink && <a href={slide.viewLink} target="_blank" rel="noopener noreferrer" className="slide-view-link">View</a>}
              </div>
            ))}
          </div>
          <button className="slider-button prev" onClick={handlePrev}>&#10094;</button>
          <button className="slider-button next" onClick={handleNext}>&#10095;</button>
        </div>
      </div>
    </section>
  );
};

export default Slider;

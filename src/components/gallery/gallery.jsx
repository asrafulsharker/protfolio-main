import React from "react";
// import { useNavigate } from "react-router-dom";
import galleryData from "./gallery_data";
import "./gallery.css";

const Testimonials = () => {
//   const navigate = useNavigate();

//   const handleImageClick = (image) => {
//     navigate("/fullscreen", { state: { image } });
//   };

  return (
    <section className="testimonial container section" id="gallery">
      <h2 className="section__title">Gallery</h2>
      <span className="section__subtitle">My Activities</span>

      <div className="gallery">
        {galleryData.map((image) => (
          <img
            key={image.id}
            src={image.src}
            alt={image.alt}
            className="gallery__image"
            // onClick={() => handleImageClick(image)}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;

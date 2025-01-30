import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./gallery.css";

const FullScreenImage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const image = location.state?.image;

  if (!image) {
    navigate("/");
    return null;
  }

  return (
    <div className="fullscreen__container" onClick={() => navigate(-1)}>
      <img src={image.src} alt={image.alt} className="fullscreen__image" />
    </div>
  );
};

export default FullScreenImage;

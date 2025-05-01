// components/UniqueFeature.jsx
import React from 'react';

const UniqueFeature = ({ title, description, icon, imageAlt, imageSrc, reverse }) => {
  return (
    <section className="unique-feature">
      <div className={`container ${reverse ? 'reverse' : ''}`}>
        <div className="unique-feature-content">
          <i className={`fa-solid ${icon} section-icon`}></i>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        <div className="unique-feature-image">
          {imageSrc ? (
            <img src={imageSrc} alt={imageAlt} />
          ) : (
            imageAlt
          )}
        </div>
      </div>
    </section>
  );
};

export default UniqueFeature;
import React from 'react';


function HomeCard({title, text, link, image, reverse }) {
  return (
    <>
      <div className={`home-card ${reverse ? 'reverse' : ''}`}>
        <div className="home-card-image">
          <img src={image} alt={`${title} preview`} />
        </div>
        <div className="home-card-content">
          <h3>{title}</h3>
          <p>{text}</p>
          {link && (
            <a href={link} className="card-link">
              Check out more →
            </a>
          )}
        </div>
      </div>
    </>
  );
}

export default HomeCard;

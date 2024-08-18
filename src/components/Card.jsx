import React from 'react';

const Card = ({ title, image, description, price }) => {
  return (
    <div className="col mb-4">
      <div className="card h-100">
        <img src={image} className="card-img-top" alt={title} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
        </div>
        <div className="card-footer">
          <h6 className="text-muted">${price}</h6>
        </div>
      </div>
    </div>
  );
};

export default Card;


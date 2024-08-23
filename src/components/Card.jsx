import React from "react";
import { useState } from "react";
import ExpandLessSharpIcon from '@mui/icons-material/ExpandLessSharp';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Card = ({ title, image, category, description, price }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleTruncate = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="col mb-4">
      <div className="card h-100 border border-0 mx-2 my-3 py-0">
        <img src={image} className="card-img-top" alt={title} />
        <div className="card-body pb-0">
          <h6 className="text-secondary text-uppercase fw-bolder mt-2">
            {" "}
            {category}{" "}
          </h6>
          <h5 className="__truncated-text card-title fs-4 fw-bold  mt-2 mb-3">{title}</h5>
          <div className={`${!isExpanded ? "d-flex" : "d-flex flex-column" } `}>
            <p className={`card-text my-auto ${!isExpanded ? "__truncated-text" : ""}`}>
              {description}
            </p>
            <span
              className="text-primary pe-auto m-auto p-2"
              onClick={toggleTruncate}
            >
              {isExpanded ? <ExpandLessSharpIcon /> : <ExpandMoreIcon />}
            </span>
          </div>
        </div>
        <div className="card-footer border border-0">
          <h6 className="text-muted">${price}</h6>
          <div className="__actions"></div>
        </div>
      </div>
    </div>
  );
};

export default Card;

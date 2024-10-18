import React from "react";
import { useState } from "react";
import ExpandLessSharpIcon from "@mui/icons-material/ExpandLessSharp";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Card = ({ title, image, category, description, price }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleTruncate = () => {
    setIsExpanded(!isExpanded);
  };

  const [added, setAdded] = useState(false)

  const clicked = () => {
    setAdded(!added)
  }

  return (
    <div className="col mb-4">
      <div className="card h-100 border border-0 mx-2 my-3 py-0">
        <img src={image} className="card-img-top" alt={title} />
        <div className="card-body px-4 pb-0">
          <h6 className="text-secondary text-uppercase fw-bolder mt-2">
            {" "}
            {category}{" "}
          </h6>
          <h5 className="__truncated-text card-title fs-4 fw-bold  mt-2 mb-3">
            {title}
          </h5>
          <div className={`${!isExpanded ? "d-flex" : "d-flex flex-column"} `}>
            <p
              className={`card-text my-auto ${!isExpanded ? "__truncated-text" : ""
                }`}
            >
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
        <div className="__card-footer d-flex flex-row justify-content-between border border-0 m-0 mb-3 py-0 px-3">
          <h6 className="px-2 my-auto">U$S {price}</h6>
          <div className=" col __actions d-flex flex-row justify-content-end ml-auto px-3">
            <button
              type="button"
              className="btn btn-outline-secondary btn-sm rounded-pill mx-2"
            >
              Details
            </button>
            <button
              type="button"
              className={`${!added ? "btn btn-primary btn-sm rounded-pill mx-1" : "btn btn-danger btn-sm rounded-pill mx-1"}`}
              onClick={clicked}
            >
              {!added ? "Add to cart" : "Remove"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

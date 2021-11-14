import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Rating from "react-rating";
import "./ReviewCard.css";

import { faStar as fullStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as emptyStar } from "@fortawesome/free-regular-svg-icons";

const ReviewCard = ({ reviewData }) => {
  const { name, img, review, rating } = reviewData;
  const star = parseInt(rating);
  return (
    <div className="mb-5 col-lg-4 col-sm-6 ">
      <div className="card shadow-lg w-100 h-100 text-center rounded">
        <div className="d-flex justify-content-center align-items-center h-75 p-2">
          <img src={img} className="card-img-top review-img " />
        </div>
        <div className="card-body">
          <h2 className="card-title text-uppercase fw-bold uppercase">
            {name}
          </h2>

          <div>
            <Rating
              initialRating={star}
              readonly
              emptySymbol={
                <FontAwesomeIcon className="text-warning" icon={emptyStar} />
              }
              fullSymbol={
                <FontAwesomeIcon className="text-warning" icon={fullStar} />
              }
            />
            <span>{star}</span>
          </div>
          <p>{review}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;

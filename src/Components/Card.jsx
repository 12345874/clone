import React from "react";
import "./Card.css";

const Card = ({ data, idx, activeIdx, width }) => {
  console.log("data", width);
  return (
    <div
      className={`${
        activeIdx === idx && "active__card-container"
      } card__container`}
    >
      {/* <img className="card__image" src={data?.image} alt="img" /> */}
      <div
        className={`${width > 768 ? "card__image" : "mobile__card-image"}`}
        style={{ backgroundImage: `url(${data.image})` }}
      >
        {/* <video src={data.image} controls muted /> */}
      </div>
      <div className="card__title-container">
        {/* <div className="card__title">{data?.title}</div> */}
        {width > 768 ? (
          <div style={{ display: "flex", gap: "1rem" }}>
            <div className="card__title">{data?.title}</div>
            <div className="card__title">{data?.title}</div>
          </div>
        ) : (
          <div className="card__title">{data?.title}</div>
        )}
        <div className="card__paragraph">{data?.paragraph}</div>
        <div className="button__container">
          <img src="" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Card;

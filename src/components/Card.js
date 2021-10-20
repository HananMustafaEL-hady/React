import React from "react";

function Card({ name, imgsrc, city, country }) {
  return (
    <div className="card">
      <img src={imgsrc} alt="" />
      <div>
        <h2>{name}</h2>
        <p className="title">{city} </p>
        <span>{country} </span>
        <p>
          <button>+</button>
        </p>
      </div>
    </div>
  );
}

export default Card;

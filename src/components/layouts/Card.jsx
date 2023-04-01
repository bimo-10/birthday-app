import React from "react";

function Card({ id, img, name, age }) {
  return (
    <div className="card w-96 bg-warning shadow-xl my-4 " key={id}>
      <figure className="px-10 pt-10">
        <img src={img} alt={name} className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>{age}</p>
      </div>
    </div>
  );
}

export default Card;

import React, { useState } from "react";
import Card from "./layouts/Card";
import data from "../data";

function Main() {
  const [people, setPeople] = useState(data);

  const handleClearClick = () => {
    setPeople([]);
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md rounded-xl">
          <h1 className="text-5xl font-bold my-4">
            {people.length} birthdays today
          </h1>
          {people.map((person) => {
            return (
              <Card
                id={person.id}
                name={person.name}
                age={person.age}
                img={person.img}
              />
            );
          })}
          <button
            className="btn btn-outline min-w-full my-8"
            onClick={handleClearClick}
          >
            Clear All
          </button>
        </div>
      </div>
    </div>
  );
}

export default Main;

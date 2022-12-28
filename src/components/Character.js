import React from "react";
import { Link } from "react-router-dom";

export default function Character(props) {
  return (
    <Link
      to={`/characters/${props.id}`}
      style={{ textDecoration: "none" }}
      aria-label={`${props.name} character`}
      aria-describedby="btn-read-more"
    >
      <div className="character-card flex">
        <img className="character-image" src={props.image} alt={props.name} />
        <div className="character-description flex">
          <h2 className="card-heading text-container">{props.name}</h2>
          <button
            className="character-link"
            style={{ textDecoration: "underline" }}
            aria-hidden="true"
            id="btn-read-more"
          >
          </button>
        </div>
      </div>
    </Link>
  );
}

import React from "react";
import "./Card.scss";
import { Link } from "react-router-dom";

export default function Card(props) {
  const { imagen, nombre, especie, estatus, genero, id } = props;

  return (
    <div className="card">
      <div className="card-img">
        <img src={imagen} alt="" />
      </div>
      <div
        className={
          estatus === "Dead"
            ? "card-status"
            : estatus === "Alive"
            ? "card-status alive"
            : "card-status unknown"
        }
      ></div>
      <div className="card-content">
        <h3>{nombre}</h3>
        <p>{especie}</p>
        <p>{genero}</p>
      </div>
      <Link className="card-button" to={`/character/:${id}`}>
        <p>More</p>
      </Link>
    </div>
  );
}

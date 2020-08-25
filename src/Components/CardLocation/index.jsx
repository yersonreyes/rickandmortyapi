import React from "react";
import "./Location.scss";

export default function CardLocation(props) {
  const { item } = props;
  return (
    <div className="card-location">
      <h3>{item.name}</h3>
      <p>{item.type}</p>
      <p>{item.dimension}</p>
    </div>
  );
}

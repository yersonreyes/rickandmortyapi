import React from "react";
import "./EpisodeList.scss";

export default function index(props) {
  const { item } = props;
  return (
    <div className="episodes-list-item">
      <div className="episodes-list-date">
        <h6>{item.air_date}</h6>
      </div>
      <div className="episodes-list-content">
        <h3>{item.name}</h3>
        <h6>{item.episode}</h6>
      </div>
    </div>
  );
}

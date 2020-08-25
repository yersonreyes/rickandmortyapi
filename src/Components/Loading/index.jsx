import React from "react";
import Portal from "../../Assets/img/portal.png";
import "./Loading.scss";

export default function Loading() {
  return (
    <div className="loading">
      <div className="loading-container animation-rotate">
        <img className="loading-img" src={Portal} alt="" />
      </div>
    </div>
  );
}

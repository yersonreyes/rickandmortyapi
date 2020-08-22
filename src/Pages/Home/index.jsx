import React from "react";
import Title from "../../Assets/img/title.png";
import "./Home.scss";

export default function Home() {
  return (
    <div className="home">
      <img className="home-img" src={Title} alt="" />
    </div>
  );
}

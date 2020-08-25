import React from "react";
import { Link } from "react-router-dom";
import Title from "../../Assets/img/title.png";
import Loading from "../../Components/Loading";
import "./Home.scss";

export default function Home() {
  return (
    <div className="home">
      <img className="home-img" src={Title} alt="" />
      <Link to={`/character/:${Math.floor(Math.random() * 500)}`}>
        <Loading />
      </Link>
    </div>
  );
}

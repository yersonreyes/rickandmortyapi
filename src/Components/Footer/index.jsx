import React from "react";
import "./Footer.scss";

export default function Footer() {
  return (
    <div className="footer">
      <ul className="footer-list">
        <li>
          <a href="https://twitter.com/YersonReyesDev" target="_blank">
            <i className="fab fa-twitter"></i>
          </a>
        </li>
        <li>
          <a href="https://github.com/yersonreyes" target="_blank">
            <i className="fab fa-github"></i>
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/yerson-reyes-rosales/"
            target="_blank"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
        </li>
      </ul>
      <p>❮❯ by Yerson Reyes 2020</p>
      <a href="https://rickandmortyapi.com/">Rick and Morty API</a>
    </div>
  );
}

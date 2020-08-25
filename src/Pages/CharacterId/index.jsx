import React, { useState, useEffect } from "react";
import "./CharacterId.scss";

export default function CharacterId(props) {
  const characterId = props.match.params.id.substring(1);
  const [dataCharacter, setDataCharacter] = useState([]);
  const [origen, setOrigen] = useState([]);
  const [episode, setEpisode] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      `https://rickandmortyapi.com/api/character/${characterId}`
    );
    const character = await data.json();
    setDataCharacter(character);
    setOrigen(character.origin);
    setEpisode(character.episode);
  };

  console.log(episode);

  return (
    <div className="characterId">
      <div className="characterId-img">
        <img
          className={
            dataCharacter.status === "Dead"
              ? "character-img__status"
              : dataCharacter.status === "Alive"
              ? "character-img__status alive-img"
              : "character-img__status unknown-img"
          }
          src={dataCharacter.image}
          alt=""
        />
      </div>
      <div className="characterId-content">
        <h3>{dataCharacter.name}</h3>
        <ul className="characterId-list">
          <li>
            <b>Specie</b> {dataCharacter.species || "None"}
          </li>
          <li>
            <b>Gender</b> {dataCharacter.gender || "None"}
          </li>
          <li>
            <b>Type</b> {dataCharacter.type || "None"}
          </li>
          <li>
            <b>Status</b> {dataCharacter.status || "None"}
          </li>
          <li>
            <b>Origen</b> {origen.name || "None"}
          </li>
        </ul>
      </div>

      <h3 className="appearances">Episode appearances </h3>

      <div className="characterId-episode">
        {episode.map((item) => (
          <div className="characterId-episode-item">
            <p>Episode {item.substring(40)}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

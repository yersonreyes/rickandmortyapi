import React, { useState, useEffect } from "react";
import Card from "../../Components/Card";
import Button from "../../Components/Button";
import "./Character.scss";

export default function Character() {
  const [dataCharacter, setDataCharacter] = useState([]);
  const [dataPage, setDataPage] = useState(1);
  const [maxPage, setMaxPage] = useState("");
  const [loading, setLoadig] = useState(false);

  useEffect(() => {
    fetchData();
  }, [dataPage]);

  const fetchData = async () => {
    setLoadig(true);
    const data = await fetch(
      `https://rickandmortyapi.com/api/character/?page=${dataPage}`
    );
    const character = await data.json();
    //console.log(character.info.pages);
    setMaxPage(character.info.pages);
    setDataCharacter(dataCharacter.concat(character.results));
    setLoadig(false);
  };

  const nextPage = () => {
    setDataPage(dataPage + 1);
  };

  return (
    <div className="character">
      <div className="character-container">
        {dataCharacter.map((item) => (
          <Card
            key={item.id}
            imagen={item.image}
            nombre={item.name}
            especie={item.species}
            estatus={item.status}
            genero={item.gender}
            id={item.id}
          />
        ))}
      </div>
      {dataPage == maxPage || loading == true ? (
        " "
      ) : (
        <Button contenido="Next" evento={nextPage} />
      )}
    </div>
  );
}

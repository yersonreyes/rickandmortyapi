import React, { useState, useEffect } from "react";
import Card from "../../Components/Card";
import Button from "../../Components/Button";
import "./Character.scss";

export default function Character() {
  const [error, setError] = useState(false);
  const [dataCharacter, setDataCharacter] = useState([]);
  const [dataPage, setDataPage] = useState(1);
  const [maxPage, setMaxPage] = useState("");
  const [loading, setLoadig] = useState(false);
  const [filter, setFilter] = useState({ name: "", status: "", gender: "" });

  useEffect(() => {
    fetchData();
  }, [dataPage]);

  const fetchData = async () => {
    setLoadig(true);
    const data = await fetch(
      `https://rickandmortyapi.com/api/character/?page=${dataPage}&name=${filter.name}&status=${filter.status}&gender=${filter.gender}`
    );
    const character = await data.json();
    //console.log(character.info.pages);
    setMaxPage(character.info.pages);
    setDataCharacter(dataCharacter.concat(character.results));
    setLoadig(false);
  };

  const fetchDataFilter = async () => {
    setLoadig(true);
    try {
      const data = await fetch(
        `https://rickandmortyapi.com/api/character/?page=${dataPage}&name=${filter.name}&status=${filter.status}&gender=${filter.gender}`
      );
      const character = await data.json();
      //console.log(character.info.pages);
      setMaxPage(character.info.pages);
      setDataCharacter(character.results);
      setLoadig(false);
    } catch (err) {
      setError(err);
      setLoadig(false);
    }
  };

  const nextPage = () => {
    setDataPage(dataPage + 1);
  };

  const handleChange = (e) => {
    setFilter({ ...filter, [e.target.name]: e.target.value });
    setDataPage(1);
    setMaxPage(1);
    fetchDataFilter();
    console.log(filter);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setDataPage(1);
    setMaxPage(1);
    fetchDataFilter();
    console.log("evento detenido");
  };

  const handleclick = (e) => {
    setDataPage(1);
    setMaxPage(1);
    fetchDataFilter();
  };

  return (
    <div className="character">
      <div className="filter">
        <form className="filter-form" onSubmit={handleSubmit}>
          <div className="filter-form-item">
            <label>Search</label>
            <input
              onClick={handleclick}
              onChange={handleChange}
              type="text"
              name="name"
              value={filter.name}
            />
          </div>
          <div className="filter-form-item">
            <label>
              <input
                onChange={handleChange}
                type="radio"
                name="status"
                value="alive"
              />
              Alive
            </label>
            <label>
              <input
                onChange={handleChange}
                type="radio"
                name="status"
                value="dead"
              />
              Dead
            </label>
            <label>
              <input
                onChange={handleChange}
                type="radio"
                name="status"
                value="unknown"
              />
              Unknown
            </label>
          </div>
          <div className="filter-form-item">
            <label>
              <input
                onChange={handleChange}
                type="radio"
                name="gender"
                value="female"
              />
              female
            </label>
            <label>
              <input
                onChange={handleChange}
                type="radio"
                name="gender"
                value="male"
              />{" "}
              male
            </label>
            <label>
              <input
                onChange={handleChange}
                type="radio"
                name="gender"
                value="genderless"
              />
              genderless
            </label>
          </div>
        </form>
      </div>

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
      {dataPage == maxPage || loading == true || error == true ? (
        " "
      ) : (
        <Button contenido="Next" evento={nextPage} />
      )}
    </div>
  );
}

import React, { useState, useEffect } from "react";
import Button from "../../Components/Button";
import CardLocation from "../../Components/CardLocation";
import "./Location.scss";

export default function Location() {
  const [location, setLocation] = useState([]);
  const [loading, setLoading] = useState(false);
  const [dataPage, setDataPage] = useState(1);
  const [maxPage, setMaxPage] = useState("");

  useEffect(() => {
    fetchData();
  }, [dataPage]);

  const fetchData = async () => {
    setLoading(true);
    const data = await fetch(
      `https://rickandmortyapi.com/api/location/?page=${dataPage}`
    );
    const dataJson = await data.json();
    setMaxPage(dataJson.info.pages);
    setLocation(location.concat(dataJson.results));
    setLoading(false);
  };

  console.log(maxPage);

  const nextPage = () => {
    setDataPage(dataPage + 1);
  };

  return (
    <div className="location-container">
      <div className="location">
        {location.map((items) => (
          <CardLocation key={items.id} item={items} />
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

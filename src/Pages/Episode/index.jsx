import React, { useState, useEffect } from "react";
import EpisodeList from "../../Components/EpisodeList";
import Button from "../../Components/Button";
import "./Episode.scss";

export default function Episode() {
  const [episodes, setEpisodes] = useState([]);
  const [dataPage, setDataPage] = useState(1);
  const [maxPage, setMaxPage] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchData();
  }, [dataPage]);

  const fetchData = async () => {
    setLoading(true);
    const data = await fetch(
      `https://rickandmortyapi.com/api/episode?page=${dataPage}`
    );
    const dataJson = await data.json();
    setEpisodes(episodes.concat(dataJson.results));
    setMaxPage(dataJson.info.pages);
    setLoading(false);
  };

  const nextPage = () => {
    setDataPage(dataPage + 1);
  };

  return (
    <div className="episodes">
      <h2>Episodes</h2>
      <div className="episode-list">
        {episodes.map((items) => (
          <EpisodeList item={items} key={items.id} />
        ))}
      </div>

      <div className="button-episode-list">
        {dataPage == maxPage || loading == true ? (
          " "
        ) : (
          <Button contenido="Next" evento={nextPage} />
        )}
      </div>
    </div>
  );
}

import React, { useEffect, useState } from "react";
import instance from "../../utils/axios"
import request from "../../utils/request";
import "./Banner.css"

function Banner() {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    async function fetchData() {
      const response = await instance.get(request.fetchTrending);
      const results = response.data.results;
      console.log(results)
      setMovie(results[Math.floor(Math.random() * results.length)]);
    }
    fetchData();
  }, []);

  return (
    <header className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
        )`,
        backgroundPosition: "center center",
        backgroundRepeat:"no-repeat"
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>

        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>

        <p className="banner__description">
          {movie?.overview?.length > 150
            ? movie.overview.slice(0, 150) + "..."
            : movie?.overview}
        </p>
      </div>
      <div className="banner--fadeBottom" />
    </header>
  );
}

export default Banner;

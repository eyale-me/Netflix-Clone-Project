import React from "react";
import Row from "../Row/Row";
import axios from "../../../utils/axios";
import request from "../../../utils/request";
// import './RowList.css';

function RowList() {
  return (
    <>
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={request.fetchNetflixOriginals}
        isLargeRow={false}
      />
      <Row
        title="Trending Now"
        fetchUrl={request.fetchTrending}
        isLargeRow={false}
      />
      <Row
        title="Top Rated Movies"
        fetchUrl={request.fetchTopRatedMovies}
        isLargeRow={false}
      />
      <Row
        title="Action Movies"
        fetchUrl={request.fetchActionMovies}
        isLargeRow={false}
      />
      <Row
        title="Comedy Movies"
        fetchUrl={request.fetchComedyMovies}
        isLargeRow={false}
      />
      <Row
        title="Horror Movies"
        fetchUrl={request.fetchHorrorMovies}
        isLargeRow={false}
      />
      <Row
        title="Romance Movies"
        fetchUrl={request.fetchRomanceMovies}
        isLargeRow={false}
      />
      <Row
        title="Documentaries"
        fetchUrl={request.fetchDocumentaries}
        isLargeRow={false}
      />
      <Row
        title="Science Fiction"
        fetchUrl={request.fetchScienceFictionMovies}
        isLargeRow={false}
      />
      <Row 
          title="Tv show"
          fetchUrl={request.fetchTVShow}
          isLargeRow={false}
          />
    </>
  );
}

export default RowList

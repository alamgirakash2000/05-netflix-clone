import React from "react";
import Row from "./components/Row/row";
import requests from "./components/request";
import Banner from "./components/Banner/banner";
import Header from "./components/Header/header";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Banner fetchUrl={requests.fetchNetflixOriginals} />
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLarge
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Romantic Movies" fetchUrl={requests.fetchRomanticMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentories} />
    </div>
  );
}

export default App;

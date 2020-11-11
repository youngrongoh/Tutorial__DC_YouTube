import React, { useEffect, useState } from "react";
import VideoList from "./components/video_list/video_list";
import "@fortawesome/fontawesome-free/js/all.js";
import "./app.css";

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      "https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyAxsnLP-oBAqqnF1G1F4TL5wiM9Q2hrJYc",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setVideos(result.items))
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <>
      <header className="header">
        <a href="/" className="logo">
          <div className="logoImg">
            <i className="fab fa-youtube"></i>
          </div>
          <h1 className="logoTitle">Youtube</h1>
        </a>
        <form className="search">
          <input type="text" className="searchInput" placeholder="Search.." />
          <button type="submit" className="searchBtn">
            <i className="fas fa-search"></i>
          </button>
        </form>
      </header>
      <VideoList videos={videos} />
    </>
  );
}

export default App;

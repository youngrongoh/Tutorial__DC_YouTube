import React, { useEffect, useState } from 'react'
import VideoList from './components/video_list/video_list';
import './app.css';

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=bts&key=AIzaSyAxsnLP-oBAqqnF1G1F4TL5wiM9Q2hrJYc", requestOptions)
      .then(response => response.json())
      .then(result => setVideos(result.items))
      .catch(error => console.log('error', error));
  }, []);

    return(
      <VideoList videos={videos} />
    );
}

export default App;

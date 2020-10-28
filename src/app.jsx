import React, { useEffect, useState } from 'react';
import VideoList from './components/video_list/video_list';
import './app.css';

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=100&q=children+books&key=AIzaSyAUxXJWLX9sJSAcdscisSYo1kihOn5DL2Y", requestOptions)
      .then(response => response.json())
      .then(result => setVideos(result.items))
      .catch(error => console.log('error', error))

  }, []);

  return (
    <React.Fragment>
      <VideoList videos={videos} />
    </React.Fragment>
  )
}

export default App;

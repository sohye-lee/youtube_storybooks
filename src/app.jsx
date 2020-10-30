import React, { useEffect, useState } from 'react';
import VideoList from './components/video_list/video_list';
import Navbar from './components/navbar/navbar';
import styles from './app.module.css';
import Channel from './components/channel_list/channel_list'


function App({ youtube }) {
  const [videos, setVideos] = useState([]);
  const search = query => {
    youtube.search(query).then(videos => setVideos(videos));
  }

  useEffect(() => {
    youtube.mostPopular().then(videos => setVideos(videos));
  }, []);

  return (
    <div className={styles.app}>
      <Navbar onSearch={search} />
      <Channel />
      <VideoList videos={videos} />
    </div>
  )
}

export default App;

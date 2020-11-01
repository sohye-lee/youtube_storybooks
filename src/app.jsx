import React, { useEffect, useState } from 'react';
import VideoList from './components/video_list/video_list';
import Navbar from './components/navbar/navbar';
import styles from './app.module.css';
import Channel from './components/channel_list/channel_list'
import VideoDetail from './components/video_detail/video_detail';



function App({ youtube }) {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const selectVideo = (video) => {
    setSelectedVideo(video);
  }

  const search = query => {
    youtube.search(query).then(videos => setVideos(videos));
  }

  useEffect(() => {
    youtube.mostPopular().then(videos => setVideos(videos));
  }, []);

  return (
    <div className={styles.app}>
      <Navbar onSearch={search} />
      
      {!selectedVideo && (
        <div className={styles.channel}>
          <Channel /> 
        </div>)}

      <section className={styles.content}>
        {selectedVideo && (
          <div className={styles.detail}>
            <VideoDetail video={selectedVideo} />
          </div>
        )}
        
        <div className={selectedVideo? styles.videolist__plain : styles.videoList__content}>
          <VideoList videos={videos} onVideoClick={selectVideo} display={selectedVideo? 'list' : 'grid'}/>
        </div>
      </section>
    </div>
  )
}

export default App;

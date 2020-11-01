import { faShoePrints } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import VideoItem from '../video_item/video_item';
import styles from './video_list.module.css';

const VideoList = ({videos, onVideoClick}) => (
    <div>
        {/* <h1 className={styles.videoList__title}>Stories</h1> */}
        <ul className={styles.videoList__content}>
            {/* <div className={styles.videoList__title}><li>Stories</li></div> */}
            {videos.map(video => (
                <VideoItem key={video.id.videoId} video={video} onVideoClick={onVideoClick} />
            ))}
        </ul>
        <a href={'#'} className={styles.up}><FontAwesomeIcon icon={faShoePrints}/></a>
    </div>
);


export default VideoList;
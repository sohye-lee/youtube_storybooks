import { faChevronCircleUp, faShoePrints, faStepForward } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import VideoItem from '../video_item/video_item';
import styles from './video_list.module.css';

const VideoList = props => (
    <div>
        <h1 className={styles.videoList__title}>30 Most Popular Stories</h1>
        <ul className={styles.videoList__content}>
            {props.videos.map(video => (
                <VideoItem key={video.id.videoId} video={video} />
            ))}
        </ul>
        <a href={'/'} className={styles.up}><FontAwesomeIcon icon={faShoePrints}/></a>
    </div>
);


export default VideoList;
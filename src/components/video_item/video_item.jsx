import React from 'react';
import styles from './video_item.module.css';

const VideoItem = ({video, video : { snippet }, onVideoClick}) => (
        <li className={styles.video} onClick={() => onVideoClick(video)}>
            <div className={styles.video__titlebox}>
                <h3 className={styles.video__title}>{snippet.title}</h3>
                <p className={styles.video__channel}>{snippet.channelTitle}</p>
            </div>
            <img className={styles.thumbnail} src={snippet.thumbnails.medium.url} alt='thumbnail'></img>
        </li>
)

export default VideoItem;
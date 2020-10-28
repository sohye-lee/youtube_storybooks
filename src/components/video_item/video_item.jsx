import React from 'react';
import styles from './video_item.module.css';

const VideoItem = ({video : { snippet}}) => (
 <li className={styles.video} >
    <img className={styles.thumbnail} src={snippet.thumbnails.medium.url}></img>
    <div>
        <h3 className={styles.title}>{snippet.title}</h3>
        <p className={styles.channel}>{snippet.channelTitle}</p>
    </div>
 </li>
)

export default VideoItem;
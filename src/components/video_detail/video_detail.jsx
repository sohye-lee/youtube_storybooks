import React from 'react';
import styles from './video_detail.module.css';

const VideoDetail = ({video}) => {
    return  <img src={video.snippet.thumbnails.medium.url} className="selected"></img>
}

export default VideoDetail;
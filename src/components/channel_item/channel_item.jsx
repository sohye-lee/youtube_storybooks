import React from 'react';
import styles from './channel_item.module.css';

const ChannelItem = ({ channel : { snippet } }) => {
    return (
        <li className={styles.channelItem}>
            <img className={styles.thumbnail} src={snippet.thumbnails.medium.url} alt={'thumbnail'}></img>
            <h3 className={styles.title} >{snippet.channelTitle}</h3>
        </li>
    )
}

export default ChannelItem;
import React from 'react';
import styles from './channel_item.module.css';

const ChannelItem = ({channel, channel : { snippet }, onChannelClick }) => {
    return (
        <li className={styles.channelItem} onClick={() => onChannelClick(channel)}>
            <img className={styles.thumbnail} src={snippet.thumbnails.medium.url} alt={'thumbnail'}></img>
            <div className={styles.channel__titlebox}><h3 className={styles.channel__title} >{snippet.channelTitle}</h3></div>
        </li>
    )
}

export default ChannelItem;
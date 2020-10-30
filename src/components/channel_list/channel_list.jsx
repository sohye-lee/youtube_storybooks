import React, { useEffect, useState }  from 'react'
import styles from './channel_list.module.css';
import ChannelItem from '../channel_item/channel_item';
import Channel from '../../service/channel';

const channel = new Channel('AIzaSyDiK81Xz7PzVVBRXA7TiydSx8WQ2U6hULs');

function ChannelList() {
    const [channels, setChannels] = useState([]);

    useEffect(() => {
        channel.mostPopular().then(channels => setChannels(channels));
    
      }, []);

    return (
        <div>
            <h1 className={styles.channelList__title}>30 Most Popular Channels</h1>
            <ul className={styles.channelList__content}>
            {channels.map(channel => (
                <ChannelItem channel={channel} key={channel.snippet.channelId} />
            ))}
            </ul>
        </div>
    )

}

export default ChannelList;
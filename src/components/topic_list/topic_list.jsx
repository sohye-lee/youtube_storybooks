import React, { useEffect, useState }  from 'react'
import styles from './channel_list.module.css';
import ChannelItem from '../channel_item/channel_item';
import Channel from '../../service/channel';
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const channel = new Channel(process.env.REACT_APP_YOUTUBE_API_KEY);

function ChannelList() {
    const [channels, setChannels] = useState([]);
    const [selectedChannel, setSelectedChannel] = useState(null);

    const selectChannel = (channel) => {
      setSelectedChannel(channel);
    }  

    useEffect(() => {
        channel.mostPopular().then(channels => setChannels(channels));
    
      }, []);

    return (
        <div>
            <div className="arrowRight"><FontAwesomeIcon icon={faLongArrowAltRight} /></div>
            <ul className={styles.channelList__content}>
                {channels.map(channel => (
                    <ChannelItem channel={channel} key={channel.snippet.channelId} onChannelClick={selectChannel}/>
                ))}
            </ul>
        </div>
    )

}

export default ChannelList;
import React from 'react';
import './ChannelRow.css';
import Avatar from 'react-avatar';

function ChannelRow({ image, channel, subs, noOfVideos, description }) {
    return (
        <div className='channelrow'>
            <Avatar
                className='channelrow__logo'
                alt={channel}
                src={image}
            />
            <div className="channelrow__text">
                <h4>{channel}</h4>
                <p>{subs} subscribers • {noOfVideos} videos</p>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default ChannelRow;
import React from 'react';

import VideoItem from './VideoItem';

// videos is the same as props
// onVideoSelect is a callback from App.js 
const VideoList = ({ videos, onVideoSelect }) => {

    // map over the array that we receive from props for every single video
    const renderedList = videos.map((video) => {
        return (
            <VideoItem 
                video={ video } 
                onVideoSelect={ onVideoSelect }
            />
        )
    })

    return<div className="ui relaxed divided list">{ renderedList }</div>
}

export default VideoList;
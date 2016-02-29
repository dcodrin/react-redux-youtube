import React from "react";
// the props that get passed to VideoListItem have a key of video
//Using es6 syntax we deconstruct the props object and create a new variable video that is set equal to props.video
const VideoListItem = ({video, onVideoClick}) => {

    //{video} inside the function is the same as const video = props.video
    //{video} only extracts the video prop
    //{video, onVideoSelect} extracts both props
    console.log(video);

    const imageUrl = video.snippet.thumbnails.default.url;
    const videoTitle = video.snippet.title;

    return (
      <li onClick={() => onVideoClick(video)} className="list-group-item">
          <div className="video-list media">
              <div className="media-left">
                  <img className="media-object" src={imageUrl} alt=""/>
              </div>
              <div className="media-body">
                  <div className="media-heading">
                      {videoTitle};
                  </div>
              </div>
          </div>
      </li>
    );
};


export default VideoListItem;
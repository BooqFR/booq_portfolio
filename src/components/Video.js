import React    from 'react';
import File     from './../assets/videos/video.mp4';
 
function Video() {
  return (
    <div className="video">
        <video className="video__file" preload="auto" autoPlay loop muted src={ File }></video>
        <div className="video__pattern"></div>
    </div>
  )
}
 
export default Video;

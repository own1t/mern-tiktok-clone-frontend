// React
import React, { useRef, useState } from "react";

// Components
import VideoFooter from "./VideoFooter";
import VideoSidebar from "./VideoSidebar";

// CSS
import "./Video.css";

function Video({ url, channel, description, song, likes, messages, shares }) {
  const [playing, setPlaying] = useState(false);

  const videoRef = useRef(null);

  const handleVideoPlay = () => {
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <>
      <div className="video">
        <video
          className="video__player"
          controls="controls"
          ref={videoRef}
          src={url}
          loop
          onClick={handleVideoPlay}
        ></video>

        <VideoFooter channel={channel} description={description} song={song} />
        <VideoSidebar likes={likes} shares={shares} messages={messages} />
      </div>
    </>
  );
}

export default Video;

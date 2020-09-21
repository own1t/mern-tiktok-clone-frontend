// React
import React, { useRef, useState } from "react";

// CSS
import "./Video.css";

function Video() {
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
          src="https://www.youtube.com/embed/rn9AQoI7mYU"
          loop
          onClick={handleVideoPlay}
        ></video>
      </div>
    </>
  );
}

export default Video;

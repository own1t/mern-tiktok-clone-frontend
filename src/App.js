// React
import React, { useEffect, useState } from "react";

// Axios
import axios from "./axios";

// Components
import Video from "./components/Video";

// CSS
import "./App.css";

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      const res = await axios.get("/api/posts");
      setVideos(res.data);
    }

    fetchPosts();
  }, []);

  return (
    <div className="app">
      <div className="app__videos">
        {videos.map(
          ({ url, channel, description, song, likes, messages, shares }) => (
            <Video
              url={url}
              channel={channel}
              description={description}
              song={song}
              likes={likes}
              messages={messages}
              shares={shares}
            />
          )
        )}
      </div>
    </div>
  );
}

export default App;

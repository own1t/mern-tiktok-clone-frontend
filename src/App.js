// React
import React from "react";

// Views

// Components
import Video from "./components/Video";

// CSS
import "./App.css";

function App() {
  return (
    <div className="app">
      <div className="app__videos">
        <Video
          url=""
          channel="ownit"
          description="This is description"
          song="Lean On"
          likes={100}
          messages={300}
          shares={200}
        />

        <Video
          url=""
          channel="ownit"
          description="This is description"
          song="Lean On"
          likes={100}
          messages={300}
          shares={200}
        />
      </div>
    </div>
  );
}

export default App;

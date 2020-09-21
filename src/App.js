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
        <Video />
        <Video />
      </div>
    </div>
  );
}

export default App;

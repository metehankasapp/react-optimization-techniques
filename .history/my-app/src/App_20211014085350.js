import React, { useState } from "react";
import "./App.css";
import DemoOutput from "./Demo/DemoOutput";

function App() {
  const [showParagraph, setShowParagraph] = useState(false);

  const toggleParagraph = () => {
    // --setShowParagraph(!showParagraph);
    //++
    setShowParagraph((prevShowParagraph) => !prevShowParagraph);
  };
  return (
    <div className="App">
      <h1>Hi there !</h1>
      {showParagraph && <DemoOutput show={showParagraph}/>}
      <button onClick={toggleParagraph}>Show paragraph</button>
    </div>
  );
}

export default App;

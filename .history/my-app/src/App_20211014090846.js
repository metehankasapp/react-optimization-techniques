import React, { useState } from "react";
import "./App.css";
import DemoOutput from "./Demo/DemoOutput";

function App() {
  const [showParagraph, setShowParagraph] = useState(false);
  console.log('App output');

  const toggleParagraph = () => {
    // --setShowParagraph(!showParagraph);
    //++
    setShowParagraph((prevShowParagraph) => !prevShowParagraph);
  };
  return (
    <div className="App">
      <h1>Hi there !</h1>
      <DemoOutput show={false} />
      <button onClick={toggleParagraph}>Show paragraph</button>
    </div>
  );
}

export default App;

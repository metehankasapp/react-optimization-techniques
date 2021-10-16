import React, { useState } from "react";
import "./App.css";

function App() {
  const [showParagraph, setShowParagraph] = useState(false);


  const toggleParagraph = ()=>{
    setShowParagraph(!showParagraph);
  }
  return (
    <div className="App">
      <h1>Hi there !</h1>
      {showParagraph && <p>This is New</p>}
      <button onClick={toggleParagraph}>Show paragraph</button>
    </div>
  );
}

export default App;

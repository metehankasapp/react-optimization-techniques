import React, { useState } from "react";
import "./App.css";

function App() {
  const [showParagraph, setShowParagraph] = useState(false);
  return (
    <div className="App">
      <h1>Hi there !</h1>
      {showParagraph && <p>This is New</p>}
    </div>
  );
}

export default App;
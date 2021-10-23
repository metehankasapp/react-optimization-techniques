import React, { useCallback, useState } from "react";
import "./App.css";
import DemoOutput from "./Demo/DemoOutput";

function App() {
  const [showParagraph, setShowParagraph] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);

  console.log("app output");

  // Aşağıdaki Callback fonksiyonu datayı tutar ve butona tıklandığın da belli olmaz.
  const toggleParagraph = useCallback(() => {
    // --setShowParagraph(!showParagraph);
    //++
    if (allowToggle) {
      setShowParagraph((prevShowParagraph) => !prevShowParagraph);
    }
  }, [allowToggle]);
  //Eğer usecallback kullanırken içerik olarak [] boş bırakırsan sadece app yükledndiğinde çalışır ve diğer türlü çalışmaz
  // eğer bir fonksionda 2 den fazla değişiklik yani state güncellemesi varsa react bunun iki state güncellemesini de aynı şekilde yapar.ub yanlıştır.
  // bunu dğzeltmek için usecallback kullanılabilir.

  const allowToggleHandler = () => {
    setAllowToggle(true);
  };
  return (
    <div className="App">
      <h1>Hi there !</h1>
      <DemoOutput show={showParagraph} />
      <button onClick={allowToggleHandler}>Allow Toggling</button>
      <button onClick={toggleParagraph}>Show paragraph</button>
    </div>
  );
}

export default App;

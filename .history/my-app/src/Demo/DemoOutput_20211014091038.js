import React from "react";
import MyParagraph rom './MyParagraph';

const DemoOutput = (props) => {
  console.log("demo output");
  return (
    <p>
      <MyParagraph>{props.show ? "This is New" : ""}</MyParagraph>
    </p>
  );
};

export default React.memo(DemoOutput);

//React memo kullandığımız zaman eğer o bileşen değişrise tekrardan çalıştırmasıdır. eğer kullanamssak en st düzeydeki bileşen
//değişğinde demooutput js yine çalışma durumunda kalır.
// ve eğer bir bileşen yürütülüyorsa onun alt elementi de yürütülmez. tıpkı şu anda demooutpunun altındaki eleemt yürütülmediği gibi.

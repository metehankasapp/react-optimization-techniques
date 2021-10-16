import React from "react";

const DemoOutput = (props) => {
    console.log('demo output');
  return <p>{props.show ? "This is New" : ""}</p>;
};

export default React.memo(DemoOutput);



//React memo kullandığımız zaman eğer o bileşen değişrise tekrardan çalıştırmasıdır. eğer kullanamssak en st düzeydeki bileşen
//değişğinde demooutput js yine çalışma durumunda kalır.
// ve eğer bir bileşen yürütülüyorsa onun alt elementi de yürütülmez. tıpkı şu anda demooutpunun altındaki eleemt yürütülmediği gibi.
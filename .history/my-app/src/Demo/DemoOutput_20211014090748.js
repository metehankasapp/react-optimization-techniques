import React from "react";

const DemoOutput = (props) => {
  return <p>{props.show ? "This is New" : ""}</p>;
};

export default React.memo(DemoOutput);



//React memo kullandığımız zaman eğer o bileşen değişrise tekrardan çalıştırmasıdır. eğer kullanamssak en st düzeydeki bileşen
//değişğinde demooutput js yine çalışma durumunda kalır.
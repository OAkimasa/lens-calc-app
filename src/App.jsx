import React, { useState } from "react";
import { AddLensSurface } from "./calculation/AddLensSurface";
import { CreateParamList } from "./calculation/CreateParamList";

export const App = () => {
  const [nLensLeft, setNLensLeft] = useState("");
  const [nLensRight, setNLensRight] = useState("");
  const [aLensParams, setALensParams] = useState([1,1]);

  const onchangeInputNLensLeft = (event) => setNLensLeft(event.target.value);
  const onchangeInputNLensRight = (event) => setNLensRight(event.target.value);

  // パラメーター追加ボタン
  const onClickAddParams = () => {
    if (nLensLeft === "") return;
    if (nLensRight === "") return;
    if (isNaN === Number(nLensLeft)) {
      alert("数値を入力してください（左側屈折率）");
      console.log(Number(nLensLeft));
    };

    const newALensParams = [nLensLeft, nLensRight];
    setALensParams(newALensParams);
    setNLensLeft("");
    setNLensRight("");
  };

  return (
    <>
      <AddLensSurface
        nLensLeft={nLensLeft}
        nLensRight={nLensRight}
        onchangeInputNLensLeft={onchangeInputNLensLeft}
        onchangeInputNLensRight={onchangeInputNLensRight}
        onClickAddParams={onClickAddParams}
      />
      <CreateParamList 
        aLensParams={aLensParams}
      />
    </>
  );
};

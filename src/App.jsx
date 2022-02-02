import React, { useState } from "react";
import "./styles.css";
import { AddLensSurface } from "./calculation/AddLensSurface";
import { CreateParamList } from "./calculation/CreateParamList";

export const App = () => {
  // 境界 1つについてのパラメーターリスト
  const [aLensParams, setALensParams] = useState([1.0000,1.0000]);
  // 細かい入力パラメーター
  const [nLensLeft, setNLensLeft] = useState("");
  const [nLensRight, setNLensRight] = useState("");

  // パラメーターの入力処理
  const onchangeInputNLensLeft = (event) => setNLensLeft(event.target.value);
  const onchangeInputNLensRight = (event) => setNLensRight(event.target.value);

  // パラメーター追加ボタン
  const onClickAddParams = () => {
    if (nLensLeft === "") return;
    if (nLensRight === "") return;
    if (isNaN(nLensLeft)) {
      alert("数値を入力してください（左側屈折率）");
      setNLensLeft("");
      setNLensRight("");
      return;
    };
    if (isNaN(nLensRight)) {
      alert("数値を入力してください（右側屈折率）");
      setNLensLeft("");
      setNLensRight("");
      return;
    };

    // 全て数値の場合のみパラメーターを更新
    const newALensParams = [nLensLeft, nLensRight];
    setALensParams(newALensParams);
    setNLensLeft("");
    setNLensRight("");
  };

  // パラメーターの入力
  // 入力されたパラメーターの表示
  return (
    <>
      <p className="title">Let's Lens Simulation!!!</p>
      <div className="text-red-400">tailwind test!!!!!</div>
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

import React, { useState } from "react";
import "./styles.css";
import { AddLensSurface } from "./calculation/AddLensSurface";
import { CreateParamList } from "./calculation/CreateParamList";
import { DefaultLayout } from "./components/templetes/DefaultLayout";
import { DrawLensGraphic } from "./calculation/DrawLensGraphic";

export const App = () => {
  // 全ての境界のパラメーターリスト
  const [allLensParams, setAllLensParams] = useState([]);
  // 境界 1つについてのパラメーターリスト
  const [aLensParams, setALensParams] = useState([]);
  // 細かい入力パラメーター
  const [nLensLeft, setNLensLeft] = useState("");
  const [nLensRight, setNLensRight] = useState("");
  const [curvature, setCurvature] = useState("");
  const [pointX, setPointX] = useState("");

  // パラメーターの入力処理
  const onchangeInputNLensLeft = (event) => setNLensLeft(event.target.value);
  const onchangeInputNLensRight = (event) => setNLensRight(event.target.value);
  const onchangeInputCurvature = (event) => setCurvature(event.target.value);
  const onchangeInputPointX = (event) => setPointX(event.target.value);

  // パラメーター追加ボタン
  const onClickAddParams = () => {
    if (aLensParams === []) return;
    if (nLensLeft === "") return;
    if (nLensRight === "") return;
    if (curvature === "") return;
    if (pointX === "") return;
    if (isNaN(nLensLeft)) {
      alert("数値を入力してください（左側屈折率）");
      setNLensLeft("");
      setNLensRight("");
      setCurvature("");
      setPointX("");
      return;
    };
    if (isNaN(nLensRight)) {
      alert("数値を入力してください（右側屈折率）");
      setNLensLeft("");
      setNLensRight("");
      setCurvature("");
      setPointX("");
      return;
    };
    if (isNaN(curvature)) {
      alert("数値を入力してください（球面の曲率）");
      setNLensLeft("");
      setNLensRight("");
      setCurvature("");
      setPointX("");
      return;
    };
    if (isNaN(pointX)) {
      alert("数値を入力してください（レンズの位置 x）");
      setNLensLeft("");
      setNLensRight("");
      setCurvature("");
      setPointX("");
      return;
    };

    // 全て数値の場合のみパラメーターを更新
    const newALensParams = [nLensLeft, nLensRight, curvature, pointX];
    setALensParams(newALensParams);
    //setNLensLeft(nLensRight);
    setNLensLeft("");
    setNLensRight("");
    setCurvature("");
    setPointX("");
    const newParams = [...allLensParams, newALensParams];
    setAllLensParams(newParams);
  };

  // パラメーターの入力
  // 入力されたパラメーターの表示
  return (
    <>
    <head>
      <script src="https://www.desmos.com/api/v1.6/calculator.js?apiKey=dcb31709b452b1cf9dc26972add0fda6"></script>
    </head>
    <DefaultLayout>
      <main class="mx-0 mb-auto">
        <div class="">
          <h1 class="text-gray-800 text-9xl mx-3">Lens</h1>
          <h1 class="text-gray-800 text-9xl mx-3">Calculation</h1>
          <h1 class="h-40 text-gray-800 text-9xl mx-3">System</h1>
        </div>

        <AddLensSurface
          nLensLeft={nLensLeft}
          nLensRight={nLensRight}
          curvature={curvature}
          pointX={pointX}
          onchangeInputNLensLeft={onchangeInputNLensLeft}
          onchangeInputNLensRight={onchangeInputNLensRight}
          onchangeInputCurvature={onchangeInputCurvature}
          onchangeInputPointX={onchangeInputPointX}
          onClickAddParams={onClickAddParams}
        />

        <DrawLensGraphic
          allLensParams={allLensParams}
        />

        <CreateParamList 
          allLensParams={allLensParams}
        />

        <br />

      </main>
    </DefaultLayout>
    </>
  );
};

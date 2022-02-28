import React, { useState } from "react";
import "./styles.css";
import { AddLensSurface } from "./calculation/AddLensSurface";
import { CreateParamList } from "./calculation/CreateParamList";
import { DefaultLayout } from "./components/templetes/DefaultLayout";
import { DrawLensGraphic } from "./calculation/DrawLensGraphic";
import { LensTemplates } from "./calculation/LensTemplates";

export const App = () => {
  // 全ての境界のパラメーターリスト
  const [allLensParams, setAllLensParams] = useState([]);
  // 境界 1つについてのパラメーターリスト
  const [aLensParams, setALensParams] = useState([]);
  // 細かい入力パラメーター
  const [nLensLeft, setNLensLeft] = useState("");
  const [nLensRight, setNLensRight] = useState("");
  const [surfaceRadius, setSurfaceRadius] = useState("");
  const [pointX, setPointX] = useState("");
  const [lensRadius, setLensRadius] = useState("");

  // パラメーターの入力処理
  const onchangeInputNLensLeft = (event) => setNLensLeft(event.target.value);
  const onchangeInputNLensRight = (event) => setNLensRight(event.target.value);
  const onchangeInputSurfaceRadius = (event) => setSurfaceRadius(event.target.value);
  const onchangeInputPointX = (event) => setPointX(event.target.value);
  const onchangeInputLensRadius = (event) => setLensRadius(event.target.value);

  // パラメーター追加ボタン
  const onClickAddParams = () => {
    if (aLensParams === []) return;
    if (nLensLeft === "") return;
    if (nLensRight === "") return;
    if (surfaceRadius === "") return;
    if (pointX === "") return;
    if (lensRadius === "") return;
    if (isNaN(nLensLeft)) {
      alert("数値を入力してください（左側屈折率）");
      setNLensLeft("");
      setNLensRight("");
      setSurfaceRadius("");
      setPointX("");
      setLensRadius("");
      return;
    };
    if (isNaN(nLensRight)) {
      alert("数値を入力してください（右側屈折率）");
      setNLensLeft("");
      setNLensRight("");
      setSurfaceRadius("");
      setPointX("");
      setLensRadius("");
      return;
    };
    if (isNaN(surfaceRadius)) {
      alert("数値を入力してください（球面の曲率）");
      setNLensLeft("");
      setNLensRight("");
      setSurfaceRadius("");
      setPointX("");
      setLensRadius("");
      return;
    };
    if (isNaN(pointX)) {
      alert("数値を入力してください（レンズの位置 x）");
      setNLensLeft("");
      setNLensRight("");
      setSurfaceRadius("");
      setPointX("");
      setLensRadius("");
      return;
    };
    if (isNaN(lensRadius)) {
      alert("数値を入力してください（レンズ半径）");
      setNLensLeft("");
      setNLensRight("");
      setSurfaceRadius("");
      setPointX("");
      setLensRadius("");
      return;
    };

    // 全て数値の場合のみパラメーターを更新
    const newALensParams = [nLensLeft, nLensRight, surfaceRadius, pointX, lensRadius];
    setALensParams(newALensParams);
    //setNLensLeft(nLensRight);
    setNLensLeft(nLensRight);
    setNLensRight("");
    setSurfaceRadius("");
    setPointX("");
    setLensRadius("");
    const newParams = [...allLensParams, newALensParams];
    setAllLensParams(newParams);
  };

  // パラメーターの入力
  // APIキーはデモ用
  // 入力されたパラメーターの表示
  return (
    <>
      <head>
        <script src="https://www.desmos.com/api/v1.6/calculator.js?apiKey=dcb31709b452b1cf9dc26972add0fda6"></script>
      </head>
      <DefaultLayout>
        <main className="mx-0 mb-auto mt-3">
          <div className="">
            <h1 className="text-gray-800 text-5xl mx-6">Lens</h1>
            <h1 className="text-gray-800 text-5xl mx-6">Calculation</h1>
          </div>
          <div className="lg:flex">
            <DrawLensGraphic
              allLensParams={allLensParams}
            />
            <LensTemplates />
          </div>
          <div className="lg:grid lg:grid-cols-2">
            <CreateParamList
              allLensParams={allLensParams}
            />
            <AddLensSurface
              nLensLeft={nLensLeft}
              nLensRight={nLensRight}
              surfaceRadius={surfaceRadius}
              pointX={pointX}
              lensRadius={lensRadius}
              onchangeInputNLensLeft={onchangeInputNLensLeft}
              onchangeInputNLensRight={onchangeInputNLensRight}
              onchangeInputSurfaceRadius={onchangeInputSurfaceRadius}
              onchangeInputPointX={onchangeInputPointX}
              onchangeInputLensRadius={onchangeInputLensRadius}
              onClickAddParams={onClickAddParams}
            />
          </div>
          <br />
        </main>
      </DefaultLayout>
    </>
  );
};

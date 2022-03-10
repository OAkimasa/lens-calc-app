import React, { useState } from "react";
import "./styles.css";
import { AddLensSurface } from "./calculation/AddLensSurface";
import { CreateParamList } from "./calculation/CreateParamList";
import { DefaultLayout } from "./components/templetes/DefaultLayout";
import { DrawLensGraphic } from "./calculation/DrawLensGraphic";
import { LensTemplates } from "./calculation/LensTemplates";

export const App = () => {
  const [calc, setCalc] = useState();
  const allRayParams = []
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

  // レンズテンプレート操作
  const setWaterBallParams = () => {
    // desmos reset
    calc.removeExpressions(calc.getExpressions())
    setAllLensParams(
      [[1, 1.333, 3, 0, 3],
      [1.333, 1, -3, 6, 3],
      [1, 1, 1000, 100, 1000]]
    )
  }
  const set135mmLensParams = () => {
    // desmos reset
    calc.removeExpressions(calc.getExpressions())
    setAllLensParams(
      [[1, 1.60008, 4.78, 0, 1.791],
      [1.60008, 1.49552, -9.3, 0.756, 1.791],
      [1.49552, 1, 26.25, 1.026, 1.788],
      [1, 1.61506, -11.27, 1.886, 1.26],
      [1.61506, 1, 4.3, 2.4, 1.26],
      [1, 1.50592, 1000, 3.676, 1.395],
      [1.50592, 1.58619, 6.58, 3.876, 1.395],
      [1.58619, 1, -9.305, 4.456, 1.395],
      [1, 1, 1000, 100, 100]]
    )
  }
  const setSemicircle1Params = () => {
    // desmos reset
    calc.removeExpressions(calc.getExpressions())
    setAllLensParams(
      [[1, 1.6, 3, 0, 3],
      [1.6, 1, -1000, 3, 3],
      [1, 1, 1000, 100, 1000]]
    )
  }
  const setSemicircle2Params = () => {
    // desmos reset
    calc.removeExpressions(calc.getExpressions())
    setAllLensParams(
      [[1, 1.6, 1000, 0, 3],
      [1.6, 1, -3, 3, 3],
      [1, 1, 1000, 100, 1000]]
    )
  }
  const deleteAllExpression = () => {
    // desmos reset
    calc.removeExpressions(calc.getExpressions())
    setAllLensParams([])
    allRayParams.length = 0;
    setNLensLeft("");
    setNLensRight("");
    setSurfaceRadius("");
    setPointX("");
    setLensRadius("");
  }

  // パラメーター編集
  const editParamFunc = (index0, index1) => {
    const editIndex = Number(String(index0)+String(index1))
    const target = document.getElementById(editIndex)
    const newAllLensParams = [...allLensParams]
    // 新規入力で上書き
    newAllLensParams[index0][index1] = Number(target.value)
    setAllLensParams(newAllLensParams)
  }

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
      <DefaultLayout>
        <main className="mx-0 mb-auto mt-3">
          <div className="">
            <h1 className="text-gray-800 text-5xl mx-6">Lens</h1>
            <h1 className="text-gray-800 text-5xl mx-6">Refraction</h1>
            <h1 className="text-gray-800 text-5xl mx-6">Calculator</h1>
          </div>
          <div className="lg:flex">
            <DrawLensGraphic
              allLensParams={allLensParams}
              allRayParams={allRayParams}
              calc={calc}
              setCalc={setCalc}
            />
            <LensTemplates
              setWaterBallParams={setWaterBallParams}
              set135mmLensParams={set135mmLensParams}
              setSemicircle1Params={setSemicircle1Params}
              setSemicircle2Params={setSemicircle2Params}
              deleteAllExpression={deleteAllExpression}
            />
          </div>
          {/*<div className="lg:grid lg:grid-cols-2">*/}
          <div className="lg:grid lg:grid-cols-1">
            {/*<div className="lg:ml-32">*/}
            <div className="lg:flex lg:justify-center">
              <CreateParamList
                allLensParams={allLensParams}
                editParamFunc={editParamFunc}
              />
            </div>
            {/*<AddLensSurface
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
  />*/}
          </div>
          <br />
          <p className="flex justify-center">The unit of length is cm.</p>
        </main>
      </DefaultLayout>
    </>
  );
};

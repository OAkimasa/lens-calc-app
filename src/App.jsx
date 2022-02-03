import React, { useState } from "react";
import "./styles.css";
import { AddLensSurface } from "./calculation/AddLensSurface";
import { CreateParamList } from "./calculation/CreateParamList";
import { DefaultLayout } from "./components/templetes/DefaultLayout";

export const App = () => {
  // 全ての境界のパラメーターリスト
  const [allLensParams, setAllLensParams] = useState([]);
  // 境界 1つについてのパラメーターリスト
  const [aLensParams, setALensParams] = useState([]);
  // 細かい入力パラメーター
  const [nLensLeft, setNLensLeft] = useState("");
  const [nLensRight, setNLensRight] = useState("");

  // パラメーターの入力処理
  const onchangeInputNLensLeft = (event) => setNLensLeft(event.target.value);
  const onchangeInputNLensRight = (event) => setNLensRight(event.target.value);

  // パラメーター追加ボタン
  const onClickAddParams = () => {
    if (aLensParams === []) return;
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
    //setNLensLeft(nLensRight);
    setNLensLeft("");
    setNLensRight("");
    const newParams = [...allLensParams, newALensParams];
    setAllLensParams(newParams);
  };

  // パラメーターの入力
  // 入力されたパラメーターの表示
  return (
    <DefaultLayout>
      <main class="mx-2 mb-auto">
        <p class="text-gray-800 text-9xl">Let's</p>
        <p class="text-gray-800 text-9xl">Lens</p>
        <p class="text-gray-800 text-9xl">Simulation!!!</p>
        <div class="text-gray-800 text-5xl">tailwind test success!!!!!</div>
        <AddLensSurface
          nLensLeft={nLensLeft}
          nLensRight={nLensRight}
          onchangeInputNLensLeft={onchangeInputNLensLeft}
          onchangeInputNLensRight={onchangeInputNLensRight}
          onClickAddParams={onClickAddParams}
        />
        <CreateParamList 
          allLensParams={allLensParams}
        />
        <br />
      </main>
    </DefaultLayout>
  );
};

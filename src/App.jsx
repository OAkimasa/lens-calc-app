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
      <main class="mx-0 mb-auto">
        <div class="">
          <h1 class="text-gray-800 text-9xl mx-3">Lens</h1>
          <h1 class="text-gray-800 text-9xl mx-3">Calculation</h1>
          <h1 class="h-40 text-gray-800 text-9xl mx-3">System</h1>
        </div>
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

import React, { useState } from "react";

export const App = () => {
  const [inputLensCount, setInputLensCount] = useState("");
  const [totalLensCount, setTotalLensCount] = useState([0]);

  const onchangeInputLensCount = (event) => setInputLensCount(event.target.value);

  // レンズ枚数決定ボタンの機能
  const onClickDecideLensCount = () => {
    if (inputLensCount === "") return;
    const newInputLensCount = Number(inputLensCount);
    if (!isNaN(newInputLensCount)) {
      setTotalLensCount(newInputLensCount);
      setInputLensCount("");
    } else {
      alert("数値を入力してください");
    }
  };

  return (
    <>
      <p>Let's Lens Simulation!!!</p>
      <input
        onChange={onchangeInputLensCount}
        placeholder="レンズ枚数を入力"
        value={inputLensCount}
      />
      <button onClick={onClickDecideLensCount}>決定</button>
      <p>レンズ枚数 = {totalLensCount}</p>
      <p>屈折境界面数 = {totalLensCount*2}</p>
    </>
  );
};

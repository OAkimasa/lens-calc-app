import React from "react";

export const AddLensSurface = (props) => {
    const { nLensLeft, nLensRight, onchangeInputNLensLeft, onchangeInputNLensRight, onClickAddParams } = props;
    return (
        <div>
            <p>Let's Lens Simulation!!!</p>
            <input
            onChange={onchangeInputNLensLeft}
            placeholder="左側の屈折率を入力"
            value={nLensLeft}
            />
            <input
            onChange={onchangeInputNLensRight}
            placeholder="右側の屈折率を入力"
            value={nLensRight}
            />
            <button onClick={onClickAddParams}>決定</button>
        </div>
    );
};
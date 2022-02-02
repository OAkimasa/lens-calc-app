import React from "react";
import { PrimaryButton } from "../components/atoms/button/PrimaryButton";

export const AddLensSurface = (props) => {
    const { nLensLeft, nLensRight, onchangeInputNLensLeft, onchangeInputNLensRight, onClickAddParams } = props;
    return (
        <div className="input-params-area">
            <a href="#">
                <p className="num-title">left n</p>
                <input type="number" step="0.00001"
                onChange={onchangeInputNLensLeft}
                placeholder="左側の屈折率を入力"
                value={nLensLeft}
                />
                <br></br>
                <p className="num-title">right n</p>
                <input type="number" step="0.00001"
                onChange={onchangeInputNLensRight}
                placeholder="右側の屈折率を入力"
                value={nLensRight}
                />
                <br></br>
                <PrimaryButton className="button" onClick={onClickAddParams}>
                    決定
                </PrimaryButton>
            </a>
        </div>
    );
};
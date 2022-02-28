import React, { memo } from "react";
import { PrimaryButton } from "../components/atoms/button/PrimaryButton";
import { InputWithLabel } from "../components/molecules/InputWithLabel";

export const AddLensSurface = memo((props) => {
    const { nLensLeft, nLensRight, surfaceRadius, pointX, lensRadius, onchangeInputNLensLeft, onchangeInputNLensRight, onchangeInputSurfaceRadius, onchangeInputPointX, onchangeInputLensRadius, onClickAddParams } = props;
    return (
        <div className="mx-4 my-6 flex justify-center">
            <br />
            <div className="mb-2 mx-2">
                <InputWithLabel
                    onChange={onchangeInputNLensLeft}
                    placeholder="左側の屈折率を入力"
                    value={nLensLeft}
                >
                    - Left n -
                </InputWithLabel>

                <InputWithLabel
                    onChange={onchangeInputNLensRight}
                    placeholder="右側の屈折率を入力"
                    value={nLensRight}
                >
                    - Right n -
                </InputWithLabel>

                <InputWithLabel
                    onChange={onchangeInputSurfaceRadius}
                    placeholder="球面の曲率半径を入力"
                    value={surfaceRadius}
                >
                    - Surface Radius -
                </InputWithLabel>

                <InputWithLabel
                    onChange={onchangeInputPointX}
                    placeholder="球面の位置を入力"
                    value={pointX}
                >
                    - Point x -
                </InputWithLabel>

                <InputWithLabel
                    onChange={onchangeInputLensRadius}
                    placeholder="レンズ半径を入力"
                    value={lensRadius}
                >
                    - Lens Radius -
                </InputWithLabel>

                <PrimaryButton onClick={onClickAddParams}>
                    Add Surface
                </PrimaryButton>
            </div>
        </div>
    );
});
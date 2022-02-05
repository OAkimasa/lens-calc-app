import React, { memo } from "react";
import { PrimaryButton } from "../components/atoms/button/PrimaryButton";
import { InputWithLabel } from "../components/molecules/InputWithLabel";

export const AddLensSurface = memo((props) => {
    const { nLensLeft, nLensRight, curvature, pointX, onchangeInputNLensLeft, onchangeInputNLensRight, onchangeInputCurvature, onchangeInputPointX, onClickAddParams } = props;
    return (
        <div class="mx-4 my-6">
            <br />
            <div class="mb-2 mx-2">
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
                    onChange={onchangeInputCurvature}
                    placeholder="球面の曲率を入力"
                    value={curvature}
                >
                    - Curvature -
                </InputWithLabel>

                <InputWithLabel
                    onChange={onchangeInputPointX}
                    placeholder="球面の位置を入力"
                    value={pointX}
                >
                    - Point x -
                </InputWithLabel>

                <PrimaryButton onClick={onClickAddParams}>
                    Add Surface
                </PrimaryButton>
            </div>
        </div>
    );
});
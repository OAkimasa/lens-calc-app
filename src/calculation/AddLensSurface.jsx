import React from "react";
import { PrimaryButton } from "../components/atoms/button/PrimaryButton";
import { InputWithLabel } from "../components/molecules/InputWithLabel";

export const AddLensSurface = (props) => {
    const { nLensLeft, nLensRight, onchangeInputNLensLeft, onchangeInputNLensRight, onClickAddParams } = props;
    return (
        <div class="mx-2">
            <a>
                <InputWithLabel
                onChange={onchangeInputNLensLeft}
                placeholder="左側の屈折率を入力"
                value={nLensLeft}
                >
                    left n
                </InputWithLabel>
                <InputWithLabel
                    onChange={onchangeInputNLensRight}
                    placeholder="右側の屈折率を入力"
                    value={nLensRight}
                >
                    right n
                </InputWithLabel>
                <PrimaryButton onClick={onClickAddParams}>
                    Add Surface
                </PrimaryButton>
            </a>
        </div>
    );
};
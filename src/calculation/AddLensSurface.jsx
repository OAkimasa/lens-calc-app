import React from "react";
import { PrimaryButton } from "../components/atoms/button/PrimaryButton";
import { Input } from "../components/atoms/input/Input";
import { PrimaryLabel } from "../components/atoms/label/PrimaryLabel";

export const AddLensSurface = (props) => {
    const { nLensLeft, nLensRight, onchangeInputNLensLeft, onchangeInputNLensRight, onClickAddParams } = props;
    return (
        <div className="input-params-area">
            <a>
                <PrimaryLabel>left n</PrimaryLabel>
                <Input
                onChange={onchangeInputNLensLeft}
                placeholder="左側の屈折率を入力"
                value={nLensLeft}
                />
                <br></br>
                <PrimaryLabel>right n</PrimaryLabel>
                <Input
                onChange={onchangeInputNLensRight}
                placeholder="右側の屈折率を入力"
                value={nLensRight}
                />
                <br></br>
                <PrimaryButton onClick={onClickAddParams}>
                    Add Surface 1
                </PrimaryButton>
            </a>
        </div>
    );
};
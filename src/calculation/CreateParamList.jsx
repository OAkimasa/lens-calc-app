import React from "react";
import { PrimaryLabel } from "../components/atoms/label/PrimaryLabel";

export const CreateParamList = (props) => {
    const { aLensParams } = props;
    return (
        <div>
            <a>
                <PrimaryLabel>Surface 1 Params</PrimaryLabel>
                <div>
                    <ul>
                        <PrimaryLabel>left n = {aLensParams[0]}</PrimaryLabel>
                        <PrimaryLabel>right n = {aLensParams[1]}</PrimaryLabel>
                    </ul>
                </div>
            </a>
        </div>
    );
};
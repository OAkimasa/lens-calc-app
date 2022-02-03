import React from "react";
import { PrimaryLabel } from "../components/atoms/label/PrimaryLabel";

export const CreateParamList = (props) => {
    const { aLensParams } = props;
    return (
        <div class="mx-2">
            <a>
                <PrimaryLabel>Surface 1 Params</PrimaryLabel>
                <div>
                    <ul>
                        <PrimaryLabel>Left n = {aLensParams[0]}</PrimaryLabel>
                        <br />
                        <PrimaryLabel>Right n = {aLensParams[1]}</PrimaryLabel>
                        <br />
                    </ul>
                </div>
            </a>
        </div>
    );
};
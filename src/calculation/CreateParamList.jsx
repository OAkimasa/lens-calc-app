import { forceCenter } from "d3";
import React from "react";

export const CreateParamList = (props) => {
    const { aLensParams } = props;
    return (
        <div className="param-list-area">
            <a>
                <p className="title">＜ Surface 1 Params ＞</p>
                <div className="param-list-style">
                    <ul>
                        <li>left n = {aLensParams[0]}</li>
                        <li>right n = {aLensParams[1]}</li>
                    </ul>
                </div>
            </a>
        </div>
    );
};
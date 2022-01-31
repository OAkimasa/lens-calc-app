import React from "react";

export const CreateParamList = (props) => {
    const { aLensParams } = props;

    return (
        <div>
            <li>境界左 屈折率 = {aLensParams[0]}</li>
            <li>境界右 屈折率 = {aLensParams[1]}</li>
            <ul></ul>
        </div>
    );
};
import React, { memo } from "react";
import { PrimaryTable } from "../components/molecules/PrimayTable";

export const CreateParamList = memo((props) => {
    const { allLensParams,
            editParamFunc,
            addParamPlus,
            deleteParamMinus
            } = props;
    return (
        <div className="mx-6">
            <ul>
                <br />
                <PrimaryTable
                    editParamFunc={editParamFunc}
                    addParamPlus={addParamPlus}
                    deleteParamMinus={deleteParamMinus}
                >{allLensParams}</PrimaryTable>
            </ul>
        </div>
    );
});
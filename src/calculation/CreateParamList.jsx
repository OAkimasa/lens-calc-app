import React, { memo } from "react";
import { PrimaryTable } from "../components/molecules/PrimayTable";

export const CreateParamList = memo((props) => {
    const { allLensParams,
            editParamFunc
            } = props;
    return (
        <div className="mx-6">
            <ul>
                <br />
                <PrimaryTable
                    editParamFunc={editParamFunc}
                >{allLensParams}</PrimaryTable>
            </ul>
        </div>
    );
});
import React, { memo } from "react";
import { PrimaryTable } from "../components/molecules/PrimayTable";

export const CreateParamList = memo((props) => {
    const { allLensParams } = props;
    return (
        <div class="mx-6">
            <ul>
                <br />
                <PrimaryTable>{allLensParams}</PrimaryTable>
            </ul>
        </div>
    );
});
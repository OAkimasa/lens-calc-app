import React from "react";
import { PrimaryTable } from "../components/molecules/PrimayTable";

export const CreateParamList = (props) => {
    const { allLensParams } = props;
    return (
        <div class="mx-2">
            <div>
                <div>
                    <ul>
                        <br />
                        <PrimaryTable>{allLensParams}</PrimaryTable>
                    </ul>
                </div>
            </div>
        </div>
    );
};
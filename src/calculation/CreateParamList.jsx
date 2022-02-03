import React from "react";
import { PrimaryTable } from "../components/molecules/PrimayTable";

export const CreateParamList = (props) => {
    const { aLensParams } = props;
    return (
        <div class="mx-2">
            <div>
                <div>
                    <ul>
                        <br />
                        <PrimaryTable>{aLensParams}</PrimaryTable>
                    </ul>
                </div>
            </div>
        </div>
    );
};
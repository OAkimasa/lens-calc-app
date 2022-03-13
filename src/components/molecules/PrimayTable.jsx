import { memo } from "react";
import { PrimaryThread } from "../atoms/thread/PrimaryThread";
import { SecondaryThread } from "../atoms/thread/SecondaryThread";
import { PlusSmIcon } from '@heroicons/react/outline'
import { XCircleIcon } from '@heroicons/react/outline'

export const PrimaryTable = memo((props) => {
    const { children,
            editParamFunc,
            addParamPlus,
            deleteParamMinus
            } = props;
    return (
        <div className="flex flex-col max-w-fit">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block py-2 min-w-full sm:px-6 lg:px-8">
                    <div className="overflow-hidden rounded-xl drop-shadow-md sm:rounded-lg">
                        <table className="min-w-full">
                            <thead className="bg-gray-100 dark:bg-gray-700">
                                <tr>
                                    <SecondaryThread>- Surface -</SecondaryThread>
                                    <SecondaryThread>- Left n -</SecondaryThread>
                                    <SecondaryThread>- Right n -</SecondaryThread>
                                    <SecondaryThread>- Radius of Curvature -</SecondaryThread>
                                    <SecondaryThread>- Point x -</SecondaryThread>
                                    <SecondaryThread>- Lens Radius -</SecondaryThread>
                                </tr>
                            </thead>
                            <tbody className="bg-white border-b">
                                {children.map((param, index) => {
                                    return (
                                        <tr key={param} className="border focus-within:border-b-red-300">
                                            <div className="flex group hover:bg-red-400">
                                                <div className="text-gray-300 group-hover:text-gray-700">
                                                    <XCircleIcon class="h-6 w-6 mt-2 ml-2" stroke='currentcolor'/>
                                                </div>
                                                <SecondaryThread deleteParamMinus={deleteParamMinus}>{index + 1}</SecondaryThread>
                                            </div>
                                            <PrimaryThread editParamFunc={editParamFunc} index0={index} index1={0}>{param[0]}</PrimaryThread>
                                            <PrimaryThread editParamFunc={editParamFunc} index0={index} index1={1}>{param[1]}</PrimaryThread>
                                            <PrimaryThread editParamFunc={editParamFunc} index0={index} index1={2}>{param[2]}</PrimaryThread>
                                            <PrimaryThread editParamFunc={editParamFunc} index0={index} index1={3}>{param[3]}</PrimaryThread>
                                            <PrimaryThread editParamFunc={editParamFunc} index0={index} index1={4}>{param[4]}</PrimaryThread>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                    <div className="flex justify-left mt-2 ml-1">
                        <button className="w-24 flex justify-center text-gray-600 hover:bg-green-300" onClick={addParamPlus}>
                            <PlusSmIcon class="h-8 w-8" stroke='currentcolor'/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
});
import { memo } from "react";
import { PrimaryThread } from "../atoms/thread/PrimaryThread";

export const PrimaryTable = memo((props) => {
    const { children } = props;
    //console.log("children=",children);
    return (
        <div class="flex flex-col max-w-fit">
            <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div class="inline-block py-2 min-w-full sm:px-6 lg:px-8">
                    <div class="overflow-hidden rounded-xl drop-shadow-md sm:rounded-lg">
                        <table class="min-w-full">
                            <thead class="bg-gray-100 dark:bg-gray-700">
                                <tr>
                                    <PrimaryThread>- Surface -</PrimaryThread>
                                    <PrimaryThread>- Left n -</PrimaryThread>
                                    <PrimaryThread>- Right n -</PrimaryThread>
                                    <PrimaryThread>- Curvature -</PrimaryThread>
                                    <PrimaryThread>- Point x -</PrimaryThread>
                                    <PrimaryThread>- Lens Radius -</PrimaryThread>
                                </tr>
                            </thead>
                            <tbody class="bg-white border-b">
                                {children.map((param, index) => {
                                    return (
                                        <tr key={param} class="border">
                                            <PrimaryThread>{index+1}</PrimaryThread>
                                            <PrimaryThread>{param[0]}</PrimaryThread>
                                            <PrimaryThread>{param[1]}</PrimaryThread>
                                            <PrimaryThread>{param[2]}</PrimaryThread>
                                            <PrimaryThread>{param[3]}</PrimaryThread>
                                            <PrimaryThread>{param[4]}</PrimaryThread>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
});
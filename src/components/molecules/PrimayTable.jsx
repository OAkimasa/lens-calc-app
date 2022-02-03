import { PrimaryLabel } from "../atoms/label/PrimaryLabel";
import { PrimaryThread } from "../atoms/thread/PrimaryThread";

export const PrimaryTable = (props) => {
    const { children } = props;
    console.log(children);
    return (
        <div class="flex flex-col max-w-fit">
            <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div class="inline-block py-2 min-w-full sm:px-6 lg:px-8">
                    <div class="overflow-hidden rounded-xl shadow-md sm:rounded-lg">
                        <table class="min-w-full">
                            <thead class="bg-gray-100 dark:bg-gray-700">
                                <tr>
                                    <PrimaryThread>- Surface -</PrimaryThread>
                                    <PrimaryThread>- Left n -</PrimaryThread>
                                    <PrimaryThread>- Right n -</PrimaryThread>
                                </tr>
                            </thead>
                            <tbody class="bg-white border-b">
                                <tr>
                                    <PrimaryThread>1</PrimaryThread>
                                    <PrimaryThread>{children[0]}</PrimaryThread>
                                    <PrimaryThread>{children[1]}</PrimaryThread>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};
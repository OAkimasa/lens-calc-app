import { memo } from "react";

export const PrimaryThread = memo((props) => {
    const { children, editParamFunc, index0, index1 } = props;
    const editParam =()=> {
        editParamFunc(index0, index1)
    }
    return (
        <>
            {/*<td
                className="mb-2 text-xs font-medium text-gray-700 hover:bg-gray-300 text-center dark:text-gray-300
                    py-3 px-6 tracking-wider"
                onClick={editParam}
            >*/}
            <td>
                <input
                    className="w-32 py-3 px-6 text-xs font-medium text-gray-700 hover:bg-gray-200 text-center dark:text-gray-300 outline-gray-400 focus:ring-gray-900 tracking-wider"
                    defaultValue={children}
                    onBlur={editParam}
                    id={Number(String(index0)+String(index1))}
                />
            </td>
        </>
    );
});
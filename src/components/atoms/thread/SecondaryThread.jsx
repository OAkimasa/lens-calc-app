import { memo } from "react";

export const SecondaryThread = memo((props) => {
    const { children, deleteParamMinus } = props;
    const deleteParam = () => {
        deleteParamMinus(children)
    }
    return (
        <>
            <td
                className="text-xs font-medium text-gray-700 text-center dark:text-gray-300
                    py-3 px-6 tracking-wider"
                id={Number(String("00")+String(children))}
                onClick={deleteParam}
            >
                {children}
            </td>
        </>
    );
});
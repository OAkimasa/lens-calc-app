import { memo } from "react";

export const PrimaryThread = memo((props) => {
    const { children } = props;
    return (
        <>
            <td
                className="mb-2 text-xs font-medium text-gray-700 text-center dark:text-gray-300
                    py-3 px-6 tracking-wider"
            >
                {children}
            </td>
        </>
    );
});
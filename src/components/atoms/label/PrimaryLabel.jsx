import { memo } from "react";

export const PrimaryLabel = memo((props) => {
    const { children } = props;
    return <label
        className="mb-2 text-sm font-medium text-gray-700 dark:text-gray-300"
    >
        {children}
    </label>;
});
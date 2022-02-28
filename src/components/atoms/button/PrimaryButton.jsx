import { memo } from "react";

export const PrimaryButton = memo((props) => {
    const { onClick, children } = props;
    return <button
        onClick={event => onClick(event)}
        className="mx-0 my-2 bg-gray-700 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded-full drop-shadow-2xl"
    >
        {children}
    </button>;
});
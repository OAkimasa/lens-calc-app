import { memo } from "react";

export const SecondaryButton = memo((props) => {
    const { onClick, children } = props;
    return <button
        onClick={event => onClick(event)}
        className="bg-gray-300 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full drop-shadow-2xl"
    >
        {children}
    </button>;
});

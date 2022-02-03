export const SecondaryButton = (props) => {
    const { onClick, children } = props;
    return <button
        onClick={event => onClick(event)}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
    >
        {children}
    </button>;
};

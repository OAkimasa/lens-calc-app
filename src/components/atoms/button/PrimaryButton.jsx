export const PrimaryButton = (props) => {
    const { onClick, children } = props;
    return <button
        onClick={event => onClick(event)}
        class="my-2 bg-gray-700 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded-full"
    >
        {children}
    </button>;
};

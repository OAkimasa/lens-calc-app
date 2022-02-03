export const PrimaryLabel = (props) => {
    const { children } = props;
    return <label
    class="mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
    >
        {children}
    </label>;
};
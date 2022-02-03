export const Input = (props) => {
    const { onChange, placeholder = "", value } = props;
    return <input
        onChange={event => onChange(event)}
        placeholder={placeholder}
        value={value}
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-gray-900 focus:border-gray-900 block w-2/5 p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500"
    />;
};
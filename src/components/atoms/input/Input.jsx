import { memo } from "react";

export const Input = memo((props) => {
    const { onChange, placeholder = "", value } = props;
    return <input type="number" step="0.1"
        onChange={event => onChange(event)}
        placeholder={placeholder}
        value={value}
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm drop-shadow-md
            outline-gray-500 hover:bg-gray-100 rounded-full focus:ring-gray-900
            focus:border-gray-900 block w-2/5 min-w-fit max-w-fit p-1
            dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
            dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500"
        />;
});
import { memo } from "react";

export const Header = memo(() => {
    return (
        <header class="h-12 bg-gray-800 text-white text-2xl">
            <div class="mx-4 leading-10">
                LCS
            </div>
        </header>
    )
});
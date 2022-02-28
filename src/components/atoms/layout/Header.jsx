import { memo } from "react";

export const Header = memo(() => {
    return (
        <header className="flex h-12 bg-gray-800 text-white text-2xl">
            <div className="ml-4 leading-10 mt-1">
                Lens Calculation
            </div>
            <h1 className="text-gray-100 text-sm ml-4 mt-4">Ver. β</h1>
        </header>
    )
});
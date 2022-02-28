import { memo } from "react";
import { Footer } from "../atoms/layout/Footer";
import { Header } from "../atoms/layout/Header";

export const DefaultLayout = memo((props) => {
    const { children } = props;
    return (
        <>
            <div className="flex flex-col min-h-screen justify-between">
                <Header />
                {children}
                <Footer />
            </div>
        </>
    )
});
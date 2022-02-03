import { Footer } from "../atoms/layout/Footer";
import { Header } from "../atoms/layout/Header";

export const DefaultLayout = (props) => {
    const { children } = props;
    return (
        <div class="flex flex-col min-h-screen justify-between">
            <Header />
            {children}
            <Footer />
        </div>
    )
}
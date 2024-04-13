import { Outlet } from "react-router-dom";
import "./../scss/variables.scss"
import "./index.scss"
import Header from "./Header";
import Footer from "./Footer";

export default function Layout() {
    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}
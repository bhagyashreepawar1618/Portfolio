import react from "react";
import { Outlet } from "react-router-dom";
import Header from "./Layoutcomponents/Header/Header.jsx"
import Footer from "./Layoutcomponents/Footer/Footer.jsx"
function Layout(){
    return(
        <>
        <Header/>
        <Outlet/>
        <Footer/>
        </>
    )
}

export default Layout

import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Brands from "../pages/Brands/Brands";
import Card from "../pages/Card/Card";
import Contact from "../pages/Contact/Contact";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import NoteFound from "../pages/NoteFound/NoteFound";
import Register from "../pages/Register/Register";
import Shop from "../pages/Shop/Shop";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";

const Layout = () => {
    const location = useLocation();
    return (
        <>
            {location.pathname !== "/login" &&
            location.pathname !== "/register" ? (
                <Header />
            ) : (
                ""
            )}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/brands" element={<Brands />} />
                <Route path="/card" element={<Card />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="*" element={<NoteFound />} />
            </Routes>
            {location.pathname === "/" ||
            location.pathname === "/contact" ||
            location.pathname === "/brands" ||
            location.pathname === "/shop" ? (
                <Footer />
            ) : (
                ""
            )}
        </>
    );
};

export default Layout;

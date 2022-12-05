import React, { useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Logo from "../../assets/logo womazing.svg";
import { BsHandbag } from "react-icons/bs";
import { CustomContext } from "../../Context";
const Header = () => {
    const { t, i18n } = useTranslation();
    const { use } = useContext(CustomContext);
    
    const changesLanguage = (lang) => {
        i18n.changeLanguage(lang);
    };
    console.log(use);
    return (
        <div className="header">
            <div className="container">
                <nav className="header-nav">
                    <div className="header-logo">
                        <img src={Logo} alt="logo" />
                    </div>
                    <div className="header-links">
                        <NavLink className="header-link" to="/">
                            {t("header.link1")}
                        </NavLink>
                        <NavLink className="header-link" to="/shop">
                            {t("header.link2")}
                        </NavLink>
                        <NavLink className="header-link" to="/brands">
                            {t("header.link3")}
                        </NavLink>
                        <NavLink className="header-link" to="/contact">
                            {t("header.link4")}
                        </NavLink>
                    </div>
                    <div className="header-right">
                        <button className="header-right__bag">
                            <BsHandbag />
                        </button>
                    </div>
                    <div className="header-lang">
                        <button
                            type="button"
                            onClick={() => changesLanguage("ru")}>
                            ru
                        </button>
                        <br />
                        <button
                            type="button"
                            onClick={() => changesLanguage("en")}>
                            en
                        </button>
                    </div>
                    <Link to="/login">Войти</Link>
                </nav>
            </div>
        </div>
    );
};

export default Header;

import React, { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const CustomContext = createContext();

export const Context = (props) => {
    const [use, setUser] = useState({
        login: "h",
    });

    const navigate = useNavigate();

    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem("user")));
    }, []); //при отв свой даны при регистрация и при первый обновление эти функция сохраняет user

    const registerUser = (data) => {
        axios
            .post("http://localhost:8080/register", { ...data, orders: [] })
            .then((res) => {
                localStorage.setItem("user", JSON.stringify(res.data.user)); // keep login on refresh
                setUser(res.data.user);
                navigate("/");
            });
    };

    const logOutUser = () => {
        localStorage.removeItem("user");
        setUser({
            login: "hello",
        });
    };

    const value = {
        use,
        setUser,
        registerUser,
        logOutUser,
    };

    return (
        <CustomContext.Provider value={value}>
            {props.children}
        </CustomContext.Provider>
    );
};

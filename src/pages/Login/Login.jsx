import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <section className="login">
            <form className="login-form">
                <h2 className="login-form__title">Вход в аккаунт</h2>
                <input type="email" placeholder="Введите email" />
                <input type="password" placeholder="Введите пароль" />
                <button type="submit">Войти</button>
                <p className="login-form__buttom">
                    Нет аккаунта,{" "}
                    <Link to="/register" className="login-form__link">
                        Регистрация
                    </Link>
                </p>
            </form>
        </section>
    );
};

export default Login;

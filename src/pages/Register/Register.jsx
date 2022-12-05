import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { HOME } from "../../constants/routes";

const Register = () => {
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        // setError: { errors },
        // reset,
    } = useForm();

    const registerUser = (data) => {
        console.log(data);

        axios
            .post("http://localhost:8080/register", { ...data, orders: [] })
            .then((res) => {
                navigate({HOME});
            });
    };

    return (
        <section className="register">
            <form
                className="register-form"
                onSubmit={handleSubmit(registerUser)}>
                <h2>Регистрация</h2>
                <input
                    {...register("email")}
                    type="email"
                    placeholder="Введите email"
                />
                <input
                    {...register("tel")}
                    type="tel"
                    placeholder="Введите номер"
                />
                <input
                    {...register("login")}
                    type="text"
                    placeholder="Введите login"
                />
                <input
                    {...register("password")}
                    type="password"
                    placeholder="Введите пароль"
                />
                <input type="password" placeholder="Подвердить пароль" />
                <button type="submit">Регистрация</button>
                <p className="register-form__buttom">
                    Уже есть аккаунт,{" "}
                    <Link to="/login" className="register-form__link">
                        Войти
                    </Link>
                </p>
            </form>
        </section>
    );
};

export default Register;

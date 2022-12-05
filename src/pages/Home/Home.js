import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import img1 from "../../assets/Фото первый.png";
import { BsArrowDown } from "react-icons/bs";
// import db from "../../firebase/config";
const Home = () => {
    const [t] = useTranslation();

    useEffect(() => {
        
        
    }, []);
    return (
        <div className="container">
            <div className="home">
                <div className="home-desc">
                    <h1
                        className="home-title"
                        dangerouslySetInnerHTML={{ __html: t("home.text1") }}
                    />
                    <p
                        className="home-p"
                        dangerouslySetInnerHTML={{
                            __html: t("home.text2"),
                        }}></p>
                    <div className="home-btn">
                        <div className="home-btn__down">
                            <BsArrowDown />
                        </div>
                        <button className="home-btn__open" type="button">
                            Открыть магазин
                        </button>
                    </div>
                </div>
                <div className="home-img">
                    <img src={img1} alt="img" />
                </div>
            </div>
        </div>
    );
};

export default Home;

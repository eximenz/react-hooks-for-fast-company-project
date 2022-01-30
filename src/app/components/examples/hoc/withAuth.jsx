import React, { useState } from "react";
import CardWrapper from "../../common/Card";

const withAuth = (Component) => (props) => {
    const [isAuth, setIsAuth] = useState(localStorage.getItem("user"));

    const handleLogin = () => {
        localStorage.setItem("user", "Auth");
        setIsAuth(localStorage.getItem("user"));
    };

    const handleLogOut = () => {
        localStorage.removeItem("user");
        setIsAuth(localStorage.getItem("user"));
    };

    return (
        <CardWrapper>
            <Component
                isAuth={isAuth}
                onLogin={handleLogin}
                onLogOut={handleLogOut}
            />
        </CardWrapper>
    );
};

export default withAuth;

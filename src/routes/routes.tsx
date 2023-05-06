import React from "react";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "../pages/HomePage/home";
import { LoginPage } from "../pages/LoginPage/login";
import { RegisterPage } from "../pages/RegisterPage/register";
import { ErrorPage } from "../pages/ErrorPage/error";

export const Router = () => {
    return(
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/login" element={<LoginPage />}/>
            <Route path="/register" element={<RegisterPage/>}/>

            <Route path="*" element={<ErrorPage />}/>
        </Routes>
    )
}
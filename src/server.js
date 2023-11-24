import express from "express";
// node_modules에 있는 패키지를 찾는 것.
// express 라는 이름으로 "express" 패키지를 가져 옴
// const express = require("express");
// const app = express();

import morgan from "morgan";


const PORT = 4000;

const app = express();
//서버가 생성됨


const logger = (req,res,next) => {
console.log(`${req.method} ${req.url}`);
next();
};

const privateMiddleware =(req,res,next) =>{
    const url = req.url;
    if(url == "/protected"){
    return res.send("<h1>not allowed</h1>");
    }
    console.log("Allowed.");
    next();
};

const handleHome = (req,res,next) => {
    // return res.end("Loook at thiiiisss!");
    return res.end();
};
// event 처럼 request, response 객체가 2개가 있음
// app.get에서 handleHome 에 상황에 맞게 req또는 res 객체를 넘겨준다. 

const handleLogin = (req,res) =>{
    return res.send("Login page2");
}

const handleProtected =(req,res) =>{
    return res.send("Welcome to private lounge");
}

const mlogger = morgan("dev");

app.use(mlogger);
app.use(privateMiddleware);
// .use는 global middleware를 사용하게 함.

app.get("/",handleHome);
// root page "/"
app.get("/login", handleLogin);

const handleListening = () => console.log(`Sever listenting on port http://localhost:${PORT}`);

app.listen(PORT, handleListening);
// 이 안의 함수는 서버가 시작할 때 실행되는 함수
// 서버에게 어떤 port를 listing 할지 정해줘야 함
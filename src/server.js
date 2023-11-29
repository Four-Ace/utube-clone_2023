import express from "express";
// node_modules에 있는 패키지를 찾는 것.
// express 라는 이름으로 "express" 패키지를 가져 옴
// const express = require("express");
// const app = express();

import morgan from "morgan";
import globalRouter from "./routers/globalRouter";
import videoRouter from "./routers/videoRouter";
import userRouter from "./routers/userRouter";

const PORT = 4000;

const app = express();
//서버가 생성됨
const logger = morgan("dev");

app.set("view engine","pug");
app.set("views",process.cwd() + "/src/views");
app.use(logger);
app.use(express.urlencoded({extended:true}));

app.use("/",globalRouter);
app.use("/users",userRouter);
app.use("/videos",videoRouter);


const handleListening = () => console.log(`Sever listenting on port http://localhost:${PORT}`);

app.listen(PORT, handleListening);
// 이 안의 함수는 서버가 시작할 때 실행되는 함수
// 서버에게 어떤 port를 listing 할지 정해줘야 함 


"use strict";

// 모듈
const express = require("express");
const dotenv = require("dotenv");
// const morgan = require("morgan");

const app = express();
dotenv.config();

// 라우팅
const home = require("./src/routes/home");

// 앱 세팅
app.set("views", "./src/views"); // 뷰 파일들이 모여 있는 폴더 지정
app.set("view engine", "ejs"); // 뷰 엔진을 ejs로 사용
app.use(express.static(`${__dirname}/src/public`));
// app.use(morgan("common", {stream: accessLogStream}));

app.use(express.json());
// URL으ㄹ 통해 전달되는 데이터에 한글, 공백 등과 같은 문자가 포함될 경우 제대로 인식되지 않는 문제 해결
app.use(express.urlencoded({extended: true})); 

app.use("/", home); // use -> 미들웨어를 등록해주는 메서드.

module.exports = app;
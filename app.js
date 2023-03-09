"use strict";

// 모듈
const express = require("express");
const app = express();

// 라우팅
const home = require("./routes/home");

// 앱 세팅
app.set("views", "./views"); // 뷰 파일들이 모여 있는 폴더 지정
app.set("view engine", "ejs"); // 뷰 엔진을 ejs로 사용

app.use("/", home); // use -> 미들웨어를 등록해주는 메서드.

module.exports = app;
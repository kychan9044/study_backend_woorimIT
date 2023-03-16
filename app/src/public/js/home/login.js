"use strict";

const id = document.querySelector("#id"),
    passwd = document.querySelector("#passwd"),
    loginBtn = document.querySelector("button");

loginBtn.addEventListener("click", login);

function login() {
    const req = {
        id: id.value,
        passwd: passwd.value
    };

    fetch("/login", {
        method: "POST",
        headers: {
            "Content-Type": "apllication/json"
        },
        body: JSON.stringify(req),
    });
}
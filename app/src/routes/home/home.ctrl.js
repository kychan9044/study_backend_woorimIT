"use strict";

const UserStorage = require("../../models/UserStorage");

const output = {
    home : (req, res) => {
        res.render("home/index");
    },
    
    login : (req, res) => {
        res.render("home/login");
    },

    register : (req, res) => {
        res.render("home/register");
    },
};

const process = {
    login: (req, res) => {
        const id = req.body.id,
            passwd = req.body.passwd;

        const users = UserStorage.getUsers("id","passwd");
        const response = {};
        if (users.id.includes(id)){
            const idx = users.id.indexOf(id);
            if (users.passwd[idx] == passwd){
                response.success = true;
                return res.json(response);
            }
        }

        response.success = false;
        response.msg = "로그인에 실패했습니다."
        return res.json(response);
    },
}

module.exports = {
    output,
    process,
};
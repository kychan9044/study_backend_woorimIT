"use strict";

const users = {
    id: ["kychan"],
    passwd: ["1234"],
};

const output = {
    home : (req, res) => {
        res.render("home/index");
    },
    
    login : (req, res) => {
        res.render("home/login");
    },
};

const process = {
    login: (req, res) => {
        const id = req.body.id,
            passwd = req.body.passwd;

        if (users.id.includes(id)){
            const idx = users.id.indexOf(id);
            if (users.passwd[idx] == passwd){
                return res.json({
                    success: true,
                })
            }
        }

        return res.json({
            success: false,
            msg: "로그인에 실패했습니다.",
        });
    },
}

module.exports = {
    output,
    process,
};
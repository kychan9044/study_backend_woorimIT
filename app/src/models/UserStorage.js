"use strict";

class UserStorage {
    static #users = {
        id: ["kychan"],
        passwd: ["1234"],
        name: ["김영찬"],
    };

    static getUsers(...fields) {
        const users = this.#users;

        const newUsers = fields.reduce((newUsers, field) => {
            if (users.hasOwnProperty(field)) {
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        return newUsers;
    }

    static getUserInfo(id) {
        const users = this.#users;
        const idx = users.id.indexOf(id);
        const usersKeys = Object.keys(users); // [id, passwd, name]
        const userInfo = Object.keys(users).reduce((newUser, info) => {
            newUser[info] = users[info][idx];
            return newUser;
        }, {});

        return userInfo;
    }

    static save(userInfo) {
        const users = this.#users;
        users.id.push(userInfo.id);
        users.name.push(userInfo.name);
        users.passwd.push(userInfo.passwd);
    }
}

module.exports = UserStorage;
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
}

module.exports = UserStorage;
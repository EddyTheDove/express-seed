import base from './base';
let table = 'users';

const User = {
    all(callback) {
        let sql = `SELECT * FROM ${table}`;
        base.runSql(sql, [], (result) => {
            callback(result)
        })
    },


    show(params, callback) {
        let sql = `SELECT * FROM ${table} WHERE id = ?`;
        base.runSql(sql, params, (result) => {
            callback(result)
        })
    },

    auth(params, callback) {
        let sql = `SELECT * FROM ${table} WHERE email = ?`;
        base.runSql(sql, params, (result) => {
            callback(result)
        })
    }
};


export default User;

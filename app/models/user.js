import base from './base';

const User = {
    all(callback) {
        let sql = 'SELECT * FROM employees';
        base.runSql(sql, [], (result) => {
            callback(result)
        })
    },


    show(params, callback) {
        let sql = 'SELECT * FROM employees WHERE id = ?';
        base.runSql(sql, params, (result) => {
            callback(result)
        })
    },

    auth(params, callback) {
        let sql = 'SELECT * FROM employees WHERE email = ?';
        base.runSql(sql, params, (result) => {
            callback(result)
        })
    }
};


export default User;

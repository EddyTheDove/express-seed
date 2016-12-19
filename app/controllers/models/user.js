import base from './base';
import mysql from 'mysql';
import db from '../../../config/db';

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
    }
};


export default User;

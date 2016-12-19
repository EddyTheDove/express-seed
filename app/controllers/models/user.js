import base from './base';
import mysql from 'mysql';
import db from '../../../config/db';

const User = {
    all(req, res) {
        let sql = 'SELECT * FROM employees';

        console.log('Connecting to db', db);
        let pool = mysql.createPool(db);
        pool.getConnection((error, connection) => {
            if (error) {
                connection.release();
                console.log('DB connection failed', error);
                return;
            }

            connection.query(sql, (error, rows) => {
                connection.release();
                if (!error) {
                    console.log('Assigning rows', rows);
                    res.json(rows);
                }
            })

            connection.on('error', function(err) {
                console.log('DB connection error on connection', error);
                return;
            });
        });
    },


    show(req, res) {
        let sql = 'SELECT * FROM employees WHERE id = ?';

        console.log('Connecting to db', db);
        let pool = mysql.createPool(db);
        pool.getConnection((error, connection) => {
            if (error) {
                connection.release();
                console.log('DB connection failed', error);
                return;
            }

            connection.query(sql, req.params.id, (error, rows) => {
                connection.release();
                if (!error) {
                    console.log('Assigning rows', rows);
                    res.json(rows);
                }
            })

            connection.on('error', function(err) {
                console.log('DB connection error on connection', error);
                return;
            });
        });
    }
};


export default User;

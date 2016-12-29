import mysql from 'mysql';
import db from '../../config/db';


let base = {
    runSql(sql, params, callback, errorCallBack) {
        let pool = mysql.createPool(db);
        pool.getConnection((error, connection) => {
            if (error) {
                connection.release();
                console.log('DB connection failed', error);
                errorCallBack(error);
            }

            connection.query(sql, params, (error, result) => {
                connection.release();
                if (!error) {
                    callback(result);
                }
                return error
            })

            connection.on('error', function(err) {
                console.log('DB connection error on connection', error);
                return;
            });
        });
    }

}


export default base;

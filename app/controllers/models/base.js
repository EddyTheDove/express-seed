import mysql from 'mysql';
import db from '../../../config/db';


let base = {};
base.connect = function() {
    console.log('Connecting to db', db);
    let connection = mysql.createConnection(db);
    connection.connect((error) => {
        if (error) {
            console.log('DB connection failed', error);
            return false;
        }
    });

    connection.on('close', () => console.log('DB connection closed'));
    connection.on('error', (error) => console.log('DB connection error', error));
    return connection;
}


base.runSql = function(sql, params, callback) {
    let connection = base.connect();
    let result = connection.query(sql, params, (error, results) => {
        console.log("querying this", sql);
        if (error) {
            console.log('DB run error', error);
        }
    });

    connection.end();
    return result;
}

export default base;

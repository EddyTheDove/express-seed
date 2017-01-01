
import Sequelize from 'sequelize';
import mysql from 'mysql';
import env from '../env';

let sequelize = new Sequelize(
    env.mysql.database,
    env.mysql.user,
    env.mysql.password,
    {
        host: env.mysql.host,
        dialect: 'mysql',
        pool: {
            max: 5,
            min: 0,
            idle: 10000
        }
    }
);

let db = {
    host: env.mysql.host,
    user: env.mysql.user,
    password: env.mysql.password,
    database: env.mysql.database,
    multipleStatements: true
}

export default sequelize;

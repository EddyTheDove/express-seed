import Sequelize from 'sequelize'
import sequelize from '../../config/db'

let Member = sequelize.define('Member', {
    id: {
        type: Sequelize.INTEGER,
        field: 'id',
        autroIncrement: !0,
        primaryKey: !0
    },
    firstname: Sequelize.STRING,
    lastname: Sequelize.STRING,
    email: Sequelize.STRING,
    password: Sequelize.STRING,
    createdAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
        field: 'created_at'
    },
    updatedAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
        field: 'updated_at'
    }
})

export default Member;

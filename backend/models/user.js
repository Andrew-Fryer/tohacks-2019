const getConnection = require('../db').getConnection
const Sequelize = require('sequelize')
const sequelize = getConnection()

class User extends Sequelize.Model {}

User.init({
    firstName: {
        type: Sequelize.STRING,
        allowNull: false
    }, lastName: {
        type: Sequelize.STRING,
        allowNull: false
    }, email: {
        type: Sequelize.STRING,
        allowNull: false
    }, password: {
        type: Sequelize.STRING
    }, userType: {
        type: Sequelize.ENUM('student', 'organization'),
        allowNull: false
    }, interests: {
        type: Sequelize.STRING,
        allowNull: false
    }, skills: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'user'
})

module.exports = {
    User: User
}
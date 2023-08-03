const Sequelize = require('sequelize');

const connection = new Sequelize('dreambooks', 'root', 'joaoreis4', {
    host: 'localhost',
    dialect: 'mysql'
});
module.exports = connection;
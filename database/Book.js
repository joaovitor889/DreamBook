const Sequelize = require('sequelize');
const connection = require('./database');

const Book = connection.define('books', {
    titulo:{
        type: Sequelize.STRING,
        allowNull: false
    },
    editora:{
        type: Sequelize.STRING,
    },
    sinopse:{
        type: Sequelize.TEXT,
        allowNull: false
    }
});

Book.sync({force: false}).then(() => {});
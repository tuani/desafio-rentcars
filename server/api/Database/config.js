import { Sequelize } from "sequelize";

const db = new Sequelize('testing', 'root', 'ANSKk08aPEDbFjDO', {
    host: 'localhost', 
    port: 3307,
    dialect: 'mysql'
});

export default {db};

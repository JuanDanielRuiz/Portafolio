require('dotenv').config();
const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;

const sequelize = new Sequelize({
    database: process.env.PGDATABASE,
    dialect: process.env.DB_USER,
    host: process.env.PGHOST,
    port: process.env.PGPORT,
    username: process.env.DB_USER,
    password: process.env.PGPASSWORD,
    pool: {
        max: 3,
        min: 1,
        idle: 10000,
    },
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false,
        },
        keepAlive: true,
    },
    ssl: true,
});
const basename = path.basename(__filename);

const modelDefiners = [];


fs.readdirSync(path.join(__dirname, '/models'))
    .filter(
        (file) =>
            file.indexOf('.') !== 0 &&
            file !== basename &&
            file.slice(-3) === '.js'
    )
    .forEach((file) => {
        modelDefiners.push(require(path.join(__dirname, '/models', file)));
    });


modelDefiners.forEach((model) => model(sequelize));

let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
    entry[0][0].toUpperCase() + entry[0].slice(1),
    entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);


const { User, Task, Proyectos, Emails } = sequelize.models;



User.belongsToMany(Task, { through: "Task_User" });
Task.belongsToMany(User, { through: "Task_User" });

User.hasMany(Proyectos, { foreignKey: 'userId' });
Proyectos.belongsTo(User, { foreignKey: 'userId' });

Task.hasMany(Proyectos, { foreignKey: 'taskId' });
Proyectos.belongsTo(Task, { foreignKey: 'taskId' });

User.hasMany(Emails, { foreignKey: 'emailId' });
Emails.belongsTo(User, { foreignKey: 'emailId' });


module.exports = {
    ...sequelize.models, 
    conn: sequelize, 
};

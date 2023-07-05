require('dotenv').config();
const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;

const sequelize = new Sequelize(
    `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/portafolio`,
    {
        logging: false, // set to console.log to see the raw SQL queries
        native: false, // lets Sequelize know we can use pg-native for ~30% more speed
    }
);
const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
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

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach((model) => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
    entry[0][0].toUpperCase() + entry[0].slice(1),
    entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);

// En sequelize.models est�n todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring
const { User, Task, Proyectos } = sequelize.models;


// Aca vendrian las relaciones
// Product.hasMany(Reviews);
User.belongsToMany(Task, { through: "Task_User" });
Task.belongsToMany(User, { through: "Task_User" });

User.hasMany(Proyectos, { foreignKey: 'userId' });
Proyectos.belongsTo(User, { foreignKey: 'userId' });

Task.hasMany(Proyectos, { foreignKey: 'taskId' });
Proyectos.belongsTo(Task, { foreignKey: 'taskId' });


module.exports = {
    User,
    Task,
    ...sequelize.models, // para poder importar los modelos as�: const { Product, User } = require('./db.js');
    conn: sequelize, // para importart la conexi�n { conn } = require('./db.js');
};
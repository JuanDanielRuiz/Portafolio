// Aqui va el modelo User.

const { DataTypes, Sequelize } = require("sequelize");

module.exports = (sequelize) => {
    // TODO Definicion del modelo

    sequelize.define(
        "Task",
        {
            id: {
                type: DataTypes.UUID,
                primaryKey: true,
                allowNull: false,
                defaultValue: Sequelize.UUIDV4,
            },
            nameTask: {
                type: DataTypes.STRING(),
                allowNull: false,
                require:true
            },
            finish: {
                type: DataTypes.BOOLEAN(),
                allowNull: false,
                defaultValue:false
            }
          
        },
        {
            timestamps: true,
            paranoid: true
        }
    );
};
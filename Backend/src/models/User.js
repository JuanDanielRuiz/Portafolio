// Aqui va el modelo User.

const { DataTypes, Sequelize } = require("sequelize");

module.exports = (sequelize) => {
    // TODO Definicion del modelo

    sequelize.define(
        "User",
        {
            id: {
                type: DataTypes.UUID,
                primaryKey: true,
                allowNull: false,
                defaultValue: Sequelize.UUIDV4,
            },
            name: {
                type: DataTypes.STRING(),
                allowNull: false,
            },
            
            email: {
                type: DataTypes.STRING(),
                allowNull: false,
                unique: true,
            },
            password: {
                type: DataTypes.STRING(),
                allowNull: false,
            },
           
        },
        {
            timestamps: true,
            paranoid: true
        }
    );
};

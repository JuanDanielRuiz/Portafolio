// Aqui va el modelo User.

const { DataTypes, Sequelize } = require("sequelize");

module.exports = (sequelize) => {
    // TODO Definicion del modelo

    sequelize.define(
        "Proyectos",
        {
            id: {
                type: DataTypes.UUID,
                primaryKey: true,
                allowNull: false,
                defaultValue: Sequelize.UUIDV4,
            },
            name: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue:"Proyecto"
            },
            repo: {
                type: DataTypes.STRING(),
                allowNull: false,
               
            },
            img: {
                type: DataTypes.STRING,
                allowNull: false,
                
            },
            description: {
                type: DataTypes.STRING,
                allowNull: true,
                
            },
            linkedin: {
                type: DataTypes.STRING,
                allowNull: true,
                
            },
            
        },
        {
            timestamps: true,
            paranoid: true
        }
    );
};

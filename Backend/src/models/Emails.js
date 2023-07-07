
const { DataTypes, Sequelize } = require("sequelize");

module.exports = (sequelize) => {
    

    sequelize.define(
        "Emails",
        {
            id: {
                type: DataTypes.UUID,
                primaryKey: true,
                allowNull: false,
                defaultValue: Sequelize.UUIDV4,
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false,
               
            },
            status: {
                type: DataTypes.BOOLEAN(),
                allowNull: true,
                defaultValue:false

            }
        },
        {
            timestamps: true,
            paranoid: true
        }
    );
};

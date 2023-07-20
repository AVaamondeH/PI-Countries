const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
    sequelize.define('Activity', {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isAlpha: true,
                notEmpty: true,
                len: [2,10],
            },
        },
        difficulty: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isAlpha: true,
                notEmpty: true,
            },
        },
        duration: {
            type: DataTypes.TIME,
            allowNull: true,
        },
        season: {   
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isAlpha: true,
                notEmpty: true,
            },
        }
},
{ timestamps: false });
};

// ID. *
// Nombre. *
// Dificultad (número del 1 al 5). *
// Duración (en horas).
// Temporada (Verano, Otoño, Invierno o Primavera). *

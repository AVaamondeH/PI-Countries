const { Country } = require("../db")
const { Op } = require("sequelize");

const getFilter = async (continent) => {
    const countries = await Country.findAll({
        where : {
            continent: {
                // Use el operador para que no importara si esta en minus o mayus aunque eso se controla en el front no esta demas verificar
                [Op.iLike]: `${continent}`
            }
        }
    })
            //Use sort para devolver los paises ordenados alfabeticamente
            countries.sort((country1, country2) => {
            //El metodo localeCompare compara cadenas de texto
            return country1.name.localeCompare(country2.name);
        })

        return countries
}

module.exports ={ 
    getFilter
};
const { Country, Activity } = require("../db")
const { Op } = require("sequelize");

const getCountriesById = async (req, res) => {
    try {
        const { idPais } = req.params //Sacamos de params el id del pais
        const country = await Country.findOne({ //utilizamos findOne para una busqueda mas especifica
            where: { 
                id: idPais 
            },
            //Incluimos sus respectivas activdades
            include: Activity
        }) //se busca en la database
        if(!country) throw Error("Not Found")

        return res.status(200).json(country) //se retorna el pais
    
    } catch (error) {
        if(error.message === "Not found") return res.status(404).send({error: error.message})
        return res.status(500).send({error: error.message})
    }
}

const getCountriesByName =  async (req, res) => {
    try {
        const { name } = req.query

        if (!name) throw Error("Name parameter is missing or empty");
        const country = await Country.findAll({
            where: {
                name: {
                    // Use el operador para que no importara si esta en minus o mayus
                    [Op.iLike]: `${name}%`
                }
            }
        })
        if(!country.length) throw Error("Not found")
        
        return res.status(200).json(country)

    } catch (error) {
        if(error.message === "Not found") return res.status(404).send({error: error.message})
        return res.status(500).send({error: error.message})
    }
}

module.exports ={ 
    getCountriesById,
    getCountriesByName
};
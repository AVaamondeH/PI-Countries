const { Country } = require("../db")

const getCountries = async (req, res) => {
    try {
        const countries = await Country.findAll()
        //Use sort para devolver los paises ordenados alfabeticamente
        countries.sort((country1, country2) => {
            //El metodo localeCompare compara cadenas de texto
            return country1.name.localeCompare(country2.name);
        })
        return res.status(200).json(countries)
    
    } catch (error) {
        return res.status(500).send({error: error.message})
    }
}

module.exports ={ 
    getCountries
};
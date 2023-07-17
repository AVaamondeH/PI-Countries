const axios = require("axios");
const URL = "http://localhost:5000/countries";
const { Country } = require("../db")

const getCountries = async (req, res) => {
    try {
    const { data } = await axios(URL) // Se hace la peticion a la API y se desestructura la data que devuelve axios para trabajarla
    await Promise.all(  //Se usa este metodo para esperar que se revuelvan todas las promesas que retorne el map
        data.map(async (country) => {
            let {cca3, name, flags, continents, capital, subregion, area, population } = country
            if(!capital) capital = ["unknown"]
            await Country.create({
                id: cca3,
                name: name.common,
                flagImg: flags.png,
                continent: continents[0],
                capital: capital[0],
                subregion,
                area,
                population,
            });
        })
    );
    console.log("Countries uploaded to database successfully");
        
    } catch (error) {
        console.error(error.message)
    }
}

module.exports ={ 
    getCountries
};
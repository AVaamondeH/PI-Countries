const { getCountriesById } = require("../controllers/getCountriesById")
const { responseObj } = require("./response");

const getCountriesByIdHandler = async (req, res) => {
    try {
        const { idPais } = req.params
        const response = await getCountriesById(idPais)
        if(!response) throw Error("Not Found")

        return res.status(200).json(responseObj("Data acquire succesfully", response))
    
    } catch (error) {
        if(error.message === "Not found") return res.status(404).send(responseObj(error.message))
        return res.status(500).send(responseObj(error.message))
    }
}


module.exports ={ 
    getCountriesByIdHandler
};
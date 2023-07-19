const { getFilter } = require("../controllers/getFilter")
const { getOrder} = require("../controllers/getOrder")

const getFilterHandler = async (req, res) => {
    try {
        const { continent, order } = req.query
        if(!continent && !order) throw Error("Faltan Datos")

        if(continent && !order){
            const response = await getFilter(continent)
            if (!response.length) throw Error("Not Found")
            return res.status(200).json(response)
        }
        if(!continent && order){
            const response = await getOrder(order)
            if (!response.length) throw Error("Not Found")
            return res.status(200).json(response)
        }
        if (continent && order) {
            const filter = await getFilter(continent)
            const response = await getOrder(order, filter)
            return res.status(200).json(response)
        }
    
    } catch (error) {
        switch (error.message) {
            case "Not found":
                return res.status(404).send({error: error.message});

            case "Faltan Datos":
                return res.status(400).send({error: error.message})

            default:
                return res.status(500).send({error: error.message})
        }
    }
}

module.exports ={ 
    getFilterHandler
};

/*En este handler se verifica si estan las querys necesarias para realizar los fitrados y ordenamientos
necesarios y devolverlos al front

se verifica si se mandan varios filtrados y se ejecutan los controladores correspondientes*/
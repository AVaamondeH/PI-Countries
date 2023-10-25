const { getFilter } = require("../controllers/getFilter")
const { getOrder} = require("../controllers/getOrder")
const { getCountries } = require("../controllers/getCountries")
const { pagination } = require("../controllers/pagination")
const { responseObj } = require("./response");


const paginationAndFilterHandler = async (req, res) => {
    try {
        const { page, continent, order,  activity } = req.query
        
        
        if(!continent && !order && !activity) {
            const response = await getCountries()
            return res.status(200).json(responseObj("Data acquire succesfully", response))
        }
        
        if(!page || !continent && !order && !activity) throw Error("Missing data")
        
        if (continent && order && !activity) {
            const filter = await getFilter(continent)
            if (!filter.length) throw Error("Not Found")
            const sort = await getOrder(order, filter)
            const response = await pagination(page, sort)
            return res.status(200).json(response)
        }

        if (continent && order && activity) {
            const filter = await getFilter(continent, activity)
            if (!filter.length) return res.status(200).json({})
            const sort = await getOrder(order, filter)
            const response = await pagination(page, sort)
            return res.status(200).json(response)
        }

    
    } catch (error) {
        switch (error.message) {
            case "Not found":
                return res.status(404).send(responseObj(error.message));

            case "Missing data":
                return res.status(400).send(responseObj(error.message))

            default:
                return res.status(500).send(responseObj(error.message))
        }
    }
}

module.exports ={ 
    paginationAndFilterHandler
};

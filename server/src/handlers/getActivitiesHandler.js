const { getActivities } = require("../controllers/getActivities")
const { responseObj } = require("./response")

const getActivitiesHandler = async (req, res) => {
    try {
        const response = await getActivities()
        if(!response) throw Error("Service unavailable")
        return res.status(200).json(responseObj("Data acquire succesfully", response))
    
    } catch (error) {
        if(error.message === "Service unavailable") return res.status(503).send(responseObj(error.message))
        return res.status(500).send(responseObj(error.message))
    }
}


module.exports ={ 
    getActivitiesHandler
};
const { Activity  } = require("../db")

const getActivities = async (req, res) => {
    try {
        const activities = await Activity.findAll()
        return res.status(200).json(activities)
    
    } catch (error) {
        return res.status(500).send({error: error.message})
    }
}

module.exports ={ 
    getActivities
};
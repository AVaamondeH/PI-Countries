const { Activity, Country } = require("../db")

const postActivities = async (req, res) => {
    
    try {
        const { name, difficulty, duration, season, countries } = req.body
        
        if (!name || !difficulty || !duration || !season || !countries.length) throw Error("Faltan datos")

        const newActivity = await Activity.create({
                name: name,
                difficulty: difficulty,
                duration: duration,
                season: season
        })

      // Se buscan los países por sus ids
        const Associate = await Country.findAll({
            //Where acepta un array de ids y los busca para luego devolverlos
            where: { 
                id: countries 
            },
        });
        await newActivity.setCountries(Associate)

        if (!newActivity) throw Error("")


        return res.status(200).json(newActivity)

    } catch (error) {
        if (error.message === "Faltan datos") return res.status(400).json({error: error.message})
        return res.status(500).json({error: error.message}) 
    }
}

module.exports = {
    postActivities
}
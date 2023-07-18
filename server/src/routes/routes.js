const { Router } = require("express");
const router = Router();
const { getCountries } = require("../controllers/getCountries")
const { getCountriesById, getCountriesByName } = require("../controllers/getCountriesByIdAndName")
const { getActivities } = require("../controllers/getActivities")
const { postActivities } = require("../controllers/postActivities")

router.get("/countries", getCountries)
router.get("/countries/name", getCountriesByName)
router.get("/countries/:idPais", getCountriesById)
router.get("/activities", getActivities)
router.post("/activities", postActivities)



module.exports = {
    router
};

const { Router } = require("express");
const router = Router();
const { getCountries } = require("../controllers/getCountries")
const { getCountriesById, getCountriesByName } = require("../controllers/getCountriesByIdAndName")
const { getActivities } = require("../controllers/getActivities")
const { postActivities } = require("../controllers/postActivities")
const { getFilterHandler } = require("../handlers/getFilterHandler")
const { getOrder} = require("../controllers/getOrder")

router.get("/countries", getCountries)
router.get("/countries/name", getCountriesByName)
router.get("/countries/filter", getFilterHandler)
router.get("/countries/order", getOrder)
router.get("/countries/:idPais", getCountriesById)
router.get("/activities", getActivities)
router.post("/activities", postActivities)



module.exports = {
    router
};

const { Router } = require("express");
const router = Router();
const { getCountriesByIdHandler } = require("../handlers/getCountriesByIdHandler")
const { getActivities } = require("../controllers/getActivities")
const { postActivitiesHandler } = require("../handlers/postActivitiesHandler")
const { paginationAndFilterHandler } = require("../handlers/paginationAndFilterHandler")
const {getCountriesByNameHandler} = require("../handlers/getCountriesByNameHandler")


router.get("/countries", paginationAndFilterHandler)
router.get("/countries/name", getCountriesByNameHandler)
router.get("/countries/:idPais", getCountriesByIdHandler)
router.get("/activities", getActivities)
router.post("/activities", postActivitiesHandler)



module.exports = {
    router
};

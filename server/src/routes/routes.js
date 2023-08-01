const { Router } = require("express");
const router = Router();
const { getCountriesByIdHandler } = require("../handlers/getCountriesByIdHandler")
const { getActivities } = require("../controllers/getActivities")
const { postActivitiesHandler } = require("../handlers/postActivitiesHandler")
const { paginationAndFilterHandler } = require("../handlers/paginationAndFilterHandler")
const {getCountriesByNameHandler} = require("../handlers/getCountriesByNameHandler");
const { deleteActivityHandler } = require("../handlers/deleteActivityHandler");
const { updateActivityHandler } = require("../handlers/updateActivityHandler");


router.get("/countries", paginationAndFilterHandler)
router.get("/countries/search", getCountriesByNameHandler)
router.get("/countries/:idPais", getCountriesByIdHandler)
router.get("/activities", getActivities)
router.post("/activities", postActivitiesHandler)
router.delete("/activities", deleteActivityHandler)
router.put("/activities", updateActivityHandler)



module.exports = {
    router
};

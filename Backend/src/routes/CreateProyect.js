const { Router } = require("express");
const { CreateProyecHadler } = require('../handlers/CreateProyectHandler');
const { AllProyectsHandler } = require('../handlers/AllProyectosHandler')

const ProyectsRoute = Router();

ProyectsRoute.post("/data", CreateProyecHadler);
ProyectsRoute.get("/allData", AllProyectsHandler)

module.exports = { ProyectsRoute };

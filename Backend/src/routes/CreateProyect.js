const { Router } = require("express");
const { CreateProyecHadler } = require('../handlers/CreateProyectHandler');
const { AllProyectsHandler } = require('../handlers/AllProyectosHandler')
const { deleteProyectHandler } = require('../handlers/DeleteProyectHandler')
const { SendEmailHandler } = require('../handlers/SendEmails')

const ProyectsRoute = Router();

ProyectsRoute.post("/email", SendEmailHandler);
ProyectsRoute.post("/data", CreateProyecHadler);
ProyectsRoute.get("/allData", AllProyectsHandler)
ProyectsRoute.delete("/delete/:id", deleteProyectHandler)

module.exports = { ProyectsRoute };

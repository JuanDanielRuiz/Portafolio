const { Router } = require("express");
const { CreateProyecHadler } = require('../handlers/CreateProyectHandler');
const { AllProyectsHandler } = require('../handlers/AllProyectosHandler')
const { deleteProyectHandler } = require('../handlers/DeleteProyectHandler')
const { SendEmailHandler } = require('../handlers/SendEmails')
const { LoginHandler } = require('../handlers/LoginHandler')
const { userNewadmin } = require('../handlers/createAdmin')

const ProyectsRoute = Router();

ProyectsRoute.post("/createAdmin", userNewadmin);
ProyectsRoute.post("/formLogin", LoginHandler);
ProyectsRoute.post("/email", SendEmailHandler);
ProyectsRoute.post("/data", CreateProyecHadler);
ProyectsRoute.get("/allData", AllProyectsHandler)
ProyectsRoute.delete("/delete/:id", deleteProyectHandler)

module.exports = { ProyectsRoute };

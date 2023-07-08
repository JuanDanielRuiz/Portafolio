const { Router } = require("express");
const { CreateProyecHadler } = require('../handlers/CreateProyectHandler');
const { AllProyectsHandler } = require('../handlers/AllProyectosHandler')
const { deleteProyectHandler } = require('../handlers/DeleteProyectHandler')
const { SendEmailHandler } = require('../handlers/SendEmails')
const { LoginHandler } = require('../handlers/LoginHandler')
const { userNewadmin } = require('../handlers/createAdmin')
const tokenHeader = require("../handlers/auth");
const roleUserHandler = require("../handlers/roleUser");

const ProyectsRoute = Router();

ProyectsRoute.post("/createAdmin", tokenHeader, roleUserHandler(['admin']) ,userNewadmin);
ProyectsRoute.post("/formLogin", LoginHandler);
ProyectsRoute.post("/email", SendEmailHandler);
ProyectsRoute.post("/data", tokenHeader, roleUserHandler(['admin']), CreateProyecHadler);
ProyectsRoute.get("/allData", AllProyectsHandler)
ProyectsRoute.delete("/delete/:id", tokenHeader, roleUserHandler(['admin']), deleteProyectHandler)

module.exports = { ProyectsRoute };

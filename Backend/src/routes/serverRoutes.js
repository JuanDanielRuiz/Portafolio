const { Router } = require("express");
const { ProyectsRoute } = require("./CreateProyect");

const router = Router();

router.use("/CreateProyect", ProyectsRoute);

module.exports = router ;

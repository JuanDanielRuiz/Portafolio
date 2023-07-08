const { Router } = require("express");
const { ProyectsRoute } = require("./CreateProyect");

const router = Router();

router.use("/", ProyectsRoute);



module.exports = router ;

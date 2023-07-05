const { Router } = require("express");
const { ProyectsRoute } = require("./CreateProyect");

const router = Router();

router.use("/CreateProyect", ProyectsRoute);
router.use("/deleteProyect", ProyectsRoute);


module.exports = router ;

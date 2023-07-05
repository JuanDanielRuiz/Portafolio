const { Proyectos } = require("../db");

const deleteProyect = async ({ idProyect }) => {
    try {
        const deleteProyect = await Proyectos.destroy({ where: { id: idProyect } });
        return deleteProyect;
    } catch (error) {
        console.log(error.message);
        throw new Error({ error: error.message });
    }
};

module.exports = { deleteProyect };

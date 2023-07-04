// vamso a traer los datos de la tabla user 
const { Proyectos } = require("../db");

const allProyects = async () => {


    try {

        // traemos la informacion de todos los usuarios creados en nuestra base de datos.
        const Proyects = await Proyectos.findAll();

        // Retornamso todos los usuarios.
        return Proyects


    } catch (error) {
        console.log(error.message);
        throw new Error({ error: error.message });
    }
};

module.exports = { allProyects };

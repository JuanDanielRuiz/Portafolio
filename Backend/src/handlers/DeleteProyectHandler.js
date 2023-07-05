const { deleteProyect } = require('../controllers/DeleteProyect')


const deleteProyectHandler = async (req, res) => {
    const idProyect = req.params.id;
    


    try {

        const result = await deleteProyect({ idProyect })

        if (result !== 1) {
            return res.status(404).json({ message: "No se encontro ningun Proyecto" });
        }
        res.status(200).json({ deleteUserDB: "Se Elimino el proyecto con exito" });

    } catch (error) {
        console.log(error.message)
        res.status(400).json({ message: error.message })

    }
}

module.exports = { deleteProyectHandler }
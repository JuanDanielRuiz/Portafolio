const { CreateProyect } = require('../controllers/CreateProyect')


const CreateProyecHadler = async (req, res) => {
    const { name, repo, img, description, linkedin } = req.body


    try {

        const result = await CreateProyect({
            name, repo, img, description, linkedin
        })
        
        res.status(200).json(result)

    } catch (error) {
        console.log(error.message)
        res.status(400).json({ message: error.message })

    }
}

module.exports = { CreateProyecHadler }
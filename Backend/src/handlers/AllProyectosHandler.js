const { allProyects } = require('../controllers/AllProyects')


const AllProyectsHandler = async (req, res) => {
    try {

        const result = await allProyects()

        res.status(200).json(result)

    } catch (error) {
        console.log(error.message)
        res.status(400).json({ message: error.message })

    }
}

module.exports = { AllProyectsHandler }
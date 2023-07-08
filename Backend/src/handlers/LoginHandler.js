const { login } = require('../controllers/Loginadmin')


const LoginHandler = async (req, res) => {
    const { passwordlogin,
        username } = req.body;



    try {

        const result = await login(username, passwordlogin)

       

        if (result.error) {
            res.status(404).json({ Session: "No inicio session correctamente", result });
        } else {
            res.set('Set-Cookie', result.cookie);
            res.status(200).json({ Session: "Se inicio session correctamente", result });
        }
    } catch (error) {

        res.status(500).json({ message: error.message })

    }
}

module.exports = { LoginHandler }
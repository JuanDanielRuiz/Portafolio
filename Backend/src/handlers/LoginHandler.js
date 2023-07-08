const { login } = require('../controllers/Loginadmin')


const LoginHandler = async (req, res) => {
    const { password,
        emailPost } = req.body;



    try {

        const result = login(
            {
                emailPost,
                password
               
            })
        if (result.error) {
            res.status(404).json(result);
        } else {

            res.status(200).json({ loginsuccess: result });
        }
    } catch (error) {

        res.status(400).json({ message: error.message })

    }
}

module.exports = { LoginHandler }
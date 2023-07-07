const { SendEmail } = require('../controllers/SendEmail')


const SendEmailHandler = async (req, res) => {
    const { nombre,
        email,
        phone,
        Empresa,
        mensaje} = req.body;



    try {

        const result = SendEmail(
            {
                nombre,
                email,
                phone,
                Empresa,
                mensaje
            })

       
        res.status(200).json({ Email: "Se Envio el correo con exito" });

    } catch (error) {
      
        res.status(400).json({ message: error.message })

    }
}

module.exports = { SendEmailHandler }
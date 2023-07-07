const { Emails } = require('../db')
const { envioCorreo } = require('./EnvioCorreos/postCorreos')

const SendEmail = async ({
    nombre,
    email,
    phone,
    Empresa,
    mensaje }) => {
    try {
        console.log(email)
        const NewProyect = new Emails({
            email: email,
            status:true
        })
        const save = await NewProyect.save()


        const data = {
            nombre: nombre,
            email: email,
            phone: phone,
            Empresa: Empresa,
            mensaje: mensaje 

        }

        const resposne = await envioCorreo(data)

        return save

    } catch (error) {
        console.log(error)
        throw new Error({ error: error.message })

    }
}

module.exports = { SendEmail }
// Libreria a utilizar para el envio de correos automatico
const nodemailer = require("nodemailer");

// Dany trabajar en la coneccion de la data de usurio para llenar los campos de name ,from, to ,subjet

const envioCorreo = async (result, res) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.USER_CORREO,
        pass: process.env.USER_PASS_CORREO,
      },
        secure: true, // Habilitar la conexión segura
        tls: {
            rejectUnauthorized: false, // Ignorar la verificación del certificado SSL en desarrollo
        },
    });

      const name = `${result.nombre}`;
    const mailOptions = {
      from: "hoteldeveloperfull@gmail.com",
        to: "daniel.luevanoui@uanl.edu.mx",
        subject: `Consulta de Portafolio de -> Email:${result.email}`,
      html: `
      <head>
        <title>Recibo de Pago - Hotel Reserva</title>
        <style>
            /* Estilos CSS para el recibo de pago */
            body {
                font-family: Arial, sans-serif;
            }
            .container {
                width: 600px;
                margin: 0 auto;
                padding: 20px;
                border: 1px solid #ccc;
            }
            h1, h2 {
                text-align: center;
            }
            .info {
                margin-bottom: 20px;
            }
            .info p {
                margin: 5px 0;
            }
            .table {
                width: 100%;
                border-collapse: collapse;
                margin-bottom: 20px;
            }
            .table th, .table td {
                padding: 8px;
                border: 1px solid #ccc;
            }
            .table th {
                background-color: #f0f0f0;
                text-align: left;
            }
            .total {
                text-align: right;
            }
    
            /* Estilos CSS para la imagen */
            .image-container {
                text-align: center;
                margin-bottom: 20px;
            }
            .image-container img {
                max-width: 100%;
                height: auto;
                border: 1px solid #ccc;
                box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
            }
        </style>
    </head>
    <body>
        <div class="container">
            <h1>Mensaje desde Protafolio</h1>
            <p>Este Mensaje lo manda: ${name}</p>
            <p>Telefono:${result.phone}</p>
            <p>Empresa:${result.Empresa}</p>
            <p>Email:${result.email}</p>
            <p>Mensaje:${result.mensaje}</p>
            
           
         
        </div>
    </body>
      `,
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
        return
      } else {
        console.log("Correo enviado: " + info.response);
        return
      }
    });

  } catch (error) {
    throw new Error({ error: "No se Pudo Enviar El correo" });
  }
};

module.exports = { envioCorreo };

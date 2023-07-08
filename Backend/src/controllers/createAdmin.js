// En esta carpeta van los controllers de Users
const { User } = require("../db");
const bcrypt = require('bcrypt');

// Funcion para crear un nuevo usuario Recibe data por parametros.
const newUserAdmin = async ({
  name,
  email,
  password,
  
}) => {

  // Vamos a  encryptar la contrasena Por motivos de seguridad la contrasena no puede ir en texto plano en la base de datos 

  function hashPassword(password) {
    const saltRounds = 10;
    const hashedPassword = bcrypt.hashSync(password, saltRounds);
    return hashedPassword;
  }
   // Tambien encryptamos la confirmacion de contrasena.
 
  
  
  
  // En este aaprtado Hacheamos las dos contrasenas que recibimos por parametro en la funcion.
  const hashedPassword = hashPassword(password);
 
  // En el siguiente apartado Vamos a llenar en la base de datos el nuevo usuario que acabamos de crear.
  try {
    const newUser = new User({
      name: name,
      email: email,
      password: hashedPassword,
     
    });

      // Guardamos el usuario que antes creamos con todos los valores.
      if (newUser.dataValues.email) throw new Error(`El email ${newUser.dataValues.email} ya esta registrado`);
    const savedUser = await newUser.save();
    // Retornamos el nuevo usuario.
    return savedUser;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = { newUserAdmin };

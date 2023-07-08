// En esta carpeta van los handlers de User
// Porfa crea un archivo para cada handler
const { newUserAdmin } = require("../controllers/createAdmin")

// Porfa crea un archivo para cada handler
const userNewadmin = async (req,res) => {
  const {name, email, password } = req.body
  

  try {

      const result = await newUserAdmin({ name, email, password })

    res.status(200).json(result)
    
  } catch (error) {
    res.status(400).json({message:error.message})
    
  }
}

module.exports ={userNewadmin}
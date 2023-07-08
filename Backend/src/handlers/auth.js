const checkAuth = require("../controllers/auth");

const tokenHeader = async (req, res,next) => {
  try {
    const token = req.headers.authorization.split(" ").pop();
    const result = await checkAuth(token);
    if(result === null) return res.status(404).json({token:"your token is not valid"});
    
    if (result._id) {
      next();
    } else {
      res.status(404).json({ error: "Invalid token" });
    }
  } catch (error) {
    console.log(error);
      res.status(500).json({ error: "Lo siento Pero Necesitas un Token para realizar Esta accion Comunicate con el Administrador de la pagina" });

  }
};

module.exports = tokenHeader;

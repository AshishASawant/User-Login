const jwt = require("jsonwebtoken");
const jwtSecret = "try to hack this";

const authMiddleWare = (req, res, next) => {
  try {
    let token = jwt.verify(req.cookies.jwttoken, jwtSecret);
    if(!token){
      res.status(400).json({msg:'Not allowed'})
    }
    req.userId = token.id;
    next()
  } catch (error) {
    console.log(error)
    res.status(400).json({msg:'Internal server error'})
  }
};

module.exports = authMiddleWare;

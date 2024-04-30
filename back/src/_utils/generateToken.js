const jwt = require("jsonwebtoken");
const randToken = require("rand-token");





const generateToken = async({user}) => {    //create token for auth
  try {
  let insertToken = await jwt.sign(
    user, process.env.JWT_SECRET, {
      expiresIn: '3d'
    });
  return insertToken;
  } catch (error) {
    error.message;
  }
  
}


const generateRefreshToken = async({userId}) => {
  try {
    refresh = await jwt.sign({userId}, process.env.JWT_REFRESH_TOKEN,{expiresIn: '1y'});
    return refresh;

  } catch (error) {
    error.message;
  }
}

module.exports = {
  generateToken,
  generateRefreshToken
}



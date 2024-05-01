const jwt = require('jsonwebtoken');





const checkToken = (req,res, next) => {
  const authHeader = req.get('Authorization');      //c'est le 'bearer', le bearer est un jwt dont le rôle est d'indiquer que l'utilisateur qui accède aux ressources est bien authentifié  
  if(!authHeader){
    res.status(401).json({
      message: "not authenticated"
    });
  }
  const token = authHeader.split(' ')[1];         //split(' ')[1] prend la premiere syllabe separé par un espace, Dans notre cas token[0] est "bearer" et token[1] est notre token
  let decodedToken;
  
    //verfication du token créée
    decodedToken = jwt.verify(token, process.env.JWT_SECRET, (err, user) =>{
  
      if (err) {
        res.status(403).json("Token is not valid!");
      }
      req.user = user;
      req.isLoggedIn = true;
      next();
      
})
  
}

const getIdFromToken = (req,res) => {
  const authHeader = req.get('Authorization');
  const token = authHeader.split(' ')[1]; 

  if(authHeader){
      jwt.verify(token, process.env.JWT_SECRET, async(err, decodedToken) => {
        if(err){
          res.json(err.message);
        } else {
    userId = decodedToken.userId;
    
  }
})
}
}

const checkUser = async(req,res,next) => {
  const authHeader = req.get('Authorization');
  const token = authHeader.split(' ')[1]; 

  if(authHeader){
      jwt.verify(token, process.env.JWT_SECRET, async(err, decodedToken) => {
        if(err){
          //console.log(err.message);
          res.locals.user = null;
          next();
        } else {
          //console.log(decodedToken); 
          let user = decodedToken.userId
            
          if (user === null) {
            //console.log("Not found!");
          } else {
            console.log(user);
            res.locals.user = user;
          }
          
          next();
        }
      })
  } else {
    res.locals.user = null;
          next();
  }
 }

 //verifier si l'utilisateur est bien l'admin
const checkTokenAndAdmin = (req,res,next) =>{
 
  checkToken(req,res, async() => {
    const role = await prisma.user.findFirst({
      where:{
        userType: "administrateur"
      }
    })
    if(role){
      next();
    } else{
      res.status(403).json("you are not allowed to do that");
    }
  });
};


  
module.exports = {
  checkToken,
  checkUser,
  checkTokenAndAdmin,
  getIdFromToken
}


const Auhtorization =(authorized)=>{
    const role=req.body.role;
    return (req,res,next)=>{
        if ( authorized.includes(role)){
            next();
        }else{
            return res.status(401).json("you're not authorized");
        }
    }
}

module.exports=Auhtorization;
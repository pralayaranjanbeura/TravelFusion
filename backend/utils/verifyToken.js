import jwt from  "jsonwebtoken"

export const verifyToken=(req,res,next)=>{
    const token=req.cookies.accessToken;

    if(!token){
        return res.status(401).json({success:false,message:"U are not authorizeds"})
    }

    jwt.verify(token,process.env.JWT_SECRET_KEY,(err,user)=>{
        if(err){
            return res.status(401).json({success:false,message:"Token is invalid"})
        }
        req.user=user;
        next(); //do not forget to call next
    })
}

export const verifyUser=(res,req,next)=>{
    verifyToken(req,res,next,()=>{
        if( req.user.role==='admin'){
            next();
        }
        else{
             return res.status(401).json({
                success:false,
                message:"you are not authinticated"
            })
        }
    })
}

export const verifyAdmin=(res,req,next)=>{
    verifyToken(req,res,next,()=>{
        if(req.user.id===req.params.id || req.user.role==='admin'){
            next();
        }
        else{
             return res.status(401).json({
                success:false,
                message:"you are not authorized"
            })
        }
    })
}

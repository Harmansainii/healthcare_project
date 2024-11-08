var jwt=require('jsonwebtoken');

const generateToken=(userData)=>{
    //in this function we are creating a new fresh jwt token to provide user,for logn/session management or authorization purpose.
    return jwt.sign(userData,process.env.PRIVATE_KEY)
}

const validatejwtToken=(req,res,next)=>{
    //first we are checking that jwt token is available or not.
    const authorization=req.headers.authorization;

    //output 1. Bearer ksbdakjbjksabdjk
    //Output 2. skdjaskjdbsk
    //Output 3.
    //Output 4. TOKEN BANA HE NAHI H, LOCAL HO YA ENDPOINT TESTING SE BHEJA HO, WITHOUT TOKEN SEND KARA H

    if(!authorization){
        return res.status(401).json
        ({err:'Token not available'})

        //We are storing the token value from headers and splitting to get "Bearer xyz"
        //AbortController.kjh to "xya.abc.kjh"
    }

    const token = req.headers.authorization.split(' ')[1]

    if(!token){
        return res.staus(401).json
        ({err:'Unauthorized user'});
    }

    try{

        //in this Error Handler Try Catch:
        //We are Handling.if token is validated or verified, then move to next middleware or resond back to the client 
        const validateToken= jwt.verify
        (token,process.env.PRIVATE_KEY);
        
        req.user=validateToken;
        next();
        }catch(err){
            console.error("Error Occured: ")
        }
    }
    module.exports={generateToken,validateJwtToken}

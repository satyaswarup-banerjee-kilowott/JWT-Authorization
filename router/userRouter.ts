import { compareSync, hashSync } from 'bcryptjs';
import express, { response } from 'express';
import { body , validationResult } from 'express-validator';
import UserModel from '../model/userSchema';
import jwt from 'jsonwebtoken';
import passport from 'passport';
import '../configuration/passport';


const userRouter:express.Router = express.Router();



userRouter.post('/register', async( req:express.Request , res:express.Response ) =>{


   const user = new UserModel({
       username : req.body.username,
       password : hashSync(req.body.password, 10)
   })
   try{
      const userResponse = await user.save()
      if(userResponse){
          res.send({
              success:true,
              message: "User created successfully",
              user:{
                  id: user._id,
                  username : user.username
              }
          })
      }
   }catch (err){

    res.send({
        success:false,
        message: "Something went wrong",
       error: err
    })

}
});


userRouter.post('/login', async( req:express.Request , res:express.Response ) =>{

    try{

            const user = await UserModel.findOne({username : req.body.username})
            if(!user){
                return res.status(401).send({
                    success:false,
                    message: "Could not find the user"
                })
            }else if(!compareSync(req.body.password, user.password)){
                return res.status(401).send({
                    success:false,
                    message: "Incorrect password"
                })
            }else{
                const payload ={
                    username: user.username,
                    id: user._id
                }
                
              const token =  jwt.sign(payload, "Random String", {expiresIn: "1d"})

              return res.status(200).send({
                success:true,
                message: "Logged in successfully",
                token: "Bearer " + token
            })
            }

            


       
       }
    catch (err){
 
     res.send({
         success:false,
         message: "Something went wrong",
         error: err
     })
 
 }
 });

 userRouter.get('/logout', (req:express.Request , res:express.Response) => {
    req.logout();
    return res.status(200).send({
        success:true,
        message: "logged out"
    })
})


 //Protected route
userRouter.get('/protected', passport.authenticate('jwt', {session : false}), async( req:express.Request , res:express.Response ) =>{
    try{

        
            
                return res.status(200).send({
                    success:true,
                    message: "You have been authorized"
                })
             


    }catch (err){
 
     res.send({
         success:false,
         message: "Something went wrong",
         error: err
     })
 
 }
} )



export default userRouter;
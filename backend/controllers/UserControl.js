import express from "express"
import bodyParser from "body-parser";
import { users } from "../model/index.js";
import { verifyToken } from "../middleware/AuthenticateUser.js";
const userRouter=express.Router()
//fetch users
userRouter.get('/',(req,res)=>{
    try{
        users.fetchUsers(req,res)
    }catch(e){
        res.json({
            status:res.statusCode,
            msg:'failed to retrieve users'
        })
    }
})
//fetch user
userRouter.get('/:id',(req,res)=>{
    try{
        users.fetchUser(req,res)
    }catch(e){
        res.json({
            status:res.statusCode,
            msg:'failed to retrieve a user'
        })
    }
})
userRouter.patch('/update/:id', bodyParser.json(),(req,res)=>{
    try{
        users.updateUser(req,res)
    }catch(e){
        res.json({
            status: res.statusCode,
            msg: 'Update failed'
        })
    }
})
//add a user
userRouter.post('/register',bodyParser.json(),(req,res)=>{
    try{
        users.createUser(req,res)
    }catch(e){
        res.json({
            status:res.statusCode,
            msg:'failed to add new user'
        })
    }
})
userRouter.delete('/deleteUsers',(req,res)=>{
    try{
        users.deleteUsers(req,res)
    }catch(e){
        res.json({
            status:res.statusCode,
            msg:'failed to delete users',
        })
    }
})
userRouter.delete('/delete/:id',(req,res)=>{
    try{
        users.deleteUser(req,res)
    }catch(e){
        res.json({
            status:res.statusCode,
            msg:'failed to delete a user',
        })
    }
})
userRouter.post('/login', (req,res)=>{
    try{
        users.login(req,res)
    }catch(e){
        res.json({
            status : req.statusCode,
            msg : 'failed to login'
        })
    }
})
export{
    userRouter,express
}
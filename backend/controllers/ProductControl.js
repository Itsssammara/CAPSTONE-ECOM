import express from 'express'
import bodyParser from 'body-parser'
import { products } from '../model/index.js'
const productRouter=express.Router()
//fetch all products
productRouter.get('/',(req,res)=>{
    try{
        products.fetchProducts(req,res)
    }catch(e){
        res.json({
            status:res.statusCode,
            msg:'failed to retrieve a product'
        })
    }
})
productRouter.get('/:id',(req,res)=>{
    try{
        products.fetchProduct(req,res)
    }catch(e){
        res.json({
            status:res.statusCode,
            msg:'failed to retrieve a product'
        })
    }
})
productRouter.post('/addProduct',bodyParser.json(),(req,res)=>{
    try{
        products.addProduct(req,res)
    }catch(e){
        res.json({
            status:res.statusCode,
            msg:'failed to add product'
        })
    }
})
productRouter.delete('/deleteProducts',(req,res)=>{
    try{
        products.deleteProducts(req,res)
    }catch(e){
        res.json({
            status:res.statusCode,
            msg:'failed to delete a product',
            // results:products.fetchProducts(req,res)
        })
    }
})
productRouter.delete('/delete/:id',(req,res)=>{
    try{
        products.deleteProduct(req,res)
    }catch(e){
        res.json({
            status:res.statusCode,
            msg:'failed to delete a user',
        })
    }
})
productRouter.patch('/update/:id', bodyParser.json(),(req,res)=>{
    try{
        products.updateProduct(req,res)
    }catch(e){
        res.json({
            status: res.statusCode,
            msg: e.message
        })
    }
})
productRouter.delete('/delete/:id',(req,res)=>{
    try{
        products.deleteProduct(req,res)
    }catch(e){
        res.json({
            status:res.statusCode,
            msg:'failed to delete a product',
            // results:products.fetchProducts(req,res)
        })
    }
})
productRouter.patch('/update/:id',(req,res)=>{
    try{
        products.updateProduct(req,res)
    }catch(e){
        res.json({
            status:res.statusCode,
            msg:'failed to update a product',
            // results:products.fetchProducts(req,res)
        })
    }
})
export{
    productRouter
}
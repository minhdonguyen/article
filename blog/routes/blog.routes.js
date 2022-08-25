const express = require('express');
const { json } = require('express/lib/response');
const res = require('express/lib/response');
const app = express();
const blogExpressRoute = express.Router();
let blogSchema = require('../model/blog.model');

blogExpressRoute.route('/').get((req,res)=>{
    blogSchema.find((error,data)=>{
        if(error)
        {
            return next(error);
        }
        else{
            res.json(data);
        }
    })
})

blogExpressRoute.route('/blog/:id').get((req,res)=>{
    blogSchema.findById(req.params.id,(error,data)=>{
        if(error)
        {
            return next(error);
        }
        else{
            res.json(data);
        }
    })
})
blogExpressRoute.route('/add-blog').post((req,res,next)=>{
    blogSchema.create(req.body,(error,data)=>{
        if(error){
            return next(error);
        }else{
            return res.json(data);
        }
    })
})
blogExpressRoute.route('/blog/:id').get((req,res)=>{
    blogSchema.findById(req.params.id,(error,data)=>{
        if(error)
        {
            return next(error);
        }
        else{
            res.json(data);
        }
    })
})
blogExpressRoute.route('/del-blog/:id').delete((req,res)=>{
    blogSchema.findByIdAndRemove(req.params.id,(error,data)=>{
        if(error)
        {
            return next(error);
        }
        else{
            res.status(200),json({
                msg: data
            })
        }
    })
})
blogExpressRoute.route('/editor-blog/:id').put((req,res)=>{
    blogSchema.findByIdAndRemove(req.params.id,{$set: req.body},(error,data)=>{
        if(error)
        {
            return next(error);
        }
        else{
            res.json(data);
            console.log("editor successs");
        }
    })
})
module.exports = blogExpressRoute;
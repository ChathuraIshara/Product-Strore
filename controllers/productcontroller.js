var Product=require('../models/Product');

var bodyParser = require("body-parser");
var urlencodedParser = bodyParser.urlencoded({ extended: false });


var productController=(app)=>
{
    app.post('/product',async function(req,res)
    {
        try{
            var product=await Product.create(req.body);
            res.status(200).json(product);

        }catch(err)
        {
            console.log(err.message);
            res.status(500).json({message:err.message});

        }
    });

    app.get('/product',async function(req,res)
    {
        try{
            var results=await Product.find({});
            res.status(200).json(results);

        }catch(err)
        {
            console.log(err.message);
            res.status(500).json({message:err.message});
        }
    })

    app.delete('/product/:id',async function(req,res)
    {
        try{
            var id=req.params.id;
            var product=await Product.findByIdAndDelete(id);
            if(!product)
            {
                res.status(404).json({message:`can not find any product with Id ${id}`});
            }
            else{
                res.status(200).json(product);

            }
          

        }catch(err)
        {
            console.log(err.message);
            res.status(500).json({message:err.message});
        }
    })

    app.put('/product/:id',async function(req,res)
    {
        try{
            var product=await Product.findByIdAndUpdate(req.params.id,req.body,{new:true});
            if(!product)
            {
                res.status(404).json({message:`can not find any product with Id ${id}`});
            }
            else{
                res.status(200).json(product);

            }
            
        }catch(err)
        {
            console.log(err.message);
            return res.status(500).json({message:err.message});
        }
    });

}

module.exports=productController;
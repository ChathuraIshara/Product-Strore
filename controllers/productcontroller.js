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

}

module.exports=productController;
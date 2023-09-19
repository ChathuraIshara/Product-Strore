var mongoose=require('mongoose');

var productschema=new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    quantity:{
        type:Number,
        required:true
    },
    price:{
        type:Number,
        required:true
    }
},
{
    timestamps:true
});

var Product=mongoose.model('product',productschema);

module.exports=Product;
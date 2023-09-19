var express=require('express');
var mongoose=require('mongoose');
const cors = require('cors');

var productController=require('./controllers/productcontroller');

var app=express();

app.use(cors());

app.use(express.json());

mongoose.connect('mongodb+srv://chathura:test@cluster0.kkdmc6p.mongodb.net/Grocerystore?retryWrites=true&w=majority');

productController(app);

app.listen(8000,()=>{
    console.log('Node is listening to the port 8000!')
})
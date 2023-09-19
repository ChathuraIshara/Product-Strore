import Header from "./Header";
import Form from "./Form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import axios from "axios";

function EditPage({count,setCount}) {

    var navigate=useNavigate();

    var location=useLocation();

    var loc=location.state;

    const [title,setTitle]=useState(loc.title);
    const [quantity,setQuantity]=useState(loc.quantity);
    const [price,setPrice]=useState(loc.price);

    const handleTitle=(event)=>
    {
        setTitle(event.target.value);
        
    }
    
    const handleQuantity=(event)=>
    {
        setQuantity(event.target.value);
        
    }
    
    const handlePrice=(event)=>
    {
        setPrice(event.target.value);
        
    }
    async function handleUpdateSubmit(event)
    {
     event.preventDefault();
 
    try
        {
         
            await axios.put(`http://127.0.0.1:8000/product/${loc.id}`,
        {
         
         title:title,
         quantity:quantity,
         price:price
        
        });
         // alert("Registation Updateddddd");
          setTitle("");
          setQuantity("");
          setTitle("");
          navigate('/');
         

         
        
        }
    catch(err)
        {
          alert("product updation Failed");
        }
   }


  return (
    <div className="container">
      <Header />
      <form onSubmit={handleUpdateSubmit}>
        <div className="row m-3">
          <div className="col-1">
            <label for="title" className="leading-3 text-dark">
              Title
            </label>
          </div>
          <div className="col-10">
            <input
              id="title"
              type="text"
              className="form-control"
              onChange={handleTitle}
              value={title}
              placeholder="Add product title"
            ></input>
          </div>
        </div>
        <div className="row m-3">
          <div className="col-1">
            <label for="quantity">Quantity</label>
          </div>
          <div className="col-10">
            <input
              id="quantity"
              type="Number"
              className="form-control "
              onChange={handleQuantity}
              value={quantity}
              placeholder="Add product quantity"
            ></input>
          </div>
        </div>
        <div className="row m-3">
          <div className="col-1">
            <label for="price">Price</label>
          </div>
          <div className="col-10">
            <input
              id="price"
              type="Number"
              className="form-control "
              onChange={handlePrice}
              value={price}
              placeholder="Add product price"
            ></input>
          </div>
        </div>
        <input
          type="submit"
          className="btn btn-primary m-3"
          value="Update"
        ></input>
        <button className="btn btn-warning">Cancel</button>
      </form>
    </div>
  );
}

export default EditPage;

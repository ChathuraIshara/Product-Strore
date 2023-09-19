import { Fragment } from "react";
import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";


function Item({item,key,count,setCount})
{
    async function handleDelete(productid)
   {
     await axios.delete('http://127.0.0.1:8000/product/'+productid);
     console.log("succesfully deleted product");
     setCount(count+1);


   }


    return <React.Fragment>
        <tbody>
        <tr>
            <td>{item.title}</td>
            <td>{item.quantity}</td>
            <td>{item.price}</td>
            <td><button className="btn btn-danger" onClick={()=>handleDelete(item._id)}>Delete</button></td>
            <td>
            <Link to={`/editpage/${item._id}`} state={{
          title:item.title,
          quantity:item.quantity,
          price:item.price,
          id:item._id
        }}>
        <button  className="btn btn-success">Update</button>
        </Link>
            </td>
        </tr>

        </tbody>
        

    </React.Fragment>
}

export default Item;
import axios from "axios";
import { useState } from "react";

function Form({
  title,
  setTitle,
  quantity,
  setQuantity,
  price,
  setPrice,
  count,
  setCount,
}) {
  const [errorstate, setErrorstate] = useState(false);
  const [error,setError]=useState("");

  const handleTitle = (event) => {
    setTitle(event.target.value);
  };
  const handleQuantity = (event) => {
    setQuantity(event.target.value);
  };
  const handlePrice = (event) => {
    setPrice(event.target.value);
  };

  async function handleSubmit(event) {
    event.preventDefault();
    if(title=="" || quantity==null || price==null)
    {
        setErrorstate(true);
        setError("Product Insertion Failed")
    }
    else{
        setErrorstate(false);
    }
    try {
      await axios.post("http://127.0.0.1:8000/product", {
        title: title,
        quantity: quantity,
        price: price,
      });
      console.log("product inserted succesfully!");
      setTitle("");
      setQuantity("");
      setPrice("");
      setCount(count + 1);
    } catch (err) {
      console.log(err);
      alert("Product Insertion Failed");
    }
  }

  return (
    <div className="container">
      {
        errorstate ? (
          <div className="text-center">
            <div className="alert alert-danger" role="alert">
              {error} {/* Use curly braces for variables */}
            </div>
          </div>
        ) : null /* Render null if there is no error */
      }

      <form onSubmit={handleSubmit}>
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
          value="Add"
        ></input>
        <button className="btn btn-warning">Cancel</button>
      </form>
    </div>
  );
}

export default Form;

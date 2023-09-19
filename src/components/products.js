import { useEffect } from "react";
import Item from "./Item";

function Products({ productlist, setProductlist, count }) {
  useEffect(() => {
    fetch("http://127.0.0.1:8000/product")
      .then((response) => {
        //console.log(response);
        return response.json();
      })
      .then((responseData) => {
        // console.log(responseData);
        setProductlist(responseData);
      });
  }, [count]);

  return (
    <div class="container">
      <table class="table table-dark">
        <tr>
          <th>Title</th>
          <th>Quantity</th>
          <th>Price</th>
        </tr>
        {productlist.map((item) => (
          <Item item={item} key={item._id} />
        ))}
      </table>
    </div>
  );
}

export default Products;

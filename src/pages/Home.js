import Header from "../components/Header";
import Form from "../components/Form";
import Products from "../components/products";


function Home({title,setTitle,quantity,setQuantity,price,setPrice,count,setCount,productlist,setProductlist})
{
    return <div class="container">
      <Header/>
      <Form title={title} setTitle={setTitle} quantity={quantity} setQuantity={setQuantity} price={price} setPrice={setPrice} count={count} setCount={setCount}/>
      <Products productlist={productlist} setProductlist={setProductlist} count={count} setCount={setCount}/>

    </div>
}

export default Home;
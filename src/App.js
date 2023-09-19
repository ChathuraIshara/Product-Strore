import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { useState } from 'react';
import Form from './components/Form';
import Products from './components/products';

function App() {

  const [title,setTitle]=useState("");
  const [quantity,setQuantity]=useState();
  const [price,setPrice]=useState();
  const [count,setCount]=useState(0);
  const [productlist,setProductlist]=useState([]);
  


  return (
    <div className="App">
      <Header/>
      <Form title={title} setTitle={setTitle} quantity={quantity} setQuantity={setQuantity} price={price} setPrice={setPrice} count={count} setCount={setCount}/>
      <Products productlist={productlist} setProductlist={setProductlist} count={count}/>
    
    </div>
  );
}

export default App;

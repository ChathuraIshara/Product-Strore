import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { useState } from 'react';
import Form from './components/Form';
import Products from './components/products';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import EditPage from './components/Editpage';

function App() {

  const [title,setTitle]=useState("");
  const [quantity,setQuantity]=useState();
  const [price,setPrice]=useState();
  const [count,setCount]=useState(0);
  const [productlist,setProductlist]=useState([]);
  


  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home count={count} setCount={setCount} title={title} setTitle={setTitle} quantity={quantity} setQuantity={setQuantity} price={price} setPrice={setPrice} productlist={productlist} setProductlist={setProductlist}></Home>}></Route>
        <Route path="/editpage/:id" element={<EditPage/>}></Route>
      </Routes>
      </BrowserRouter>
     
    
    </div>
  );
}

export default App;

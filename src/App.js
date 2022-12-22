import logo from './logo.svg';
import './App.css';
import AppNavbar from './component/Navbar';
import { json, Route, Routes } from 'react-router-dom';
import Products from './component/Products';
import Cart from './component/Cart';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

function App() {
  //const selectedproducts =useSelector((state)=>state.cart)
//console.log('llllllllllllllll',selectedproducts)
//useEffect(() => {
  //localStorage.setItem('selectedproducts',JSON.stringify(selectedproducts) )
//}, [selectedproducts])
//console.log(localStorage.getItem('selectedproducts'))
  return (
    <div className="App">
      <AppNavbar/>
      <Routes>
        <Route path='/' element={<Products/>} />
        <Route path='cart' element={<Cart/>}/>
      </Routes>

    </div>
  );
}

export default App;

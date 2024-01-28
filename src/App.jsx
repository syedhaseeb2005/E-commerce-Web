import './App.css';
import Home from './Pages/Home/Home';
import ProductList from './Pages/ProductList/ProductList';
import Product from './Pages/Products/Products';
import Register from './Pages/Register/Register';
import Login from './Pages/Login/Login';
import Cart from './Pages/Cart/Cart';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import { useSelector } from 'react-redux';

function App() {
  const user = useSelector(state=>state.user.user)
  console.log(user);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={user ? <Home /> : <Login/>} />
          <Route path="/products/:category" element={<ProductList />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path='/register' element={<Register/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/cart' element={<Cart/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router,Route,Routes,} from "react-router-dom";
import Home from './Pages/home/Home.jsx';
import Order from './Pages/Order/Order.jsx';
import Cart from './Pages/cart/Cart.jsx';
import Dashboard from './Pages/admin/Dashboard.jsx';
import NoPage from './Pages/nopage/NoPage.jsx';
import MyState from './Context/data/myState.jsx';
import Login from './Pages/registration/Login.jsx';
import Signup from './Pages/registration/Signup.jsx';
import ProductInfo from './Pages/productInfo/ProductInfo.jsx';


const App = () =>{
  return (
    <MyState>
    <Router>
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/order" element={<Order/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/productInfo" element={<ProductInfo/>}/>
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/login" element={<Login />}/>
          <Route path="/signup" element={<Signup />} />
          <Route path="/*" element={<NoPage/>} />
      </Routes>
    </Router>
    </MyState>
  )
}

export default App;
import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom"

import Home from "./pages/Home"
import Login from "./pages/Auth/Login"
import Register from "./pages/Auth/Register"
import Cart from "./pages/Cart"
import ProductDetail from "./pages/ProductDetail"
import History from "./pages/History"
import Admin from "./pages/Admin"

class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <Routes>
        <Route path='/home' element={<Home />} />
          
        </Routes>
      </BrowserRouter>
    )
  }
}

export default App;

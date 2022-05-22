import { Route, Routes } from 'react-router-dom';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './Components/Shared/Footer/Footer';
import Home from './Components/Pages/Home/Home';
import Navbar from './Components/Shared/Navbar/Navbar';
import Login from './Components/Auth/Login';
import Register from './Components/Auth/Register';
import AddProduct from './Components/Pages/Products/AddProduct';
import Products from './Components/Pages/Products/Products';
import ProductDetails from './Components/Pages/Products/ProductDetails';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className='app'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/addProduct" element={<AddProduct />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;

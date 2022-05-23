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
import Dashboard from './Components/Pages/Dashboard/Dashboard';
import Orders from './Components/Pages/Dashboard/Orders';
import MyReviews from './Components/Pages/Dashboard/MyReviews';
import NotFound from './Components/Shared/NotFound/NotFound';
import Profile from './Components/Pages/Dashboard/Profile';
import Users from './Components/Pages/Dashboard/Users';
import EditProfile from './Components/Pages/Dashboard/EditProfile';

function App() {
  return (
    <div className='app'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/dashboard" element={<Dashboard></Dashboard>}>
          <Route index element={<Orders />} />
          <Route path="myReviews" element={<MyReviews />} />
          <Route path="profile" element={<Profile />} />
          <Route path="users" element={<Users />} />
          <Route path="settings" element={<EditProfile />} />
          <Route path="addProduct" element={<AddProduct />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound></NotFound>} />
      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;

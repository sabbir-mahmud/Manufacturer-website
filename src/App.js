import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Login from "./Components/Auth/Login";
import Register from "./Components/Auth/Register";
import RequireAdmin from "./Components/Auth/RequireAdmin";
import RequireUser from "./Components/Auth/RequireUser";
import Blog from "./Components/Pages/Blogs/Blogs";
import Dashboard from "./Components/Pages/Dashboard/Dashboard";
import EditProduct from "./Components/Pages/Dashboard/EditProduct";
import EditProfile from "./Components/Pages/Dashboard/EditProfile";
import ManageOrder from "./Components/Pages/Dashboard/ManageOrder";
import ManageProduct from "./Components/Pages/Dashboard/ManageProduct";
import MyReviews from "./Components/Pages/Dashboard/MyReviews";
import Orders from "./Components/Pages/Dashboard/Orders";
import Payment from "./Components/Pages/Dashboard/Payment";
import Profile from "./Components/Pages/Dashboard/Profile";
import Users from "./Components/Pages/Dashboard/Users";
import Home from "./Components/Pages/Home/Home";
import Portfolio from "./Components/Pages/Portfolio/Portfolio";
import AddProduct from "./Components/Pages/Products/AddProduct";
import ProductDetails from "./Components/Pages/Products/ProductDetails";
import Products from "./Components/Pages/Products/Products";
import Footer from "./Components/Shared/Footer/Footer";
import Navbar from "./Components/Shared/Navbar/Navbar";
import NotFound from "./Components/Shared/NotFound/NotFound";
import useAdmin from "./Hooks/useAdmin/useAdmin";
import useUser from "./Hooks/useFirebase.js/useUser";

function App() {
    const { user } = useUser();
    const { admin } = useAdmin(user);
    return (
        <div className="app">
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route
                    path="/products/:id"
                    element={
                        <RequireUser>
                            <ProductDetails />
                        </RequireUser>
                    }
                />
                <Route
                    path="/dashboard"
                    element={
                        <RequireUser>
                            <Dashboard />
                        </RequireUser>
                    }
                >
                    {admin ? (
                        <Route
                            index
                            element={
                                <RequireAdmin>
                                    <ManageOrder />
                                </RequireAdmin>
                            }
                        />
                    ) : (
                        <Route index element={<Orders />} />
                    )}
                    <Route path="myReviews" element={<MyReviews />} />
                    <Route path="payment/:id" element={<Payment />} />
                    <Route path="profile" element={<Profile />} />
                    <Route path="settings" element={<EditProfile />} />
                    <Route
                        path="users"
                        element={
                            <RequireAdmin>
                                <Users />
                            </RequireAdmin>
                        }
                    />
                    <Route
                        path="addProduct"
                        element={
                            <RequireAdmin>
                                <AddProduct />
                            </RequireAdmin>
                        }
                    />
                    <Route
                        path="manage-Product"
                        element={
                            <RequireAdmin>
                                <ManageProduct />
                            </RequireAdmin>
                        }
                    />
                    <Route
                        path="manage-Product/:id"
                        element={
                            <RequireAdmin>
                                <EditProduct />
                            </RequireAdmin>
                        }
                    />
                </Route>
                <Route path="blogs" element={<Blog />} />
                <Route path="portfolio" element={<Portfolio />} />
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

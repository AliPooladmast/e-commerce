import Cart from "./pages/Cart/Cart";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Product from "./pages/Product/Product";
import ProductList from "./pages/ProductList/ProductList";
import Register from "./pages/Register/Register";
import Success from "./pages/Success/Success";
import { Routes, Route } from "react-router-dom";
import User from "./pages/User/User";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/products" element={<ProductList />}>
        <Route path=":category" element={<ProductList />} />
      </Route>

      <Route path="/product" element={<Product />}>
        <Route path=":id" element={<Product />} />
      </Route>

      <Route path="/cart" element={<Cart />} />

      <Route path="/login" element={<Login />} />

      <Route path="/register" element={<Register />} />

      <Route path="/success" element={<Success />} />

      <Route path="/user" element={<User />} />
    </Routes>
  );
};

export default App;

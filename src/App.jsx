import Cart from "./pages/Cart/Cart";
import Order from "./pages/Order/Order";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Product from "./pages/Product/Product";
import ProductList from "./pages/ProductList/ProductList";
import Register from "./pages/Register/Register";
import Success from "./pages/Success/Success";
import { Routes, Route, Navigate } from "react-router-dom";
import User from "./pages/User/User";
import { forwardRef } from "react";
import MuiAlert from "@mui/material/Alert";
import { Backdrop, CircularProgress, Snackbar } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setMessage } from "./redux/uxSlice";
import OrderList from "./pages/OrderList/OrderList";

const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const App = () => {
  const dispatch = useDispatch();
  const { message, loading: uxLoading } = useSelector((state) => state.ux);
  const { currentUser, isFetching: userLoading } = useSelector(
    (state) => state.user
  );
  const { products } = useSelector((state) => state.cart);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    dispatch(setMessage({ type: "info", text: null }));
  };

  return (
    <>
      {message?.text && (
        <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
          open={Boolean(message)}
          autoHideDuration={3000}
          onClose={handleClose}
        >
          <Alert
            onClose={handleClose}
            severity={message?.type}
            sx={{ width: "100%" }}
          >
            {message?.text}
          </Alert>
        </Snackbar>
      )}

      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={uxLoading || userLoading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/products" element={<ProductList />}>
          <Route path=":category" element={<ProductList />} />
        </Route>

        <Route path="/product" element={<Product />}>
          <Route path=":id" element={<Product />} />
        </Route>

        <Route path="/cart" element={<Cart />} />

        <Route
          path="/order"
          element={
            currentUser && products.length > 0 ? (
              <Order />
            ) : (
              <Navigate to="/" replace />
            )
          }
        />

        <Route path="/orders" element={<OrderList />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route path="/success" element={<Success />} />

        <Route path="/user" element={<User />} />
      </Routes>
    </>
  );
};

export default App;

import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { forwardRef, Suspense, useEffect, lazy } from "react";
import MuiAlert from "@mui/material/Alert";
import { Backdrop, CircularProgress, Snackbar } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setMessage } from "./redux/uxSlice";
import SideBar from "./components/Siderbar/SideBar";

const Cart = lazy(() => import("./pages/Cart/Cart"));
const Order = lazy(() => import("./pages/Order/Order"));
const Home = lazy(() => import("./pages/Home/Home"));
const Login = lazy(() => import("./pages/Login/Login"));
const Product = lazy(() => import("./pages/Product/Product"));
const ProductList = lazy(() => import("./pages/ProductList/ProductList"));
const Register = lazy(() => import("./pages/Register/Register"));
const User = lazy(() => import("./pages/User/User"));
const Repay = lazy(() => import("./pages/Repay/Repay"));
const EditAddress = lazy(() => import("./pages/EditAddress/EditAddress"));
const OrderList = lazy(() => import("./pages/OrderList/OrderList"));

const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const App = () => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const { message, loading: uxLoading } = useSelector((state) => state.ux);
  const { isFetching: orderLoading } = useSelector((state) => state.order);
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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

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
        sx={{ color: "#fff", zIndex: 10 }}
        open={uxLoading || userLoading || orderLoading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>

      <SideBar />

      <Suspense
        fallback={
          <Backdrop sx={{ color: "#fff", zIndex: 10 }} open>
            <span style={{ marginRight: "20px" }}>Please Wait...</span>
            <CircularProgress color="inherit" />
          </Backdrop>
        }
      >
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

          <Route
            path="/repay/:id"
            element={currentUser ? <Repay /> : <Navigate to="/" replace />}
          />

          <Route
            path="/editaddress/:id"
            element={
              currentUser ? <EditAddress /> : <Navigate to="/" replace />
            }
          />

          <Route
            path="/orders"
            element={currentUser ? <OrderList /> : <Navigate to="/" replace />}
          />

          <Route path="/login" element={<Login />} />

          <Route path="/register" element={<Register />} />

          <Route
            path="/user"
            element={currentUser ? <User /> : <Navigate to="/" replace />}
          />
        </Routes>
      </Suspense>
    </>
  );
};

export default App;

import {
  Home,
  HowToReg,
  LocalMall,
  Login,
  Logout,
  PlaylistAddCheck,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import { Badge } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { resetCart } from "../../redux/cartSlice";
import { logout } from "../../redux/userSlice";
import { userRequest } from "../../requestMethods";

const PageMenu = ({ ItemClassName, TitlesClassName, currentUser }) => {
  const dispatch = useDispatch();
  const quantity = useSelector((state) => state.cart.quantity);

  const handleLogout = () => {
    dispatch(logout());
    dispatch(resetCart());
    userRequest.defaults.headers.token = "";
  };

  return (
    <>
      <div className={ItemClassName}>
        <span className={TitlesClassName}>Cart</span>
        <Badge badgeContent={quantity} color="primary" overlap="rectangular">
          <ShoppingCartOutlined />
        </Badge>
      </div>

      <div className={ItemClassName}>
        <span className={TitlesClassName}>Home</span>
        <Home />
      </div>

      <div className={ItemClassName}>
        <span className={TitlesClassName}>Products</span>
        <LocalMall />
      </div>

      {currentUser ? (
        <>
          <div className={ItemClassName}>
            <span className={TitlesClassName}>Orders</span>
            <PlaylistAddCheck />
          </div>

          <div className={ItemClassName} onClick={handleLogout}>
            <span className={TitlesClassName}>Logout</span>
            <Logout />
          </div>
        </>
      ) : (
        <>
          <div className={ItemClassName}>
            <span className={TitlesClassName}>Register</span>
            <HowToReg />
          </div>

          <div className={ItemClassName}>
            <span className={TitlesClassName}>Sign In</span>
            <Login />
          </div>
        </>
      )}
    </>
  );
};

export default PageMenu;

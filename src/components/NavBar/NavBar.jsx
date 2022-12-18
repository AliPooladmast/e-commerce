import { Menu } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import style from "./NavBar.module.scss";
import { sideMenuToggle } from "../../redux/uxSlice";
import PageMenu from "../PageMenu/PageMenu";
import { Avatar } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";

const NavBar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { displaySideMenu } = useSelector((state) => state.ux);
  const { currentUser } = useSelector((state) => state.user);

  return (
    <div className={style.Container}>
      <div className={style.Left}>
        <h1 className={style.Logo} onClick={() => navigate("/")}>
          E-Shop Client
        </h1>
      </div>

      <div className={style.Right}>
        <div className={style.MenuContainer}>
          <PageMenu
            ItemClassName={style.Item}
            TitlesClassName={style.Title}
            SelectedClassName={style.Selected}
            currentUser={currentUser}
          />
        </div>

        {currentUser && (
          <div
            className={`${style.Item} ${
              location.pathname === "/user" ? style.Selected : ""
            }`}
            onClick={() => navigate("/user")}
          >
            <span className={style.Title}>{currentUser.username}</span>
            <Avatar
              sx={{ width: 40, height: 40 }}
              src={currentUser.img}
              alt={currentUser.username}
            >
              {currentUser.username.charAt(0).toUpperCase()}
            </Avatar>
          </div>
        )}
      </div>

      <Menu
        className={style.Menu}
        style={{
          transform: displaySideMenu ? "rotate(90deg)" : "",
          transition: "transform 0.3s",
        }}
        onClick={() => dispatch(sideMenuToggle())}
      />
    </div>
  );
};

export default NavBar;

import { Menu } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import style from "./NavBar.module.scss";
import { sideMenuToggle } from "../../redux/uxSlice";
import PageMenu from "../PageMenu/PageMenu";
import { Avatar } from "@mui/material";

const NavBar = () => {
  const dispatch = useDispatch();
  const { displaySideMenu } = useSelector((state) => state.ux);
  const { currentUser } = useSelector((state) => state.user);

  return (
    <div className={style.Container}>
      <div className={style.Left}>
        <h1 className={style.Logo}>E-Shop Client</h1>
      </div>

      <div className={style.Right}>
        <PageMenu
          ItemClassName={style.Item}
          TitlesClassName={style.Title}
          currentUser={currentUser}
        />

        {currentUser && (
          <div className={style.Item}>
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

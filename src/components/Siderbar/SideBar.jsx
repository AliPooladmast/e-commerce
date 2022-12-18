import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { sideMenuToggle } from "../../redux/uxSlice";
import Backdrop from "../Backdrop/Backdrop";
import PageMenu from "../PageMenu/PageMenu";
import style from "./sideBar.module.scss";

const SideBar = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const { displaySideMenu } = useSelector((state) => state.ux);
  const { currentUser } = useSelector((state) => state.user);

  useEffect(() => {
    if (displaySideMenu) {
      dispatch(sideMenuToggle());
    }
  }, [location]); // eslint-disable-line

  return (
    <>
      {displaySideMenu && (
        <Backdrop onClose={() => dispatch(sideMenuToggle())} />
      )}
      <div className={displaySideMenu ? style["SideBar--Open"] : style.SideBar}>
        <div className={style.Wrapper}>
          <div className={style.Menu}>
            <PageMenu
              ItemClassName={style.Item}
              TitlesClassName={style.Title}
              currentUser={currentUser}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;

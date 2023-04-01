import React, { useState } from "react";
import { Link, NavLink ,useNavigate} from "react-router-dom";
import classes from "./Sidebar.module.scss";

import SwapHorizontalCircleRoundedIcon from "@mui/icons-material/SwapHorizontalCircleRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import { RxDashboard } from "react-icons/rx";
import { FaUserFriends } from "react-icons/fa";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { TbLockAccess } from "react-icons/tb";
import { BiPieChart } from "react-icons/bi";

import { motion } from "framer-motion";
import { Routes } from "../../constants/user.routes";

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const navigate = useNavigate()
  const toggleHandler = () => {
    setOpen(!open);
  };
  const handleLogout =()=>{
    localStorage.removeItem("token");
    window.location.reload();
    // navigate(Routes.LOGIN)
  }
  return (
    <motion.div
      animate={{ width: open ? "18%" : "50px" }}
      className={`${classes.sliderBox} themeColor`}
    >
      <div className={classes.sidebar}>
        <div className={classes.logo}>
          {open && (
            <Link to="#">
              <img
                src={
                  "https://www.tftus.com/wp-content/uploads/2021/01/logo-1.png"
                }
                alt="logo"
              />
              <h4>Asset Management System</h4>
            </Link>
          )}
          {/* <SwapHorizontalCircleRoundedIcon className={classes.toggleBtn} onClick={toggleHandler} /> */}
        </div>
        <div className={classes.content}>
          <div className={classes.links}>
            <NavLink
              className={({ isActive }) =>
                isActive ? `${classes.active}` : ""
              }
              to={Routes.DASHBOARD}
            >
              {" "}
              {<RxDashboard size={"25px"} className={classes.icon} />}
              {open && "Dashboard"}
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? `${classes.active}` : ""
              }
              to={Routes.USERS}
            >
              {" "}
              {<FaUserFriends size={"25px"} className={classes.icon} />}
              {open && "Users"}
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? `${classes.active}` : ""
              }
              to={Routes.INVENTORY}
            >
              {
                <HiOutlineDesktopComputer
                  size={"25px"}
                  className={classes.icon}
                />
              }
              {open && "Inventory"}
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? `${classes.active}` : ""
              }
              to={Routes.ACCESS}
            >
              {<TbLockAccess size={"25px"} className={classes.icon} />}
              {open && "Manage Access"}
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? `${classes.active}` : ""
              }
              to={Routes.ALLOTED}
            >
              {<BiPieChart size={"25px"} className={classes.icon} />}
              {open && "Alloted Assets "}
            </NavLink>
          </div>
          <div className={classes.links}>
            <div className={classes.signout} onClick={handleLogout}>
              <LogoutRoundedIcon className={classes.icon} />
              {"Logout "}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Sidebar;

import { Outlet, Link } from "react-router-dom";
import { AppHeader } from "../header/header";
import Logo from "../assets/hat.svg";
const Layout = () => {
  return (
    <>
      <AppHeader />
      <Outlet />
    </>
  );
};

export default Layout;

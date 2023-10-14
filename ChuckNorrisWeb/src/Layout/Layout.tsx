import { Outlet } from "react-router-dom";
import { AppHeader } from "./header/header";
const Layout = () => {
  return (
    <>
      <AppHeader />
      <Outlet />
      {/* musi być bo inaczej nie działa router dom */}
    </>
  );
};

export default Layout;

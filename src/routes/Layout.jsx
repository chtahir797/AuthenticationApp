import Login from "../Components/Login"
import { Outlet } from "react-router-dom"
const Layout = () => {
  return (
    <>
      {/* <Login /> */}
      <Outlet/>
    </>
  );
};
export default Layout
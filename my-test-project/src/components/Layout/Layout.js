import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../Header";
import { MyLoader } from "../Loader";

const Layout = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<MyLoader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Layout;

import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar";
import "./style.scss";

const RootLayout = () => {
  return (
    <>
      <Navbar />
      <section className="root__page-container">
        <Outlet />
      </section>
    </>
  );
};

export default RootLayout;

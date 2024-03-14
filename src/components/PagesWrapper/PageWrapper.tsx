import Footer from "../Footer";
import Header from "../Header";
import { Outlet } from "react-router-dom";
// import styles from "./PageWrapper.module.scss";

const PageWrapper = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default PageWrapper;

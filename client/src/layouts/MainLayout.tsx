import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Search from "../components/Modal/Search";
import Dialog from "../components/Modal/Dialog";
import Proptypes from "prop-types";
import { useEffect, useState } from "react";

const MainLayout = ({ children }) => {
  const [isSearchShow, setIsSearchShow] = useState(false);
  const [isDialogShow, setIsDialogShow] = useState(false);

  useEffect(() => {
    const status = localStorage.getItem("data")
      ? JSON.parse(localStorage.getItem("data"))
      : localStorage.setItem("data", JSON.stringify(true));
    setTimeout(() => {
      setIsDialogShow(status);
    }, 2000);
  }, []);

  return (
    <div className="main-layout">
      <Dialog isDialogShow={isDialogShow} setIsDialogShow={setIsDialogShow} />
      <Search isSearchShow={isSearchShow} setIsSearchShow={setIsSearchShow} />
      <Header setIsSearchShow={setIsSearchShow} />
      {children}      
      <Footer />
    </div>
  );
};

MainLayout.propTypes = {
  children: Proptypes.node,
};

export default MainLayout;

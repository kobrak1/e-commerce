import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../../context/CartProvider";
import "./HeaderRight.css";

export default function HeaderRight() {
  const { cartItems } = useContext(CartContext);
  const user = localStorage.getItem("user");

  return (
    <div className="header-right">
      <div className="header-right-links">
        <NavLink to={"/auth"} className="header-account" title="Profile">
          <i className="bi bi-person"></i>
        </NavLink>
        <button className="search-button" onClick={() => setIsSearchShow(true)}>
          <i className="bi bi-search"></i>
        </button>
        <NavLink to={"/admin"}>
          <i className="bi bi-heart"></i>
        </NavLink>
        <div className="header-cart">
          <NavLink to={"/cart"} className="header-cart-link">
            <i className="bi bi-bag"></i>
            <span className="header-cart-count"> {cartItems.length} </span>
          </NavLink>
        </div>
        {user && (
          <button
            className="logout-button"
            title="Logout"
            onClick={() => {
              if (window.confirm("Are you sure you want to logout?")) {
                localStorage.removeItem("user");
                window.location.href = "/";
              }
            }}
          >
            <i className="bi bi-box-arrow-right"></i>
          </button>
        )}
      </div>
    </div>
  );
}

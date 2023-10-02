import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "@phosphor-icons/react";
import "../components/Navsbar.css";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="links">
        <Link to="/"> Shop </Link>
        <Link to="/cart">
          <ShoppingCart size={30} />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

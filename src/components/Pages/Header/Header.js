import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../Shared/Navbar/Navbar";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div>
          <h1 className="text">CarSuperMarket.com</h1>
          <p className="paragraph">Our Showroom are Open now</p>
          <Link to="/vehicles">
            <button className="btn btn-danger me-2 fw-bold">Buy Car Now</button>
          </Link>
        </div>
        {/* <div>
          <img className="w-50 my-auto align-middle float-end " src="" alt="" />
        </div> */}
      </div>
    </div>
  );
};

export default Header;

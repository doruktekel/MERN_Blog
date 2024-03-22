import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="header-left">
        <Link to="/" className="logo">
          MyBlog
        </Link>
      </div>
      <div className="header-right">
        <Link to="/register" className="register">
          Register
        </Link>
        <Link to="/login" className="login">
          Login
        </Link>
      </div>
    </header>
  );
};

export default Header;

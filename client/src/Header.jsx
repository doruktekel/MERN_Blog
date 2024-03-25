import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [username, setUsername] = useState("");

  useEffect(() => {
    fetch("http://localhost:5005/user/profile", {
      credentials: "include",
    }).then((response) =>
      response.json().then((userinfo) => setUsername(userinfo))
    );
  }, []);

  const handleLogout = () => {
    fetch("http://localhost:5005/user/logout", {
      credentials: "include",
      method: "POST",
    });
    setUsername(null);
  };
  return (
    <header>
      <div className="header-left">
        <Link to="/" className="logo">
          MyBlog
        </Link>
      </div>
      {username ? (
        <div className="header-right">
          <Link to="/register" className="register">
            Create new post
          </Link>
          <Link className="logout" to="/" onClick={handleLogout}>
            Logout
          </Link>
        </div>
      ) : (
        <div className="header-right">
          <Link to="/register" className="register">
            Register
          </Link>
          <Link to="/login" className="login">
            Login
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;

import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "./contexts/UserContext";

const Header = () => {
  const { setUserInfo, userInfo } = useContext(UserContext);

  const fetchUserProfile = async () => {
    try {
      const response = await fetch("http://localhost:5005/user/profile", {
        credentials: "include",
      });

      if (response.ok) {
        const userinfo = await response.json();
        setUserInfo(userinfo);
      } else {
        console.error("Failed to fetch user profile");
      }
    } catch (error) {
      console.error("Error fetching user profile:", error);
    }
  };

  useEffect(() => {
    fetchUserProfile();
  }, []);

  const handleLogout = () => {
    fetch("http://localhost:5005/user/logout", {
      credentials: "include",
      method: "POST",
    });
    setUserInfo(null);
  };

  const username = userInfo?.username;

  return (
    <header>
      <div className="header-left">
        <Link to="/" className="logo">
          MyBlog
        </Link>
      </div>
      {username ? (
        <div className="header-right">
          <p>Welcome {username.toUpperCase()}</p>
          <Link to="/createpost" className="register">
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

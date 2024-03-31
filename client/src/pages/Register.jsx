import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const cleanedUsername = username.replace(/\s+/g, "");
  const cleanedPassword = password.replace(/\s+/g, "");

  const handleRegister = async (e) => {
    e.preventDefault();

    if (cleanedUsername.length < 5 || cleanedPassword.length < 5) {
      toast.error("Username and password must be at least 5 characters long", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }
    const res = await fetch(
      "https://mern-blog-server-61xo.onrender.com/user/register",
      {
        method: "POST",
        body: JSON.stringify({
          username: cleanedUsername,
          password: cleanedPassword,
        }),
        headers: { "Content-Type": "application/json" },
      }
    );

    if (res) {
      navigate("/login");
      toast.success("Registration was successful please login :)", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      toast.error("There was an error !", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  return (
    <div className="container">
      <form action="" className="register" onSubmit={handleRegister}>
        <h2>Register</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <p className="redflag">
          *Username and password must be at least 5 characters long
        </p>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;

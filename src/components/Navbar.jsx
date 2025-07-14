import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [role, setRole] = useState(localStorage.getItem("role"));
  const navigate = useNavigate();

  useEffect(() => {
    setToken(localStorage.getItem("token"));
    setRole(localStorage.getItem("role"));
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    setToken(null);
    setRole(null);
    navigate("/");
    window.location.reload();
  };

  return (
    <nav className="navbar">
      <Link className="logo" to="/">
        Inox-Playxx
      </Link>

      <div className="nav-links">
        {token ? (
          <>
            <Link className="logo" to="/">
              Home
            </Link>
            
            {role === "admin" && (
              <Link to="/add-movie" className="admin-button">
                {" "}
                Add Movie
              </Link>
            )}
            <a href="" onClick={ handleLogout}>Logout</a>
          </>
          
        ) : (
          <>
          <Link className="logo" to="/">
              Home
            </Link>
            <Link to="/login"> Login</Link>
            <Link to="/register"> Register</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

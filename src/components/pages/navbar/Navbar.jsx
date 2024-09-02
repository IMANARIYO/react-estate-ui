import "./navbar.scss";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const user = true;

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
    { path: "/agents", label: "Agents" },
  ];

  return (
    <nav>
      <div className="left">
        <Link to="/" className="logo">
          <img src="/logo.png" alt="I.BapEstatesLogo" />
          <span>I.B Estate</span>
        </Link>
        {navLinks.map((link, index) => (
          <Link key={index} to={link.path}>
            {link.label}
          </Link>
        ))}
      </div>
      <div className="right">
        {user ? (
          <div className="user">
            <img
              src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="user"
            />
            <span>John Doe</span>
            <Link to="/profile" className="profile">Profile
            <div className="notifications">3</div>
            </Link>
          </div>
        ) : (
          <>
            <Link to="/signin">Sign In</Link>
            <Link to="/signup" className="register">Sign Up</Link>
          </>
        )}

        <div className="menuIcon" onClick={() => setOpen((prev) => !prev)}>
          <img src="/menu.png" alt="menu" />
        </div>

        <div className={open ? "menu active" : "menu"}>
          {navLinks.map((link, index) => (
            <Link key={index} to={link.path} onClick={() => setOpen(false)}>
              {link.label}
            </Link>
          ))}
          {!user && (
            <>
              <Link to="/signin" onClick={() => setOpen(false)}>Sign In</Link>
              <Link to="/signup" onClick={() => setOpen(false)}>Sign Up</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

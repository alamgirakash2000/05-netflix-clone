import React, { useState, useEffect } from "react";
import "./header.style.css";

function Header() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 47) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });
    return () => {
      // window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`navber ${show && "nav-black"}`}>
      <h3 className="logo">MyFlix</h3>
      <img
        className="nav-avater"
        src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
        alt="Netflix Logo"
      />
    </div>
  );
}

export default Header;

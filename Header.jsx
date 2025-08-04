import React from "react";
import { Link } from "react-router-dom";
/*use to navigate to other page without reloading */
import "../src/home.css";

function Header({ cartCount, wishlistCount }) {
  return (
    <div className="header">
      <div id="logo-text" className="logo">
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
<div style={{ 
        display: "flex", 
        alignItems: "center", 
        gap: "8px", 
        backgroundColor: "#fceaff",
        padding: "8px",
        borderRadius: "60%" 
      }}>

            <img
              src="./OtherImages/sss.jpeg"
              alt="Logo"
              style={{ width: "50px", height: "50px", borderRadius: "50%" }}
            />
          </div>
          <span
            className="logo-title"
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: "24px",
              color: "white",
            }}
          >
            KidsMart
            <span className="logo-icon" style={{ paddingLeft: "5px" }}>
              🧸
            </span>
          </span>
        </div>
      </div>
      <div className="nav-links">
        <Link to="/">HOME</Link>
        <Link to="/kidswear">KIDS_WEAR</Link>
        <Link to="/stationary">STATIONARY</Link>
        <Link to="/toys">TOYS</Link>
        <Link to="/about">ABOUT US</Link>
        <Link to="/contact">CONTACT US</Link>
      </div>

      <div className="nav-actions" style={{ display: "flex", alignItems: "center", gap: "15px" }}>
        <div className="search-bar" style={{ display: "flex", alignItems: "center" }}>
          <input
            type="text"
            placeholder="Search...."
            style={{
              borderRadius: "20px 0 0 20px",
              /*top-left , top-right, bottom-right, bottom-left */
              border: "none",
              padding: "8px 12px",
              outline: "none", 
            }}
          />
          <button
            style={{
              borderRadius: "0 20px 20px 0",
              border: "none",
              padding: "8px 16px",
              /*vertical - horizontal */
              backgroundColor: "#6b3e2e",
              color: "white",
              cursor: "pointer",
            }}
          >
            Search
          </button>
        </div>
        <div style={{ display: "flex", gap: "10px" }}>
          <button style={{ background: "navy", color: "white", borderRadius: "8px", padding: "5px 10px" }}>
  🛒 {cartCount}
</button>
<button style={{ background: "navy", color: "white", borderRadius: "8px", padding: "5px 10px" }}>
  ♥ {wishlistCount}
</button>

          <Link to="/admin">
          <button style={{ background: "navy", color: "white", borderRadius: "8px", padding: "5px 10px" }}>
            🧑‍💻 
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;



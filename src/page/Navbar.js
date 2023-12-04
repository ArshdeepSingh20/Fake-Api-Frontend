import React from "react";
import { Link } from "react-router-dom";

const styles = {
  navbar: {
    background: "#333",
    color: "#fff",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "60px",
    borderRadius: "6px",
  },
  navhed: {
    listStyle: "none",
    marginLeft: "20px",
    color: "white",
  },
  navLink: {
    textDecoration: "none",
    color: "#fff",
    fontSize: "16px",
    fontWeight: "bold",
    marginRight: "30px",
  },
};
const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <h1 style={styles.navhed}>API Explore</h1>

      <Link to="/" style={styles.navLink}>
        Home
      </Link>
    </nav>
  );
};

export default Navbar;

import React from 'react';

const Navbar = () => {
  const navbarStyle = {
    backgroundColor: "#2c3e50", // Dark background color
    color: "#ecf0f1", // Light text color
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)", // Box shadow for a subtle elevation
  };

  const logoStyle = {
    fontSize: "1.5em",
    fontWeight: "bold",
    color: "#3498db", // Logo color
    textDecoration: "none",
  };

  const linkStyle = {
    textDecoration: "none",
    color: "#ecf0f1",
    marginLeft: "10px", // Space between links
  };

  const menuStyle = {
    display: "flex",
    alignItems: "center",
  };

  const menuItemStyle = {
    marginRight: "20px",
  };

 
  return (
    <nav style={navbarStyle}>
      <div className="logo" style={logoStyle}>
        <a href="#" style={linkStyle}>P2P Interview</a>
      </div>
      <div className="menu-item" style={menuItemStyle}> MockHub</div>

      <div className="menu" style={menuStyle}>
        <a href="/accounts/signup/user/free" style={{ ...linkStyle, marginRight: "10px" }}>Sign Up</a>
        <a href="/login" style={linkStyle}>Log In</a>
      </div>
    </nav>
  );
};

export default Navbar;

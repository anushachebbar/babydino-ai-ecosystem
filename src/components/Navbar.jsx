function Navbar() {
  const linkStyle = {
    color: "#2D4A3F",
    textDecoration: "none",
    fontWeight: "600",
    fontSize: "16px",
    transition: "0.3s ease",
  };

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "18px 70px",
        background: "#FFFFFF",
        boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
        position: "sticky",
        top: 0,
        zIndex: 1000,
      }}
    >
      <h2
        style={{
          color: "#2D4A3F",
          fontSize: "28px",
          fontWeight: "700",
          letterSpacing: "1px",
        }}
      >
        BabyDino AI
      </h2>

      <div
        style={{
          display: "flex",
          gap: "35px",
          alignItems: "center",
        }}
      >
        <a href="#home" style={linkStyle}>Home</a>
        <a href="#overview" style={linkStyle}>Overview</a>
        <a href="#products" style={linkStyle}>Products</a>
        <a href="#comparison" style={linkStyle}>Comparison</a>
        <a href="#conclusion" style={linkStyle}>Conclusion</a>
      </div>
    </nav>
  );
}

export default Navbar;
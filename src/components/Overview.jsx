function Overview() {
  return (
    <section
      id="overview"
      style={{
        padding: "90px 10%",
        textAlign: "center",
        background: "#F7FAF8",
      }}
    >
      <h2
        style={{
          fontSize: "2.8rem",
          color: "#2D4A3F",
          marginBottom: "20px",
          fontWeight: "700",
        }}
      >
        Zenith AI Ecosystem
      </h2>

      <p
        style={{
          maxWidth: "900px",
          margin: "0 auto 50px",
          fontSize: "18px",
          lineHeight: "1.8",
          color: "#4B5563",
        }}
      >
        Zenith has developed an ecosystem of AI-powered platforms that solve
        real-world challenges across enterprise AI, fashion, music, education,
        and prompt engineering. Each product addresses a unique industry while
        demonstrating the practical impact of artificial intelligence in
        improving efficiency, innovation, and user experience.
      </p>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "25px",
          flexWrap: "wrap",
        }}
      >
        <div style={cardStyle}>Zenith</div>
        <div style={cardStyle}>J.E.R.K.</div>
        <div style={cardStyle}>MUSICLABELAI</div>
        <div style={cardStyle}>AIInsight</div>
        <div style={cardStyle}>Ai4Education</div>
      </div>
    </section>
  );
}

const cardStyle = {
  background: "#FFFFFF",
  color: "#2D4A3F",
  padding: "22px 30px",
  borderRadius: "18px",
  fontWeight: "700",
  minWidth: "190px",
  border: "2px solid #CFE8D6",
  boxShadow: "0 8px 20px rgba(45,74,63,0.10)",
  transition: "0.3s ease",
};

export default Overview;
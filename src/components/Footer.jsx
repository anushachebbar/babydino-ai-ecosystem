function Footer() {
  return (
    <footer
      style={{
        background: "#2D4A3F",
        color: "white",
        padding: "40px 20px",
        textAlign: "center",
        marginTop: "40px",
      }}
    >
      <h3
        style={{
          marginBottom: "10px",
          fontSize: "24px",
        }}
      >
        Business Review & Product Analysis
      </h3>

      <p
        style={{
          color: "#DCE9E0",
          marginBottom: "25px",
          fontSize: "16px",
        }}
      >
        Prepared by <strong>Anusha C</strong> • AIML Student
      </p>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "30px",
          flexWrap: "wrap",
        }}
      >
        <a
          href="https://github.com/anushachebbar"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: "white",
            textDecoration: "none",
            fontWeight: "600",
          }}
        >
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/anushachebbar/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: "white",
            textDecoration: "none",
            fontWeight: "600",
          }}
        >
          LinkedIn
        </a>

        <a
        href="mailto:canushahebbar@gmail.com"
        style={{
            color: "white",
            textDecoration: "none",
            fontWeight: "600",
        }}
        >
        canushahebbar@gmail.com
        </a>
      </div>
    </footer>
  );
}

export default Footer;
function Hero() {
  return (
    <section
      id="home"
      style={{
        background:
          "linear-gradient(135deg, #E8F5EC 0%, #CFE8D6 40%, #9BC8A7 100%)",
        textAlign: "center",
        padding: "140px 20px",
      }}
    >
      <h1
        style={{
          fontSize: "3.8rem",
          color: "#2D4A3F",
          fontWeight: "700",
          marginBottom: "20px",
          letterSpacing: "1px",
        }}
      >
        BabyDino AI Ecosystem
      </h1>

      <p
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          fontSize: "1.2rem",
          color: "#4B5563",
          lineHeight: "1.8",
        }}
      >
        A comprehensive review of Zenith India's AI ecosystem, highlighting its
        innovative products, business value, strengths, and recommendations for
        future improvements.
      </p>


    </section>
  );
}

export default Hero;
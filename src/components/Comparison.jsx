function Comparison() {
  const products = [
    {
      name: "Zenith",
      innovation: "⭐⭐⭐⭐⭐",
      usability: "⭐⭐⭐⭐",
      business: "⭐⭐⭐⭐⭐",
    },
    {
      name: "J.E.R.K.",
      innovation: "⭐⭐⭐⭐⭐",
      usability: "⭐⭐⭐⭐⭐",
      business: "⭐⭐⭐⭐",
    },
    {
      name: "MUSICLABELAI",
      innovation: "⭐⭐⭐⭐",
      usability: "⭐⭐⭐⭐",
      business: "⭐⭐⭐⭐",
    },
    {
      name: "AIInsight",
      innovation: "⭐⭐⭐⭐",
      usability: "⭐⭐⭐⭐⭐",
      business: "⭐⭐⭐⭐",
    },
    {
      name: "Ai4Education",
      innovation: "⭐⭐⭐⭐",
      usability: "⭐⭐⭐⭐",
      business: "⭐⭐⭐⭐⭐",
    },
  ];

  return (
    <section
      id="comparison"
      style={{
        padding: "90px 10%",
        background: "#F7FAF8",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          fontSize: "2.8rem",
          color: "#2D4A3F",
          marginBottom: "15px",
          fontWeight: "700",
        }}
      >
        Product Comparison
      </h2>

      <p
        style={{
          textAlign: "center",
          color: "#4B5563",
          fontSize: "18px",
          marginBottom: "50px",
        }}
      >
        Comparison of Zenith AI ecosystem products based on innovation,
        usability, and business value.
      </p>

      <div
        style={{
          overflowX: "auto",
          borderRadius: "18px",
          boxShadow: "0 10px 30px rgba(45,74,63,0.10)",
        }}
      >
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            background: "#FFFFFF",
          }}
        >
          <thead>
            <tr
              style={{
                background: "#2D4A3F",
                color: "white",
              }}
            >
              <th style={{ padding: "18px" }}>Product</th>
              <th style={{ padding: "18px" }}>Innovation</th>
              <th style={{ padding: "18px" }}>Usability</th>
              <th style={{ padding: "18px" }}>Business Value</th>
            </tr>
          </thead>

          <tbody>
            {products.map((item, index) => (
              <tr
                key={item.name}
                style={{
                  background: index % 2 === 0 ? "#FFFFFF" : "#F8FCF9",
                }}
              >
                <td
                  style={{
                    padding: "18px",
                    border: "1px solid #DCE9E0",
                    fontWeight: "600",
                    color: "#2D4A3F",
                  }}
                >
                  {item.name}
                </td>

                <td
                  style={{
                    textAlign: "center",
                    border: "1px solid #DCE9E0",
                    padding: "18px",
                  }}
                >
                  {item.innovation}
                </td>

                <td
                  style={{
                    textAlign: "center",
                    border: "1px solid #DCE9E0",
                    padding: "18px",
                  }}
                >
                  {item.usability}
                </td>

                <td
                  style={{
                    textAlign: "center",
                    border: "1px solid #DCE9E0",
                    padding: "18px",
                  }}
                >
                  {item.business}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default Comparison;
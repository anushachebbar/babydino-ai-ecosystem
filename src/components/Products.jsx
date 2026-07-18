function Products() {
  const products = [
    {
      name: "Zenith",
      purpose: [
        "AI and Digital Engineering company delivering innovative enterprise solutions.",
        "Develops scalable software, automation, and AI-powered applications.",
        "Helps businesses improve productivity and digital transformation.",
        "Focuses on building intelligent, future-ready technology solutions."
      ],
      improvement: [
        "Add detailed client case studies with measurable outcomes.",
        "Provide interactive product demos for visitors.",
        "Include customer testimonials and success stories.",
        "Create industry-specific solution pages for different sectors."
      ]
    },
    {
      name: "J.E.R.K.",
      purpose: [
        "AI-powered fashion intelligence and trend forecasting platform.",
        "Provides insights into emerging fashion trends, consumer behavior, and cultural movements.",
        "Includes in-house AI systems such as Color Analysis AI for personalized color recommendations and Zenith Fashion for AI-driven fashion insights."
      ],
      improvement: [
        "Improve visibility of Color Analysis AI and Zenith Fashion for first-time users.",
        "Add interactive demos or tutorials to help users understand the AI-powered fashion tools.",
        "Include more case studies and success stories to demonstrate real-world impact."
      ]
    },
    {
      name: "MUSICLABELAI",
      purpose: [
        "AI platform supporting music creators and labels.",
        "Assists in organizing music production workflows.",
        "Improves content management using AI technologies.",
        "Helps artists make informed creative decisions."
      ],
      improvement: [
        "Include royalty and copyright management.",
        "Provide audience analytics dashboards.",
        "Support collaboration between artists and producers.",
        "Add AI-powered music trend predictions."
      ]
    },
    {
      name: "AIInsight",
      purpose: [
        "Educational platform focused on AI and prompt engineering.",
        "Provides practical learning resources for AI enthusiasts.",
        "Helps learners build real-world AI skills.",
        "Encourages hands-on experimentation with modern AI tools."
      ],
      improvement: [
        "Introduce structured learning paths.",
        "Offer live mentor sessions and webinars.",
        "Provide certifications after course completion.",
        "Add quizzes and real-world project challenges."
      ]
    },
    {
      name: "Ai4Education",
      purpose: [
        "AI-powered solutions designed for educational institutions.",
        "Supports teachers with smart learning technologies.",
        "Improves student learning through personalized AI tools.",
        "Encourages digital transformation in education."
      ],
      improvement: [
        "Add AI lesson planning assistance.",
        "Provide student performance analytics.",
        "Include adaptive learning recommendations.",
        "Develop parent-teacher progress dashboards."
      ]
    }
  ];

  return (
    <section id="products">
      <h2
        style={{
          textAlign: "center",
          fontSize: "2.8rem",
          color: "#6B8E7BF",
          marginBottom: "15px",
          fontWeight: "700",
        }}
      >
      <p
  style={{
    textAlign: "center",
    color: "#6B7280",
    marginBottom: "55px",
    fontSize: "18px",
  }}
>
  Review of Zenith India's AI ecosystem with observations and improvement suggestions.
</p>
        Products & Suggestions
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "30px",
        }}
      >
        {products.map((item) => (
          <div className="card" key={item.name}>
            <h3
              style={{
                color: "#2D4A3F",
                marginBottom: "18px",
                fontSize: "1.6rem",
              }}
            >
              {item.name}
            </h3>

            <h4
              style={{
                color: "#6B8E7B",
                marginBottom: "10px",
              }}
            >
              Purpose
            </h4>

            <ul>
              {item.purpose.map((point, index) => (
                <li key={index} style={{ marginBottom: "8px" }}>
                  {point}
                </li>
              ))}
            </ul>

            <br />

            <h4
              style={{
                color: "#6B8E7B",
                marginBottom: "10px",
              }}
            >
              Suggested Improvements
            </h4>

            <ul>
              {item.improvement.map((point, index) => (
                <li key={index} style={{ marginBottom: "8px" }}>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Products;
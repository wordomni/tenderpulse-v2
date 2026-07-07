const tenders = [
  {
    title: "Cloud Infrastructure Upgrade",
    description: "Government technology services opportunity.",
    score: 92
  },
  {
    title: "Data Analytics Platform",
    description: "Public sector analytics opportunity.",
    score: 87
  },
  {
    title: "Cyber Security Services",
    description: "Security improvement contract opportunity.",
    score: 95
  }
];

const app = document.querySelector<HTMLDivElement>("#app");

if (app) {
  app.innerHTML = `
  <div style="
    font-family: Arial, sans-serif;
    background:#f7f9fc;
    min-height:100vh;
    padding:40px;
  ">

    <div style="
      max-width:1100px;
      margin:auto;
    ">

      <header style="
        display:flex;
        justify-content:space-between;
        align-items:center;
        margin-bottom:40px;
      ">

        <div>
          <h1 style="margin:0;">
            TenderPulse
          </h1>

          <p style="color:#666;">
            AI-powered tender intelligence platform
          </p>
        </div>

        <button style="
          background:#111;
          color:white;
          border:none;
          padding:12px 20px;
          border-radius:8px;
          cursor:pointer;
        ">
          Premium
        </button>

      </header>


      <section style="
        background:white;
        padding:30px;
        border-radius:16px;
        box-shadow:0 5px 20px rgba(0,0,0,0.08);
      ">

        <h2>
          Find government opportunities
        </h2>

        <input
          id="searchInput"
          placeholder="Search keywords e.g. construction, IT, AI..."
          style="
            width:100%;
            padding:15px;
            font-size:16px;
            border:1px solid #ddd;
            border-radius:8px;
          "
        />

        <br><br>

        <button
          id="searchButton"
          style="
            background:#2563eb;
            color:white;
            border:none;
            padding:14px 25px;
            border-radius:8px;
            font-size:16px;
            cursor:pointer;
          "
        >
          Search Tenders
        </button>

      </section>


      <h2 style="
        margin-top:40px;
      ">
        Latest Opportunities
      </h2>


      <div
        id="tenderResults"
        style="
          display:grid;
          grid-template-columns:repeat(auto-fit,minmax(280px,1fr));
          gap:20px;
        "
      >
      </div>


    </div>

  </div>
  `;

  const resultsContainer =
    document.querySelector<HTMLDivElement>("#tenderResults");

  const searchInput =
    document.querySelector<HTMLInputElement>("#searchInput");

  const searchButton =
    document.querySelector<HTMLButtonElement>("#searchButton");


  function displayTenders(results: typeof tenders) {

    if (!resultsContainer) return;

    resultsContainer.innerHTML = results.map(tender => `
      
      <div style="
        background:white;
        padding:20px;
        border-radius:12px;
        box-shadow:0 3px 10px rgba(0,0,0,0.05);
      ">

        <h3>
          ${tender.title}
        </h3>

        <p>
          ${tender.description}
        </p>

        <strong>
          AI Match Score: ${tender.score}%
        </strong>

      </div>

    `).join("");

  }


  // Show all tenders when page loads
  displayTenders(tenders);


  // Search functionality
  searchButton?.addEventListener("click", () => {

    const searchTerm =
      searchInput?.value.toLowerCase() || "";


    const filteredTenders = tenders.filter(tender =>
      tender.title.toLowerCase().includes(searchTerm) ||
      tender.description.toLowerCase().includes(searchTerm)
    );


    displayTenders(filteredTenders);

  });

}

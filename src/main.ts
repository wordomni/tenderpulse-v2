const tenders = [
  {
    title: "Cloud Infrastructure Upgrade",
    organisation: "Department of Technology",
    country: "Australia",
    category: "IT Services",
    deadline: "30 September 2026",
    score: 92,
    description:
      "Government cloud infrastructure modernisation opportunity."
  },
  {
    title: "Data Analytics Platform",
    organisation: "Public Health Agency",
    country: "Australia",
    category: "Data Analytics",
    deadline: "15 October 2026",
    score: 87,
    description:
      "Analytics platform implementation and support services."
  },
  {
    title: "Cyber Security Services",
    organisation: "Government Security Office",
    country: "Australia",
    category: "Cyber Security",
    deadline: "5 November 2026",
    score: 95,
    description:
      "Cyber security monitoring and protection services."
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
          placeholder="Search IT, AI, construction, cyber..."
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
          grid-template-columns:repeat(auto-fit,minmax(300px,1fr));
          gap:20px;
        "
      >

      </div>


    </div>

  </div>

  `;



  const resultsContainer =
    document.querySelector<HTMLDivElement>(
      "#tenderResults"
    );


  const searchInput =
    document.querySelector<HTMLInputElement>(
      "#searchInput"
    );


  const searchButton =
    document.querySelector<HTMLButtonElement>(
      "#searchButton"
    );



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


        <p>
          🏢 ${tender.organisation}<br>
          🌏 ${tender.country}<br>
          📂 ${tender.category}<br>
          ⏰ Deadline: ${tender.deadline}
        </p>


        <strong>
          AI Match Score: ${tender.score}%
        </strong>


      </div>


    `).join("");

  }



  // Initial display

  displayTenders(tenders);



  // Search functionality

  searchButton?.addEventListener(
    "click",
    () => {

      const term =
        searchInput?.value.toLowerCase() || "";


      const filtered =
        tenders.filter(tender =>
          tender.title.toLowerCase().includes(term) ||
          tender.description.toLowerCase().includes(term) ||
          tender.category.toLowerCase().includes(term) ||
          tender.organisation.toLowerCase().includes(term)
        );


      displayTenders(filtered);

    }
  );

}

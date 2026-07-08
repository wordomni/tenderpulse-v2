import { getTenders } from "./services/tenderService";
import type { Tender } from "./types/Tender";

let tenders: Tender[] = [];

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
            "
          >
            Search Tenders
          </button>

        </section>


        <h2 style="margin-top:40px;">
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
          Loading tenders...
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


  function displayTenders(results: Tender[]) {

    if (!resultsContainer) return;


    if (results.length === 0) {

      resultsContainer.innerHTML = `
        <p>
          No tenders found.
        </p>
      `;

      return;
    }


    resultsContainer.innerHTML =
      results.map(tender => `

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
            ${tender.description ?? ""}
          </p>

          <p>
            🏢 ${tender.organisation ?? ""}<br>
            🌏 ${tender.country ?? ""}<br>
            📂 ${tender.category ?? ""}<br>
            ⏰ Deadline: ${tender.deadline ?? ""}
          </p>

          <strong>
            AI Match Score: ${tender.score ?? 0}%
          </strong>

        </div>

      `).join("");

  }


  async function loadTenders() {

    try {

      console.log("Loading tenders...");

      const data = await getTenders();

      console.log("Tenders returned:", data);

      tenders = data;

      displayTenders(tenders);

    } catch (error) {

      console.error(
        "Loading failed:",
        error
      );

      if (resultsContainer) {
        resultsContainer.innerHTML = `
          <p>
            Unable to load tenders.
          </p>
        `;
      }

    }

  }


  searchButton?.addEventListener(
    "click",
    () => {

      const term =
        searchInput?.value.toLowerCase() || "";


      const filtered =
        tenders.filter(tender =>
          tender.title?.toLowerCase().includes(term) ||
          tender.description?.toLowerCase().includes(term) ||
          tender.category?.toLowerCase().includes(term) ||
          tender.organisation?.toLowerCase().includes(term)
        );


      displayTenders(filtered);

    }
  );


  loadTenders();

}

import "./style.css";
import { supabase } from "./supabase";


type Tender = {
  id?: number;
  title: string;
  organisation: string;
  country: string;
  category: string;
  deadline: string;
  score: number;
  description: string;
  source_url?: string;
};


let tenders: Tender[] = [];


const app = document.querySelector<HTMLDivElement>("#app");


if (app) {

  app.innerHTML = `

    <div class="container">

      <header class="header">

        <div>
          <h1>TenderPulse</h1>
          <p>
            AI-powered tender intelligence platform
          </p>
        </div>

        <button class="premium-button">
          Premium
        </button>

      </header>


      <section class="search-panel">

        <h2>
          Find government opportunities
        </h2>

        <input
          id="searchInput"
          placeholder="Search IT, AI, construction, cyber..."
        />

        <button id="searchButton">
          Search Tenders
        </button>

      </section>


      <section>

        <h2 class="section-title">
          Latest Opportunities
          <span id="tenderCount"></span>
        </h2>


        <div id="tenderResults">
          Loading tenders...
        </div>

      </section>


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



  const tenderCount =
    document.querySelector<HTMLSpanElement>(
      "#tenderCount"
    );



  function displayTenders(results: Tender[]) {

    if (!resultsContainer) return;


    if (tenderCount) {

      tenderCount.textContent =
        ` (${results.length} tenders)`;

    }



    if (results.length === 0) {

      resultsContainer.innerHTML = `

        <div class="empty-state">
          No tenders found.
        </div>

      `;

      return;

    }



    resultsContainer.innerHTML =

      results.map(tender => `


        <article class="tender-card">


          <div class="card-header">


            <h3>
              ${tender.title}
            </h3>


            <span class="score">
              ${tender.score}% Match
            </span>


          </div>



          <p class="description">
            ${tender.description}
          </p>



          <div class="details">

            <div>
              🏢 ${tender.organisation}
            </div>

            <div>
              🌍 ${tender.country}
            </div>

            <div>
              📂 ${tender.category}
            </div>

            <div>
              ⏰ Deadline: ${tender.deadline}
            </div>

          </div>



          ${
            tender.source_url

            ?

            `
              <a
                href="${tender.source_url}"
                target="_blank"
                class="view-button"
              >
                View Tender
              </a>
            `

            :

            ""

          }


        </article>


      `).join("");

  }





  async function loadTenders() {


    const { data, error } =

      await supabase

        .from("tenders")

        .select("*")

        .order(
          "created_at",
          {
            ascending: false
          }
        );



    console.log(
      "Supabase returned:",
      data
    );


    if (error) {

      console.error(
        "Supabase error:",
        error
      );


      if (resultsContainer) {

        resultsContainer.innerHTML = `

          <div class="empty-state">
            Unable to load tenders.
          </div>

        `;

      }

      return;

    }



    tenders = data || [];


    displayTenders(
      tenders
    );

  }





  searchButton?.addEventListener(
    "click",
    () => {


      const term =

        searchInput?.value

          .toLowerCase()

          .trim()

          || "";



      const filtered =

        tenders.filter(
          tender =>

            tender.title
              .toLowerCase()
              .includes(term)

            ||

            tender.description
              .toLowerCase()
              .includes(term)

            ||

            tender.category
              .toLowerCase()
              .includes(term)

            ||

            tender.organisation
              .toLowerCase()
              .includes(term)

            ||

            tender.country
              .toLowerCase()
              .includes(term)

        );



      displayTenders(
        filtered
      );


    }
  );



  loadTenders();

}

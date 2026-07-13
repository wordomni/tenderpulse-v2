import "./style.css";
import { supabase } from "./supabase";
import { fetchTedTenders } from "./services/tedService";

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


const app =
  document.querySelector<HTMLDivElement>("#app");



if (app) {


  app.innerHTML = `

    <div class="container">


      <header class="header">

        <div>

          <h1>
            TenderPulse
          </h1>

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



        <div class="filters">


          <select id="countryFilter">

            <option value="">
              All Countries
            </option>

          </select>



          <select id="categoryFilter">

            <option value="">
              All Categories
            </option>

          </select>


        </div>



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


  const countryFilter =
    document.querySelector<HTMLSelectElement>(
      "#countryFilter"
    );


  const categoryFilter =
    document.querySelector<HTMLSelectElement>(
      "#categoryFilter"
    );


  const tenderCount =
    document.querySelector<HTMLSpanElement>(
      "#tenderCount"
    );





  function populateFilters() {


    if (!countryFilter || !categoryFilter)
      return;



    const countries =

      [
        ...new Set(
          tenders.map(
            tender => tender.country
          )
        )
      ];



    const categories =

      [
        ...new Set(
          tenders.map(
            tender => tender.category
          )
        )
      ];



    countries.forEach(country => {


      countryFilter.innerHTML += `

        <option value="${country}">
          ${country}
        </option>

      `;


    });




    categories.forEach(category => {


      categoryFilter.innerHTML += `

        <option value="${category}">
          ${category}
        </option>

      `;


    });


  }





  function displayTenders(
    results: Tender[]
  ) {



    if (!resultsContainer)
      return;



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







  function filterTenders() {


    const searchTerm =

      searchInput?.value
        .toLowerCase()
        .trim()
        || "";



    const selectedCountry =

      countryFilter?.value
        || "";



    const selectedCategory =

      categoryFilter?.value
        || "";




    const filtered =


      tenders.filter(tender => {



        const matchesSearch =


          tender.title
            .toLowerCase()
            .includes(searchTerm)


          ||

          tender.description
            .toLowerCase()
            .includes(searchTerm)


          ||

          tender.organisation
            .toLowerCase()
            .includes(searchTerm);





        const matchesCountry =

          !selectedCountry

          ||

          tender.country === selectedCountry;





        const matchesCategory =

          !selectedCategory

          ||

          tender.category === selectedCategory;





        return (

          matchesSearch

          &&

          matchesCountry

          &&

          matchesCategory

        );


      });




    displayTenders(
      filtered
    );


  }








  async function loadTenders() {



    const {

      data,

      error

    } = await supabase


      .from("tenders")


      .select("*")


      .order(

        "created_at",

        {

          ascending:false

        }

      );





    console.log(
      "Supabase:",
      data
    );





    if (error) {


      console.error(
        error
      );


      return;


    }




    tenders = data || [];



    populateFilters();



    displayTenders(
      tenders
    );



  }







  searchButton?.addEventListener(

    "click",

    filterTenders

  );



  countryFilter?.addEventListener(

    "change",

    filterTenders

  );



  categoryFilter?.addEventListener(

    "change",

    filterTenders

  );

fetchTedTenders();

  loadTenders();


}

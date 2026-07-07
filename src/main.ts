document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div style="font-family: Arial; padding: 40px; max-width: 900px; margin:auto;">
    
    <h1>TenderPulse</h1>
    <p>AI-powered tender intelligence platform</p>

    <hr>

    <h2>Find opportunities</h2>

    <input 
      placeholder="Search tenders..."
      style="
        width:100%;
        padding:12px;
        font-size:16px;
      "
    />

    <br><br>

    <button style="
      padding:12px 20px;
      font-size:16px;
      cursor:pointer;
    ">
      Search Tenders
    </button>

    <h2 style="margin-top:40px;">
      Latest Tender Opportunities
    </h2>

    <div style="
      border:1px solid #ddd;
      padding:20px;
      border-radius:10px;
    ">
      <h3>Example Tender</h3>
      <p>
        AI summary will appear here once we connect the TED API.
      </p>
    </div>

  </div>
`

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
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

      <button style="
        background:#2563eb;
        color:white;
        border:none;
        padding:14px 25px;
        border-radius:8px;
        font-size:16px;
      ">
        Search Tenders
      </button>

    </section>


    <h2 style="margin-top:40px;">
      Latest Opportunities
    </h2>


    <div style="
      display:grid;
      grid-template-columns:repeat(auto-fit,minmax(280px,1fr));
      gap:20px;
    ">


      <div style="
        background:white;
        padding:20px;
        border-radius:12px;
      ">

        <h3>
          Cloud Infrastructure Upgrade
        </h3>

        <p>
          Government technology services opportunity.
        </p>

        <strong>
          AI Match Score: 92%
        </strong>

      </div>


      <div style="
        background:white;
        padding:20px;
        border-radius:12px;
      ">

        <h3>
          Data Analytics Platform
        </h3>

        <p>
          Public sector analytics opportunity.
        </p>

        <strong>
          AI Match Score: 87%
        </strong>

      </div>


    </div>

  </div>

</div>
`

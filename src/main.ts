@wordomni ➜ /workspaces/tenderpulse-v2 (main) $ ls -la src/types
total 8
drwxrwxrwx+ 2 codespace codespace 4096 Jul  8 04:21 .
drwxrwxrwx+ 6 codespace codespace 4096 Jul  8 04:51 ..
@wordomni ➜ /workspaces/tenderpulse-v2 (main) $ import type { Tender } from "../types/Tender";
bash: import: command not found
@wordomni ➜ /workspaces/tenderpulse-v2 (main) $ import type { Tender } from "../types/Tender";
bash: import: command not found
@wordomni ➜ /workspaces/tenderpulse-v2 (main) $ code src/services/tenderService.ts
@wordomni ➜ /workspaces/tenderpulse-v2 (main) $ ls -la src/types
total 8
drwxrwxrwx+ 2 codespace codespace 4096 Jul  8 04:21 .
drwxrwxrwx+ 6 codespace codespace 4096 Jul  8 04:51 ..
@wordomni ➜ /workspaces/tenderpulse-v2 (main) $ ls -la src/types
total 8
drwxrwxrwx+ 2 codespace codespace 4096 Jul  8 04:21 .
drwxrwxrwx+ 6 codespace codespace 4096 Jul  8 04:51 ..
@wordomni ➜ /workspaces/tenderpulse-v2 (main) $ touch src/types/Tender.ts
@wordomni ➜ /workspaces/tenderpulse-v2 (main) $ touch src/types/Tender.ts
@wordomni ➜ /workspaces/tenderpulse-v2 (main) $ touch src/types/Tender.ts
@wordomni ➜ /workspaces/tenderpulse-v2 (main) $ touch src/types/Tender.ts
@wordomni ➜ /workspaces/tenderpulse-v2 (main) $ mkdir -p src/types
@wordomni ➜ /workspaces/tenderpulse-v2 (main) $ cat > src/types/Tender.ts <<'EOF'
export interface Tender {
  id?: number;
  title: string;
  organisation: string;
  country: string;
  category: string;
  deadline: string;
  score: number;
  description: string;
  source_url?: string;
}
EOF
@wordomni ➜ /workspaces/tenderpulse-v2 (main) $ ls -la src/types
total 12
drwxrwxrwx+ 2 codespace codespace 4096 Jul  8 05:47 .
drwxrwxrwx+ 6 codespace codespace 4096 Jul  8 04:51 ..
-rw-rw-rw-  1 codespace codespace  206 Jul  8 05:54 Tender.ts
@wordomni ➜ /workspaces/tenderpulse-v2 (main) $ cat src/types/Tender.ts
export interface Tender {
  id?: number;
  title: string;
  organisation: string;
  country: string;
  category: string;
  deadline: string;
  score: number;
  description: string;
  source_url?: string;
}
@wordomni ➜ /workspaces/tenderpulse-v2 (main) $ git status
On branch main
Your branch is up to date with 'origin/main'.

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   src/services/supabase.ts

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        src/services/tenderService.ts
        src/types/

no changes added to commit (use "git add" and/or "git commit -a")
@wordomni ➜ /workspaces/tenderpulse-v2 (main) $ git add src/services src/types
@wordomni ➜ /workspaces/tenderpulse-v2 (main) $ git commit -m "Add Supabase service and tender data layer"
[main 9beb074] Add Supabase service and tender data layer
 3 files changed, 44 insertions(+)
 create mode 100644 src/services/tenderService.ts
 create mode 100644 src/types/Tender.ts
@wordomni ➜ /workspaces/tenderpulse-v2 (main) $ git push
To https://github.com/wordomni/tenderpulse-v2
 ! [rejected]        main -> main (fetch first)
error: failed to push some refs to 'https://github.com/wordomni/tenderpulse-v2'
hint: Updates were rejected because the remote contains work that you do not
hint: have locally. This is usually caused by another repository pushing to
hint: the same ref. If you want to integrate the remote changes, use
hint: 'git pull' before pushing again.
hint: See the 'Note about fast-forwards' in 'git push --help' for details.
@wordomni ➜ /workspaces/tenderpulse-v2 (main) $ git pull --rebase
remote: Enumerating objects: 9, done.
remote: Counting objects: 100% (9/9), done.
remote: Compressing objects: 100% (6/6), done.
remote: Total 6 (delta 2), reused 0 (delta 0), pack-reused 0 (from 0)
Unpacking objects: 100% (6/6), 2.08 KiB | 112.00 KiB/s, done.
From https://github.com/wordomni/tenderpulse-v2
   a9abe17..e706925  main       -> origin/main
Auto-merging src/services/tenderService.ts
CONFLICT (add/add): Merge conflict in src/services/tenderService.ts
error: could not apply 9beb074... Add Supabase service and tender data layer
hint: Resolve all conflicts manually, mark them as resolved with
hint: "git add/rm <conflicted_files>", then run "git rebase --continue".
hint: You can instead skip this commit: run "git rebase --skip".
hint: To abort and get back to the state before "git rebase", run "git rebase --abort".
hint: Disable this message with "git config set advice.mergeConflict false"
Could not apply 9beb074... # Add Supabase service and tender data layer
@wordomni ➜ /workspaces/tenderpulse-v2 (e706925) $ code src/services/tenderService.ts
@wordomni ➜ /workspaces/tenderpulse-v2 (e706925) $ git status
interactive rebase in progress; onto e706925
Last command done (1 command done):
   pick 9beb074 # Add Supabase service and tender data layer
No commands remaining.
You are currently rebasing branch 'main' on 'e706925'.
  (fix conflicts and then run "git rebase --continue")
  (use "git rebase --skip" to skip this patch)
  (use "git rebase --abort" to check out the original branch)

Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
        modified:   src/services/supabase.ts
        new file:   src/types/Tender.ts

Unmerged paths:
  (use "git restore --staged <file>..." to unstage)
  (use "git add <file>..." to mark resolution)
        both added:      src/services/tenderService.ts

@wordomni ➜ /workspaces/tenderpulse-v2 (e706925) $ git add src/services/tenderService.ts
@wordomni ➜ /workspaces/tenderpulse-v2 (e706925) $ git rebase --continue
[detached HEAD 6b4cc21] Add Supabase service and tender data layer
 3 files changed, 21 insertions(+), 26 deletions(-)
 create mode 100644 src/types/Tender.ts
Successfully rebased and updated refs/heads/main.
@wordomni ➜ /workspaces/tenderpulse-v2 (main) $ git push
Enumerating objects: 9, done.
Counting objects: 100% (9/9), done.
Delta compression using up to 2 threads
Compressing objects: 100% (5/5), done.
Writing objects: 100% (6/6), 628 bytes | 628.00 KiB/s, done.
Total 6 (delta 2), reused 0 (delta 0), pack-reused 0 (from 0)
remote: Resolving deltas: 100% (2/2), completed with 2 local objects.
To https://github.com/wordomni/tenderpulse-v2
   e706925..6b4cc21  main -> main
@wordomni ➜ /workspaces/tenderpulse-v2 (main) $ git status
On branch main
Your branch is up to date with 'origin/main'.

nothing to commit, working tree clean
@wordomni ➜ /workspaces/tenderpulse-v2 (main) $ cp src/main.ts src/main-backup.ts
@wordomni ➜ /workspaces/tenderpulse-v2 (main) $ ls src
assets      counter.ts      main.ts   style.css    types
components  main-backup.ts  services  supabase.ts
@wordomni ➜ /workspaces/tenderpulse-v2 (main) $ cat src/main.ts
import { supabase } from './supabase'


type Tender = {
  id?: number
  title: string
  organisation: string
  country: string
  category: string
  deadline: string
  score: number
  description: string
  source_url?: string
}


let tenders: Tender[] = []


const app = document.querySelector<HTMLDivElement>("#app")


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
            font-size:16px;
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

      </div>


    </div>

  </div>

  `



  const resultsContainer =
    document.querySelector<HTMLDivElement>(
      "#tenderResults"
    )


  const searchInput =
    document.querySelector<HTMLInputElement>(
      "#searchInput"
    )


  const searchButton =
    document.querySelector<HTMLButtonElement>(
      "#searchButton"
    )



  function displayTenders(results: Tender[]) {

    if (!resultsContainer) return


    if (results.length === 0) {

      resultsContainer.innerHTML = `
        <p>
          No tenders found.
        </p>
      `

      return
    }


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


    `).join("")

  }



  async function loadTenders() {

    const { data, error } = await supabase
      .from("tenders")
      .select("*")
      .order("created_at", {
        ascending: false
      })


    if (error) {

      console.error(
        "Supabase error:",
        error
      )

      if (resultsContainer) {
        resultsContainer.innerHTML = `
          <p>
            Unable to load tenders.
          </p>
        `
      }

      return
    }


    tenders = data || []

    displayTenders(tenders)

  }



  searchButton?.addEventListener(
    "click",
    () => {

      const term =
        searchInput?.value.toLowerCase() || ""


      const filtered =
        tenders.filter(tender =>
          tender.title.toLowerCase().includes(term) ||
          tender.description.toLowerCase().includes(term) ||
          tender.category.toLowerCase().includes(term) ||
          tender.organisation.toLowerCase().includes(term)
        )


      displayTenders(filtered)

    }
  )



  loadTenders()

}

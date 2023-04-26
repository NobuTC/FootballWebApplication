const teamsEl = document.getElementById("teams");

async function getTeams() {
  // Fetch all teams
  const req = await fetch("/api/getall", {
    method: "get",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

  // Get data from the await fetch promise
  const messages = await req.json();
  createTeamHtml(messages.reverse());
}

function createTeamHtml(data) {
  const table = document.createElement("table");
  table.className = "table";
  const headerRow = document.createElement("tr");
  for (const key in data[0]) {
    const th = document.createElement("th");
    th.textContent = key;
    headerRow.appendChild(th);
  }
  table.appendChild(headerRow);
  data.forEach((obj) => {
    const row = document.createElement("tr");
    for (const key in obj) {
      const td = document.createElement("td");
      td.textContent = obj[key];
      row.appendChild(td);
    }
    table.appendChild(row);
  });

  teamsEl.appendChild(table);
}

getTeams();

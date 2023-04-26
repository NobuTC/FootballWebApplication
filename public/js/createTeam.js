const form = document.getElementById("createTeam");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());

  const url = "/api/add";
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };

  fetch(url, options)
    .then((response) => {
      if (response.ok) {
        alert("Team created successfully");
      } else {
        console.error("Error creating team:", response.status);
      }
    })
    .catch((error) => console.error("Error creating team:", error));
});

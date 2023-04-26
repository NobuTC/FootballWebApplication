const form = document.getElementById("updateTeam");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());

  const url = `/api/update/${data.id}`;
  const options = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };

  fetch(url, options)
    .then((response) => {
      if (response.ok) {
        alert("Team updated successfully");
      } else {
        console.error("Error updated team:", response.status);
      }
    })
    .catch((error) => console.error("Error updated team:", error));
});

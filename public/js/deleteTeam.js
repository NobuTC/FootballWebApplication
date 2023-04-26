const form = document.getElementById("deleteTeam");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());

  const url = `/api/delete/${data.id}`;
  const options = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  };

  fetch(url, options)
    .then((response) => {
      if (response.ok) {
        alert("Team deleted successfully");
      } else {
        console.error("Error delete team:", response.status);
      }
    })
    .catch((error) => console.error("Error delete team:", error));
});

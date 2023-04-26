const form = document.getElementById("deleteTeam");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());

  const url = `/api/${data.id}`;
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };

  fetch(url, options)
    .then(async (response) => {
      if (response.ok) {
        // Get data from the await fetch promise
        const messages = await response.json();
        // Return all messages as a response to the page
        const messageTextElement = document.getElementById(`message-text`);
        messageTextElement.innerHTML = JSON.stringify(messages);
      } else {
        console.error("Error View team:", response.status);
      }
    })
    .catch((error) => console.error("Error View team:", error));
});

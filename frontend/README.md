User Management Frontend (CRUD)
Description

This frontend is built with HTML, Bootstrap, SCSS, and JavaScript to interact with a backend API (Node.js + Express + MongoDB). The key logic lies in JavaScript fetch() calls that handle all CRUD operations and dynamically update the DOM without reloading the page.

JavaScript & API Fetch Explanation

Create User (POST)
When the user fills out the form and clicks submit, JavaScript captures the input values (name, email, address) and sends them to the backend using:

fetch("http://localhost:8000/api/user/create", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ name, email, address })
})

Read Users (GET)
On page load, JavaScript automatically calls:

fetch("http://localhost:8000/api/user/getAllUsers")

The response is converted to JSON, and each user is appended dynamically into the HTML table with Update and Delete buttons.

Update User (PUT)
When clicking the Update button, the form fields are filled with the selected user’s data. After editing, JavaScript sends:

fetch(http://localhost:8000/api/user/update/${id}, {
  method: "PUT",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ name, email, address })
})


Delete User (DELETE)
When the Delete button is clicked, JavaScript sends:

fetch(http://localhost:8000/api/user/delete/${id}, {
  method: "DELETE"
})

SCSS Styling
Bootstrap handles responsiveness, while SCSS is used for custom hover effects, button styles, and table formatting.

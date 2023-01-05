const container = document.getElementById("container");

for (let i = 0; i < 10; i++) {
  const card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = `
    <img src="https://blogen.influence4you.com/wp-content/uploads/2020/01/alexander-shatov-niUkImZcSP8-unsplash-1-scaled.jpg" alt="Video thumbnail">
    <h3>Video title</h3>
    <p>Video description</p>
  `;
  container.appendChild(card);
}


// Create the container element
const container2 = document.createElement("div");
container2.id = "search-container2";
document.body.appendChild(container2);

// Create the form element
const form = document.createElement("form");
form.id = "search-form";
container2.appendChild(form);

// Create the input element
const input = document.createElement("input");
input.type = "text";
input.id = "search-input";
form.appendChild(input);

// Create the button element
const button = document.createElement("button");
button.id = "search-button";
button.textContent = "Search";
form.appendChild(button);

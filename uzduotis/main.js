let container = document.getElementById("#container");

for (let i = 0; i < 5; i++) {
let card = document.createElement("div");
card.classList.add("card");
card.innerHTML = `
  <img src="https://blogen.influence4you.com/wp-content/uploads/2020/01/alexander-shatov-niUkImZcSP8-unsplash-1-scaled.jpg" alt="Video thumbnail">
  <h3>Video title</h3>
  <p>Video description</p>
`;
container.appendChild(card);

}

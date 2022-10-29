// let typed = new Typed(".type", options);
// let options = {
//   stringsElement: ["elements", "that you never"],
//   typeSpeed: 40,
//   loop: true
// };

const entry = document.querySelector(".title");
entry.addEventListener("click", () => {
  console.log("clicked")
})

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
}, { threshold: 0.1 });

const hiddenElements = document.querySelectorAll(".hidden");
const hiddenElements2 = document.querySelectorAll(".hidden-2");
hiddenElements.forEach((el) => observer.observe(el));
hiddenElements2.forEach((el) => observer.observe(el));

const slider = document.getElementById("slidedown");

// Implemented as a link
// slider.addEventListener("click", (e) => {
//   e.preventDefault();
//   scroll({ top: 600, behavior: "smooth" });
// });

// weather widget

const form = document.querySelector(".city-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const input = document.getElementById("city-input").value;
  fetchingWeather(input);
})

fetchingWeather(query) {
  // fetch(`https://api.openweathermap.org/data/2.5/weather?q=${query}&APPID=${appid}`)
    .then(res => res.json())
    .then((data) => {
      console.dir(data);
      this.descriptionTarget.innerText = data.weather[0].description;
      this.temperatureTarget.innerText = `${Math.floor(data.main.temp - 273.15)}°C`;
      const icon = data.weather[0].icon;
      this.iconElTarget.setAttribute("src", `https://openweathermap.org/img/w/${icon}.png`);
    });
  const date = new Date().toString();
  this.dateTarget.innerText = date;
}

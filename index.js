console.log("hello");

// const hiddenElements = document.querySelectorAll(".hidden");
// hiddenElements.forEach((el) => observer.observe(el));
// var options = {
//   stringsElement: ["elements", "that you never"],
//   typeSpeed: 40,
//   loop: true
// };
// var typed = new Typed(".type", options);

const entry = document.querySelector(".title");
entry.addEventListener("click", () => {
  console.log("clicked")
})

// const observer = new IntersectionObserver((entries) => {
//   entries.forEach((entry) => {
//     if (entry.isIntersecting) {
//       entry.target.classList.add("show");
//     } else {
//       entry.target.classList.remove("show");
//     }
//   })
// })

console.log("hello");
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
hiddenElements.forEach((el) => observer.observe(el));

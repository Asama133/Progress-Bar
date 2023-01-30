let stepsNumbers = document.querySelectorAll("p");
let stepsLines = document.querySelectorAll("span");
let images = document.querySelectorAll("img");
let prevBtn = document.querySelector(".previous");
let nextBtn = document.querySelector(".next");
let step = 0;

nextBtn.addEventListener("click", (eo) => {
  stepsLines[step].style.background = "var(--secondaryColor)";
  stepsNumbers[step + 1].style.borderColor = "var(--secondaryColor)";

  prevBtn.classList.remove("disabled");
  prevBtn.classList.add("active");
  prevBtn.removeAttribute("disabled")

  images.forEach((img) => {
    img.style.transform = `translateX(calc(${step + 1}* -100%))`;
  });

  step++;

  if (step === 3) {
    eo.target.classList.remove("active");
    eo.target.classList.add("disabled");
    eo.target.setAttribute("disabled", "disabled");
  }
});

prevBtn.addEventListener("click", (eo) => {
  stepsNumbers[step].style.borderColor = "var(--mainColor)";
  nextBtn.classList.remove("disabled");
  nextBtn.classList.add("active");
  nextBtn.removeAttribute("disabled");

  step--;

  images.forEach((img) => {
    img.style.transform = `translateX(calc(${step}* -100%))`;
  });

  stepsLines[step].style.background = "var(--mainColor)";

  if (step === 0) {
    eo.target.classList.remove("active");
    eo.target.classList.add("disabled");
    eo.target.setAttribute("disabled", "disabled");
  }
});

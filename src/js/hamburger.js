//Hamburger
console.log("haburger");

const hamburger = document.querySelector(".hamburger--js");

hamburger.addEventListener("click", () => {
  console.log("działa");
  const nav = document.querySelector(".navigation--js");
  nav.classList.toggle("navigation--open");
});

const btn = document.querySelector("#menu-btn");
const menu = document.querySelector("#menu");

btn.addEventListener("click", function (ev) {
  ev.stopPropagation();
  btn.classList.toggle("open");
  menu.classList.toggle("hidden");
  menu.classList.toggle("flex");
});

document.addEventListener("click", function () {
  btn.classList.remove("open");
  menu.classList.add("hidden");
  menu.classList.remove("flex");
});

let painting = document.querySelector(".painting");
let blue = document.querySelector("#blue");
let red = document.querySelector("#red");
let yellow = document.querySelector("#yellow");
let green = document.querySelector("#green");
let selectedColor = ["blue", "red", "yellow", "green"];

painting.addEventListener("click", function (e) {
  e.target.style.backgroundColor = blue;
});

blue.addEventListener("click", function () {
  painting.addEventListener("click", function (e) {
    e.target.style.backgroundColor = selectedColor[0];
  });
});

red.addEventListener("click", function () {
  painting.addEventListener("click", function (e) {
    e.target.style.backgroundColor = selectedColor[1];
  });
});

yellow.addEventListener("click", function () {
  painting.addEventListener("click", function (e) {
    e.target.style.backgroundColor = selectedColor[2];
  });
});

green.addEventListener("click", function () {
  painting.addEventListener("click", function (e) {
    e.target.style.backgroundColor = selectedColor[3];
  });
});

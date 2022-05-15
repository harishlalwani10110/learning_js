const input = document.querySelector("#username");

input.addEventListener("keydown", function (e) {
  console.log("KEYDOWN!!");
});

input.addEventListener("keyup", function (e) {
  console.log("KEYUP!!");
});

input.addEventListener("keypress", function (e) {
  console.log("KEY PRESSED!");
});

const colors = [
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "purple",
  "indigo",
  "violet",
];

const printColor = function (event) {
  const h1 = document.querySelector("h1");
  console.log(event);
  h1.style.color = this.style.backgroundColor;
};

const container = document.querySelector("#boxes");
for (let color of colors) {
  const box = document.createElement("div");
  box.style.backgroundColor = color;
  box.classList.add("box");
  container.appendChild(box);
  box.addEventListener("click", printColor);
}

document.body.addEventListener("keypress", function (e) {
  console.log(e);
});

const nameField = document.querySelector("#name");
nameField.addEventListener("click", () => {
  if (nameField.value === "Enter your name") {
    nameField.value = "";
  }
});

nameField.addEventListener("keypress", () => {
  nameField.value = nameField.value.toUpperCase();
});

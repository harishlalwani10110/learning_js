fullNumbersAvailable = Array.from(Array(90), (_, i) => i + 1);
// calledOutNumbers = [];
lastFiveNumbers = [];

const numberBoard = document.body.querySelector(".number-board");
for (let i = 1; i <= 90; i++) {
  const number = document.createElement("div");
  number.innerText = i;
  number.classList.add(`number`);
  number.classList.add(`number-${i}`);
  numberBoard.appendChild(number);
}

resetFullBoard = () => {
  allNumbers = document.querySelectorAll(".number");
  allNumbers.forEach((element) => {
    element.style.backgroundColor = "#ffebcd";
    element.style.color = 'black'
    element.style.fontWeight = "normal";
  });

  // Rest te array to include all numbers
  fullNumbersAvailable = Array.from(Array(90), (_, i) => i + 1);
  lastFiveNumbers = []; 
  const nextNumbertoDisplay = document.getElementsByClassName("next-number")[0];
  nextNumbertoDisplay.innerHTML = "Wait!!";
  // calledOutNumbers = [];
  document.querySelector(".last-5").innerHTML = "";
};

generateNextNumber = () => {
  const nextNumberIndex = Math.floor(
    Math.random() * fullNumbersAvailable.length
  );
  const nextNumber = fullNumbersAvailable[nextNumberIndex];

  fullNumbersAvailable.splice(nextNumberIndex, 1);
  const nextElement = document.querySelector(`.number-${nextNumber}`);
  nextElement.style.backgroundColor = "#b45b5b";
  nextElement.style.fontWeight = "bold";
  nextElement.style.color = "white";

  const nextNumbertoDisplay = document.getElementsByClassName("next-number")[0];
  nextNumbertoDisplay.innerHTML = nextNumber;

  const nextButton = document.querySelector(".next-button");
  

  // calledOutNumbers.push(nextNumber);
  // document.querySelector(".called-out").innerHTML +=
  //   "<div class='called-number'>" + nextNumber + "</div>";
  lastFiveNumbers.push(nextNumber);
  if (lastFiveNumbers.length > 5) {
    lastFiveNumbers.splice(0, 1);
  }
  let lastFiveNumberElements = document.querySelector(".last-5");
  lastFiveNumberElements.innerHTML = "";
  lastFiveNumbers.forEach((element) => {
    const number = document.createElement("div");
    number.innerText = element;
    number.classList.add(`number`);
    lastFiveNumberElements.appendChild(number);
  });
};

const resetElement = document.getElementById("reset");
resetElement.addEventListener("click", resetFullBoard);

const nextElement = document.getElementById("next");
nextElement.addEventListener("click", generateNextNumber);

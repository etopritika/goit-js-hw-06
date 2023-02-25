function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.body;
const colorOutput = document.querySelector(".color");
const changeColorBtn = document.querySelector(".change-color");



const changeBackground = () => {
  const randomHexColor = getRandomHexColor();
  body.style.backgroundColor = randomHexColor;
  colorOutput.innerHTML = randomHexColor;
};

changeColorBtn.addEventListener("click", changeBackground);

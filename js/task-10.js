function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const containerEl = document.querySelector("#boxes");
const inputEl = document.querySelector("#controls > input");

const boxMaker = () => {
  const inputValue = inputEl.value;
  let divBoxes = [];
  for (let i = 0; i < inputValue; i += 1) {
    const divEl = document.createElement("div");
    divEl.style.width = `${i * 10 + 30}px`;
    divEl.style.height = `${i * 10 + 30}px`;
    divEl.style.backgroundColor = getRandomHexColor();
    divEl.classList.add("box");
    divBoxes.push(divEl);
  }
  containerEl.innerHTML = "";
  containerEl.append(...divBoxes);
};

const boxDestroyer = () => {
  containerEl.innerHTML = "";
};

createBtn.addEventListener("click", boxMaker);
destroyBtn.addEventListener("click", boxDestroyer);

const fontSizeContoler = document.querySelector("#font-size-control");

const textEl = document.querySelector("#text");

const changeFontSize = (event) => {
  textEl.style.fontSize = `${event.currentTarget.value}px`;
};

fontSizeContoler.addEventListener("input", changeFontSize);

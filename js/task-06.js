const inputEl = document.querySelector("#validation-input");

const isBlur = event => {
  if (
    event.currentTarget.value.length > inputEl.dataset.length ||
    event.currentTarget.value.length < inputEl.dataset.length
  ) {
    inputEl.classList.remove("valid");
    inputEl.classList.add("invalid");
  } else {
    inputEl.classList.remove("invalid");
    inputEl.classList.add("valid");
  }
};

inputEl.addEventListener("blur", isBlur);

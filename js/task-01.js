const listElems = document.querySelectorAll(".item");

console.log("Number of categories:", listElems.length);

listElems.forEach(function (element) {
  console.log("Category: ", element.firstElementChild.textContent);
  console.log("Elements: ", element.lastElementChild.children.length);
});

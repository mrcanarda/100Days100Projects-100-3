const paragraphLinkOne = document.querySelector(".one");
const paragraphLinkTwo = document.querySelector(".two");
const paragraphLinkThree = document.querySelector(".three");
const paragraphLinkFour = document.querySelector(".four");
const paragraphLinkFive = document.querySelector(".five");
const paragraphLinkOne__parag = document.querySelector(".ein");
const paragraphLinkTwo__parag = document.querySelector(".zwei");
const paragraphLinkThree__parag = document.querySelector(".drei");
const paragraphLinkFour__parag = document.querySelector(".vier");
const paragraphLinkFive__parag = document.querySelector(".funf");
const arrow = document.querySelector(".arrow-one");
const arrowTwo = document.querySelector(".arrow-two");
const arrowThree = document.querySelector(".arrow-three");
const arrowFour = document.querySelector(".arrow-four");
const arrowFive = document.querySelector(".arrow-five");

paragraphLinkOne.addEventListener("click", function () {
  paragraphLinkOne__parag.classList.remove("hidden");
  arrow.classList.add("hidden");
  document.querySelector(".one").style.fontWeight = "700";
});

paragraphLinkTwo.addEventListener("click", function () {
  paragraphLinkTwo__parag.classList.remove("hidden");
  arrowTwo.classList.add("hidden");
  document.querySelector(".two").style.fontWeight = "700";
});

paragraphLinkThree.addEventListener("click", function () {
  paragraphLinkThree__parag.classList.remove("hidden");
  arrowThree.classList.add("hidden");
  document.querySelector(".three").style.fontWeight = "700";
});

paragraphLinkFour.addEventListener("click", function () {
  paragraphLinkFour__parag.classList.remove("hidden");
  arrowFour.classList.add("hidden");
  document.querySelector(".four").style.fontWeight = "700";
});

paragraphLinkFive.addEventListener("click", function () {
  paragraphLinkFive__parag.classList.remove("hidden");
  arrowFive.classList.add("hidden");
  document.querySelector(".five").style.fontWeight = "700";
});

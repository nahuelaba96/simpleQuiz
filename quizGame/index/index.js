const questionTypes = document.querySelector(".types");
const typeAll = "Todo";
const typeIngles = "Ingles";
const typeGeografia = "Geografia";
questionTypes.innerHTML += `<button id="1" class="button">${typeIngles}</button>`;
questionTypes.innerHTML += `<button id="2" class="button">${typeGeografia}</button>`;
questionTypes.innerHTML += `<button id="3" class="button">${typeAll}</button>`;

const button1 = document.getElementById("1");
button1.addEventListener("click", () => {
  localStorage.setItem("questionType", typeIngles);
  return window.location.assign("../game/game.html");
});

const button2 = document.getElementById("2");
button2.addEventListener("click", () => {
  localStorage.setItem("questionType", typeGeografia);
  return window.location.assign("../game/game.html");
});


const button3 = document.getElementById("3");
button3.addEventListener("click", () => {
  localStorage.setItem("questionType", "");
  return window.location.assign("../game/game.html");
});
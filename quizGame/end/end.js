const result = document.querySelector('.scoreShowed');
const score = JSON.parse(localStorage.getItem("mostRecentScore")) || 0;
const questionsResponse =
  JSON.parse(localStorage.getItem("maxQuestion")) || 0;
result.innerText = `Score ${score}/${questionsResponse}`;
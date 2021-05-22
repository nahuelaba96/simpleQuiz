const choices = Array.from(document.querySelectorAll(".answer"));
const question = document.querySelector(".question");
const counter = document.getElementById('counter');
let currentQuestion = {};
let avaiableQuestions = [];
let acceptedQuestion = true;
let score = 0;
let questionCounter = 0;
const maxQuestion = 20;
localStorage.setItem('maxQuestion', maxQuestion);
var correctSound = new sound('../sounds/correct.mp3');
var incorrectSound = new sound('../sounds/incorrect.mp3');
let questionType = localStorage.getItem("questionType");
let questionsBank = [
  {
    type: "Geografia",
    question: "Que rios rodean la provencia de Entre Rios - Argentina?",
    answers: [
      "Parana y Uruguay",
      "Nilo y Amazonas",
      "La plata y Parana",
      "Solo rodeada por el rio Uruguay",
      "Rio Concordia y rio Federacion",
    ],
    correctAnswer: "Parana y Uruguay",
  },
  {
    type: "Geografia",
    question: "En que continente queda Nepal?",
    answers: ["Americano", "Asiatico", "Europeo", "Oceania", "Africa"],
    correctAnswer: "Asiatico",
  },
  {
    type: "Geografia",
    question: "Donde se ubica el gran desierto de Gobi?",
    answers: ["Americano", "Asiatico", "Europeo", "Oceania", "Africa"],
    correctAnswer: "Asiatico",
  },
  {
    type: "Geografia",
    question: "En que pais se ubican las ruinas de Esparta?",
    answers: ["Italia", "Grecia", "Francia", "Egipto", "Masedonia"],
    correctAnswer: "Grecia",
  },
  {
    type: "Geografia",
    question: "Cuantos residentes permanentes hay en La Antartida?",
    answers: [
      "20 residentes",
      "100 residentes",
      "1000 residentes",
      "5423 residentes",
      "Niguno",
    ],
    correctAnswer: "Ninguno",
  },
  {
    type: "Geografia",
    question: "Cual de estos paises no tiene acceso al Mar Mediterraneo?",
    answers: ["Eslovenia", "Chipre", "Egipto", "Serbia", "Italia"],
    correctAnswer: "Serbia",
  },
  {
    type: "Geografia",
    question: "Cual es el rio mas largo del mundo?",
    answers: ["Amazonas", "Parana", "Rio Amarillo", "Yangtse", "Nilo"],
    correctAnswer: "Nilo",
  },
  {
    type: "Geografia",
    question:
      "Cual es el segundo pais mas grande del mundo en terminos de poblacion?",
    answers: ["India", "China", "Rusia", "Estados Unidos", "Brazil"],
    correctAnswer: "India",
  },
  {
    type: "Geografia",
    question: "Cual de estos paises es baniado unicamente por un oceano?",
    answers: ["Gran Bretania", "Canada", "Rusia", "Mexico", "Nueva Zelanda"],
    correctAnswer: "Gran Bretania",
  },
  {
    type: "Geografia",
    question: "Cuantos continentes hay en la Tierra?",
    answers: ["4", "5", "6", "11", "7"],
    correctAnswer: "6",
  },
  {
    type: "Geografia",
    question: "Cuantos oceanos hay en la Tierra?",
    answers: ["11", "22", "4", "5", "7"],
    correctAnswer: "5",
  },
  {
    type: "Geografia",
    question: "Cual de estos paises es el mas grande en Africa?",
    answers: [
      "Argelia",
      "Republica Democratica del Congo",
      "Tanzania",
      "Namibia",
      "Sudafrica",
    ],
    correctAnswer: "Argelia",
  },
  {
    type: "Geografia",
    question: "Cual de estos paises es el mas poblado de Africa?",
    answers: ["Egipto", "Mali", "Marruecos", "Sudafrica", "Nigeria"],
    correctAnswer: "Nigeria",
  },
  {
    type: "Geografia",
    question: "Cual es la parte mas seca de la Tierra?",
    answers: [
      "America del Norte",
      "America del Sur",
      "La Antartida",
      "Asia",
      "Oceania",
    ],
    correctAnswer: "La Antartida",
  },
  {
    type: "Geografia",
    question: "Cual es el lago mas profundo del mundo?",
    answers: ["Baikal", "Huron", "Victoria", "Constanza", "Nilo"],
    correctAnswer: "Baikal",
  },
  {
    type: "Geografia",
    question: "Cual es la isla mas grande del mar Mediterraneo",
    answers: ["Chipre", "Cerdenia", "Sicilia", "Mallorca", "Ibiza"],
    correctAnswer: "Silicia",
  },
  {
    type: "Geografia",
    question: "El estrecho de Gibraltar separa Espania de?",
    answers: ["Argelia", "Marruecos", "Libia", "Portugal", "Francia"],
    correctAnswer: "Marruecos",
  },
  {
    type: "Geografia",
    question: "Cual es la ciudad mas poblada del mundo?",
    answers: [
      "Shanghai, China",
      "Pekin, China",
      "Tokyo, Japon",
      "Buenos Aires, Argentina",
      "Moscu, Rusia",
    ],
    correctAnswer: "Shanghai, China",
  },
  {
    type: "Geografia",
    question: "En que frontera se encuentra el Everest?",
    answers: [
      "Nepal e India",
      "China e India",
      "China y Nepal",
      "China y Rusia",
      "China y Corea",
    ],
    correctAnswer: "China y Nepal",
  },
  {
    type: "Geografia",
    question: "Cuantos volcanes hay activos en el mundo?",
    answers: ["1000", "1500", "1700", "50", "8"],
    correctAnswer: "1500",
  },
  {
    type: "Ingles",
    question: "Where do you usually eat lunch?",
    answers: [
      "Sandwich",
      "At 12",
      "With Jane",
      "In the cafeteria",
      "In the night",
    ],
    correctAnswer: "In the cafeteria",
  },
  {
    type: "Ingles",
    question: "How long did you study for last night?",
    answers: [
      "For three hours",
      "English",
      "In my room",
      "With Bob",
      "In the night",
    ],
    correctAnswer: "For three hours",
  },
  {
    type: "Ingles",
    question: "How often do you play tennis?",
    answers: [
      "With John",
      "For two hours",
      "Almost every day",
      "On Tuesday",
      "In the morning",
    ],
    correctAnswer: "Almost every day",
  },
  {
    type: "Ingles",
    question: "How often do you write letters?",
    answers: [
      "I don't like to write",
      "I wrote then often",
      "I write letters once a month",
      "I read then often",
      "I eat sometimes",
    ],
    correctAnswer: "I write letters once a month",
  },
  {
    type: "Ingles",
    question: "She was working on her computer with her baby next to _____",
    answers: ["herself", "her", "him", "her own", "hers"],
    correctAnswer: "her",
  },
  {
    type: "Ingles",
    question: "I'm very happy _____ in India. I really miss being there",
    answers: [
      "to live",
      "to have lived",
      "to sleep",
      "to be lived",
      "to be living",
    ],
    correctAnswer: "to have lived",
  },
  {
    type: "Ingles",
    question: "George is only interested ____ making money",
    answers: ["to", "in", "live", "eat", "with"],
    correctAnswer: "in",
  },
  {
    type: "Ingles",
    question: "Mr. Goodson is good ___ basketball",
    answers: ["on", "in", "about", "at", "under"],
    correctAnswer: "at",
  },
  {
    type: "Ingles",
    question: "I am absolutely fascinated ____ nature",
    answers: [
      "about",
      "by",
      "for",
      "with",
      "in",
    ],
    correctAnswer: "by",
  },
  {
    type: "Ingles",
    question: "Where does the president of the United States live?",
    answers: [
      "In the empire States building",
      "In the Pentagon",
      "In the White House",
      "In the United States Capitol",
      "In my house",
    ],
    correctAnswer: "In the White House",
  },
  {
    type: "Ingles",
    question: "What is the symbol of Canada?",
    answers: [
      "The thistle",
      "The maple leaf",
      "The golden wattle",
      "A moose",
      "None of the above",
    ],
    correctAnswer: "The maple leaf",
  },
  {
    type: "Ingles",
    question: "Which colossal monument can you see at the entrance of New York harbour",
    answers: [
      "The State of Liberty",
      "The mausoleum of Ulysses S. Grant (or grant's top)",
      "The Washington Square Arch",
      "The Columbus Circle Fountain",
      "The London Bridge",
    ],
    correctAnswer: "The State of Liberty",
  },
  {
    type: "Ingles",
    question: "What is the capital of New Zeland?",
    answers: [
      "Wellington",
      "Aucklan",
      "Queenstown",
      "Hamilton",
      "Scotland",
    ],
    correctAnswer: "Wellington",
  },
  {
    type: "Ingles",
    question: "How do you get to school?",
    answers: [
      "Riding bicycle",
      "With the train",
      "In train",
      "Flying",
      "By train",
    ],
    correctAnswer: "Riding bicycle",
  },
  {
    type: "Ingles",
    question: "What will you do this afternoon?",
    answers: [
      "I will play soccer",
      "I played soccer",
      "I go to play soccer",
      "I play soccer",
      "I eat",
    ],
    correctAnswer: "I will play soccer",
  },
  {
    type: "Geografia",
    question: "Que idioma se habla en Israel?",
    answers: ["Espaniol", "Ruso", "Ingles", "Hebreo", "Israelita"],
    correctAnswer: "Hebreo",
  },
  {
    type: "Ingles",
    question: `Como se dice "gato" en ingles?`,
    answers: ["dog", "rabbit", "cat", "lion", "tiger"],
    correctAnswer: "cat",
  },
  {
    type: "Ingles",
    question: "En que pais se habla ingles?",
    answers: ["Argentina", "Espania", "India", "Estados Unidos", "Rusia"],
    correctAnswer: "Estados Unidos",
  },
  {
    type: "Ingles",
    question: `Que significa el verbo "to be"?`,
    answers: ["Ser o estar", "Correr", "Hacer", "Ir", "Cocinar"],
    correctAnswer: "Ser o estar",
  },
];

fillQuestions = (type) => {
  questionsBank.forEach((question) => {
    if (question.type == type && avaiableQuestions.length <= maxQuestion) avaiableQuestions.push(question);
    if (!type && avaiableQuestions.length <= maxQuestion)
      avaiableQuestions.push(question);
  });
};

start = () => {
  score = 0;
  questionCounter = 0;
  fillQuestions(questionType);
  getQuestion();
};

getQuestion = () => {
  const questionIndex = Math.floor(Math.random() * avaiableQuestions.length);
  currentQuestion = avaiableQuestions[questionIndex];
  if (avaiableQuestions == 0) {
    localStorage.setItem('mostRecentScore', score);
    localStorage.setItem('questionsResponse', questionCounter)
    return window.location.assign('../end/end.html')
  }
  question.innerText = currentQuestion.question;
  choices.forEach((choice) => {
    const number = choice.dataset["number"];
    choice.innerText = currentQuestion.answers[number];
  });
  counter.innerText = `${questionCounter} / ${localStorage.getItem('maxQuestion')}`;
  avaiableQuestions.splice(questionIndex, 1);
  questionCounter ++
  acceptedQuestion = true;
};

choices.forEach( choice => {
  choice.addEventListener('click', e => {
    if (!acceptedQuestion) return 

    acceptedQuestion = false;
    const selectedChoice = e.target;
    const selectedAnswer = currentQuestion.answers[selectedChoice.dataset['number']];
    const questionResult = selectedAnswer == currentQuestion.correctAnswer ? 'correct' : 'incorrect';
    if (questionResult == 'correct') {
      score++;
      correctSound.play();
    } else 
    incorrectSound.play();
    selectedChoice.classList.add(questionResult);
    setTimeout(()=> {
      selectedChoice.classList.remove(questionResult);
      getQuestion();
    }, 2000)
  });
});

function sound(src) {
  this.sound = document.createElement("audio");
  this.sound.src = src;
  this.sound.setAttribute("preload", "auto");
  this.sound.setAttribute("controls", "none");
  this.sound.style.display = "none";
  document.body.appendChild(this.sound);
  this.play = function () {
    this.sound.play();
  };
  this.stop = function () {
    this.sound.pause();
  };
}

start();
